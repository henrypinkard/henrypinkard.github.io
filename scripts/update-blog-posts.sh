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
CSS_PATCHES="$SCRIPT_DIR/site-patches.css"
JS_PATCHES="$SCRIPT_DIR/site-patches.js"

inject_nav() {
  # Inject nav bar after <body> tag in an HTML file
  local file="$1"
  local tmp="${file}.tmp"
  sed -e '/<body>/r '"$NAV_BAR_FILE" "$file" > "$tmp"
  mv "$tmp" "$file"
}

append_css_patches() {
  # Append CSS overrides to end of a stylesheet
  local file="$1"
  echo "" >> "$file"
  cat "$CSS_PATCHES" >> "$file"
}

inject_js_patches() {
  # Inject JS before the last </script> tag in an HTML file
  local file="$1"
  local tmp="${file}.tmp"
  local patch="$JS_PATCHES"
  # Find the last </script> line number and insert patch content before it
  local last_script_line
  last_script_line=$(grep -n '</script>' "$file" | tail -1 | cut -d: -f1)
  if [ -z "$last_script_line" ]; then
    echo "  WARNING: no </script> tag found in $file"
    return 1
  fi
  # Output lines before the </script>, then the patch, then the rest
  head -n $((last_script_line - 1)) "$file" > "$tmp"
  echo "" >> "$tmp"
  cat "$patch" >> "$tmp"
  tail -n +"$last_script_line" "$file" >> "$tmp"
  mv "$tmp" "$file"
}

inject_abstract_cite_link() {
  # Insert arXiv/cite link before closing </div> of .abstract div
  local file="$1"
  local tmp="${file}.tmp"
  local cite_html='    <p style="font-weight: normal; font-size: 0.9rem; margin-top: 1rem; color: #999;"><a href="https://doi.org/10.48550/arXiv.2206.07867" style="color: #5a9bd5;">PDF version on arXiv</a> <span style="margin: 0 0.5em; color: #ccc;">|</span> <a href="#citation" style="color: #5a9bd5;">How to cite</a></p>'
  # Find the </div> that closes .abstract and insert before it
  awk -v cite="$cite_html" '
    /class="abstract"/ { in_abstract = 1 }
    in_abstract && /<\/div>/ {
      print cite
      in_abstract = 0
    }
    { print }
  ' "$file" > "$tmp"
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
  echo "  Injecting nav bar..."
  inject_nav "$DEST/index.html"

  # Append CSS overrides
  echo "  Applying CSS patches..."
  append_css_patches "$DEST/style.css"

  # Inject JS patches
  echo "  Injecting JS patches..."
  inject_js_patches "$DEST/index.html"

  # Add arXiv/cite link to abstract
  echo "  Adding cite link to abstract..."
  inject_abstract_cite_link "$DEST/index.html"

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
