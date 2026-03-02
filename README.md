# henrypinkard.github.io

Personal website and blog for Henry Pinkard. Built with Jekyll (Bay theme).

## Local development

```bash
bundle exec jekyll serve
```

## Blog posts

The blog has two types of posts:

**Standard posts** — Markdown files in `_posts/` with `layout: post`.

**External posts** — Self-contained static HTML sites from other repos, copied into `blog/`. Each has a stub in `_posts/` with `external_url` so it appears in the blog listing and links directly to the static page.

## Updating external blog posts

Run the update script to re-copy from source repos:

```bash
# Update all external posts
bash scripts/update-blog-posts.sh

# Update one specific post
bash scripts/update-blog-posts.sh visual-info-theory
```

For Visual Info Theory, rebuild the source first:
```bash
cd ~/GitRepos/VisualInfoTheoryPaper && make clean html
```

The encoding-structure post is edited directly in this repo (its source repo now redirects here).

## Adding a new external blog post

1. Add an update function in `scripts/update-blog-posts.sh` (follow the existing pattern)
2. Add it to the `ALL_POSTS` array
3. Create a stub in `_posts/` with `external_url`, `permalink` (to avoid path collision), `image`, and `blurb`
4. Run the script, commit, push
