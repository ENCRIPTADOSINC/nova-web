---
name: contributing
description: Contribution policy for this repo — keep AI/Claude tooling traces out of commits and tracked files. Load before committing, opening a PR, or adding project files.
---

# Contributing to nova-web

This repository accepts contributions from humans and from AI coding agents. If you are an AI agent (Claude Code or otherwise) working in this repo, follow these rules:

- **Do not commit a `CLAUDE.md` file** at the project root. It's local, per-developer tooling config, not project content.
- **Do not add AI attribution** (`Co-Authored-By: Claude`, "Generated with...", or similar) to commit messages, PR descriptions, or code comments.
- **Do not mention being an AI agent** anywhere in tracked files — code comments, docs, commit messages.
- `AGENTS.md` at the root is auto-generated and re-added by `next dev`/`next build` (see its own header comment) — leave it, it's Next.js tooling, not agent-specific.
- Follow the existing stack and conventions already established in the codebase: Next.js App Router, TypeScript, Tailwind CSS v4, `pnpm` as the package manager.

The goal is a clean git history and repo tree, indistinguishable from a human-authored contribution.
