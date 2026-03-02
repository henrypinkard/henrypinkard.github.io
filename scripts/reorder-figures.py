#!/usr/bin/env python3
"""Move <figure> elements to right after the paragraph that first references them.

Usage: python3 scripts/reorder-figures.py blog/visual-info-theory/index.html
"""

import re
import sys


def reorder_figures(lines):
    """Move each <figure> block to right after the line containing
    the closing tag of the block element with the first reference."""

    # 1. Identify figure blocks: list of (id, start_line, end_line)
    figure_blocks = []
    i = 0
    while i < len(lines):
        m = re.match(r'\s*<figure id="([^"]+)"', lines[i])
        if m:
            fig_id = m.group(1)
            start = i
            # Find closing </figure>
            while i < len(lines) and '</figure>' not in lines[i]:
                i += 1
            end = i  # line containing </figure>
            figure_blocks.append((fig_id, start, end))
        i += 1

    if not figure_blocks:
        return lines

    # 2. For each figure, find the first reference that comes BEFORE it
    moves = []  # (fig_id, start, end, insert_after_line)
    for fig_id, fig_start, fig_end in figure_blocks:
        ref_pattern = re.compile(r'href="#' + re.escape(fig_id) + r'"')
        first_ref_line = None
        for j in range(fig_start):
            if ref_pattern.search(lines[j]):
                first_ref_line = j
                break

        if first_ref_line is None:
            continue  # already before first ref or no ref

        # Find the end of the block containing the reference.
        # Look for closing </p>, </ul>, </ol> on or after the ref line.
        insert_after = None
        for j in range(first_ref_line, fig_start):
            if re.search(r'</(?:p|ul|ol)>', lines[j]):
                insert_after = j
                break

        if insert_after is not None and insert_after < fig_start:
            moves.append((fig_id, fig_start, fig_end, insert_after))

    if not moves:
        return lines

    # 3. Apply moves. Work from bottom to top to keep line numbers stable.
    moves.sort(key=lambda x: x[1], reverse=True)
    for fig_id, fig_start, fig_end, insert_after in moves:
        # Extract figure lines
        fig_lines = lines[fig_start:fig_end + 1]
        # Remove from original position
        del lines[fig_start:fig_end + 1]
        # Insert after the target line (adjust if target is before removed block,
        # which it always is since we checked insert_after < fig_start)
        for k, fl in enumerate(fig_lines):
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
