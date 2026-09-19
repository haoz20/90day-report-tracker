# Contributing

## Branch strategy

```
feature/*  ─┐
design/*   ─┼─→  develop  ─→  main
fix/*      ─┘
```

- Work happens on a `feature/*`, `design/*`, or `fix/*` branch cut from `develop`.
- Open a PR from that branch into `develop`. Once merged and verified, `develop` is periodically promoted into `main` via a PR.
- Never commit directly to `develop` or `main` — always go through a PR.

## CI

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs lint (`npm run lint`) and build (`npm run build`, which includes the TypeScript check) on:

- every push to `main`, `develop`, or a `feature/**` / `design/**` / `fix/**` branch
- every pull request targeting `main` or `develop`

A PR should not be merged while CI is red.
