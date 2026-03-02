#!/usr/bin/env python3
"""Move <figure> elements to right after the paragraph that first references them.

Handles both cases:
- Figures that appear AFTER their first reference (moved up)
- Figures that appear BEFORE their first reference (moved down)

Usage: python3 scripts/reorder-figures.py blog/visual-info-theory/index.html
"""

import re
import sys


def reorder_figures(lines):
    # 1. Identify figure blocks: list of (id, start_line, end_line)
    figure_blocks = []
    i = 0
    while i < len(lines):
        m = re.match(r'\s*<figure id="([^"]+)"', lines[i])
        if m:
            fig_id = m.group(1)
            start = i
            while i < len(lines) and '</figure>' not in lines[i]:
                i += 1
            end = i  # line containing </figure>
            figure_blocks.append({'id': fig_id, 'start': start, 'end': end})
        i += 1

    if not figure_blocks:
        return lines

    # 2. For each figure, find the first reference anywhere in the document
    #    (excluding references inside the figure's own caption)
    moves = []  # (fig_block, insert_after_line)
    for fig in figure_blocks:
        ref_pattern = re.compile(r'href="#' + re.escape(fig['id']) + r'"')
        first_ref_line = None
        for j in range(len(lines)):
            # Skip lines inside this figure's own block
            if fig['start'] <= j <= fig['end']:
                continue
            if ref_pattern.search(lines[j]):
                first_ref_line = j
                break

        if first_ref_line is None:
            continue  # no reference found, leave in place

        # Find the end of the block element containing the first reference.
        # Look for closing </p>, </ul>, </ol> on or after the ref line.
        insert_after = None
        for j in range(first_ref_line, len(lines)):
            if re.search(r'</(?:p|ul|ol)>', lines[j]):
                insert_after = j
                break

        if insert_after is None:
            continue

        # Only move if figure is not already right after the reference
        if fig['start'] == insert_after + 1:
            continue  # already in the right place

        moves.append((fig, insert_after))

    if not moves:
        return lines

    # 3. Extract all figure blocks that need moving, then remove them,
    #    then insert at target positions.

    # First, extract content of each figure block
    for fig, _ in moves:
        fig['lines'] = lines[fig['start']:fig['end'] + 1]

    # Remove figure blocks from lines (bottom to top to keep indices stable)
    blocks_to_remove = sorted(
        [fig for fig, _ in moves], key=lambda f: f['start'], reverse=True
    )
    for fig in blocks_to_remove:
        del lines[fig['start']:fig['end'] + 1]

    # Now recalculate insert positions: each removal shifts later line numbers
    # We need to find the insert_after line again by searching for the reference
    for i, (fig, _) in enumerate(moves):
        ref_pattern = re.compile(r'href="#' + re.escape(fig['id']) + r'"')
        first_ref_line = None
        for j in range(len(lines)):
            if ref_pattern.search(lines[j]):
                first_ref_line = j
                break

        if first_ref_line is None:
            moves[i] = (fig, None)
            continue

        insert_after = None
        for j in range(first_ref_line, len(lines)):
            if re.search(r'</(?:p|ul|ol)>', lines[j]):
                insert_after = j
                break

        moves[i] = (fig, insert_after)

    # Insert figure blocks at their new positions (bottom to top)
    moves_valid = [(fig, pos) for fig, pos in moves if pos is not None]
    moves_valid.sort(key=lambda x: x[1], reverse=True)
    for fig, insert_after in moves_valid:
        for k, fl in enumerate(fig['lines']):
            lines.insert(insert_after + 1 + k, fl)

    return lines


def main():
    if len(sys.argv) < 2:
        print(f"Usage: {sys.argv[0]} <html-file>")
        sys.exit(1)

    filepath = sys.argv[1]
    with open(filepath, 'r') as f:
        lines = f.readlines()

    result = reorder_figures(lines)

    with open(filepath, 'w') as f:
        f.writelines(result)

    print(f"Reordered figures in {filepath}")


if __name__ == '__main__':
    main()
