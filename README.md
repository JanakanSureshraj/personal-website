# Janakan Sureshraj — Personal Website

A minimalist, responsive personal website and technical journal built with React, React Router and custom CSS.

## Run locally

```bash
npm install
npm start
```

## Build for production

```bash
npm run build
```

## Publishing a blog note

1. Create a Markdown file in `public/articles/`, for example `my-new-note.md`.
2. Add an entry to the `posts` array near the top of `src/App.js`:

```js
{
  slug: 'my-new-note',
  published: true,
  title: 'My New Note',
  date: '2026-10-20',
  category: 'Machine Learning',
  description: 'A short summary shown in the article index.',
  file: '/articles/my-new-note.md'
}
```

3. Write the article in Markdown. GitHub-flavoured Markdown tables, fenced code blocks and math are supported. Use `$...$` for inline equations and `$$...$$` for display equations.
4. Commit and push. Vercel will deploy the update from the connected repository.

The two example notes in `public/articles/` are unpublished drafts to help check equation, table and code rendering. Set `published: true` when you want an article to appear in the public index.

## Design notes

- Three primary pages: Home, Experience and Blog; articles use `/blog/:slug` routes.
- Light slate/mist palette with muted teal accents; dark mode uses olive/charcoal tones and warm cream text.
- Theme preference is saved locally in the browser.
- The existing résumé PDF is retained in `public/`.
