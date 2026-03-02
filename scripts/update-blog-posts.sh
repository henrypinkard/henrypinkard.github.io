#!/bin/bash
#
# Updates blog posts sourced from external repositories.
# Run from anywhere — the script finds its own location.
#
# Usage:
#   ./scripts/update-blog-posts.sh            # update all posts
#   ./scripts/update-blog-posts.sh POST_NAME  # update one post
#
# To add a new external post:
#   1. Add a function like update_encoding_structure() below
#   2. Add it to the ALL_POSTS array
#   3. Create a stub in _posts/ with external_url front matter

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SITE_DIR="$(dirname "$SCRIPT_DIR")"
REPOS_DIR="$(dirname "$SITE_DIR")"

NAV_BAR_FILE="$SCRIPT_DIR/nav-bar.html"

inject_nav() {
  # Inject nav bar after <body> tag in an HTML file
  local file="$1"
  local tmp="${file}.tmp"
  sed -e '/<body>/r '"$NAV_BAR_FILE" "$file" > "$tmp"
  mv "$tmp" "$file"
}

# ---------- visual-info-theory ----------
update_visual_info_theory() {
  local SRC="$REPOS_DIR/VisualInfoTheoryPaper/_site"
  local DEST="$SITE_DIR/blog/visual-info-theory"

  if [ ! -d "$SRC" ]; then
    echo "  SKIP: source not found at $SRC"
    echo "  (Run 'make clean html' in VisualInfoTheoryPaper first)"
    return 1
  fi

  echo "  Copying files..."
  rm -rf "$DEST"
  mkdir -p "$DEST"

  # Copy entire built site
  cp -r "$SRC"/* "$DEST/"

  # Inject nav bar
  inject_nav "$DEST/index.html"

  echo "  Done: /blog/visual-info-theory/"
}

# ---------- Add more posts here ----------

# ---------- Main ----------
ALL_POSTS=(visual-info-theory)

if [ -n "$1" ]; then
  POSTS=("$1")
else
  POSTS=("${ALL_POSTS[@]}")
fi

for post in "${POSTS[@]}"; do
  echo "Updating: $post"
  func="update_${post//-/_}"
  if declare -f "$func" > /dev/null; then
    $func
  else
    echo "  ERROR: no update function '$func' found"
    exit 1
  fi
done

echo ""
echo "All done. Review changes with 'git diff' then commit."
