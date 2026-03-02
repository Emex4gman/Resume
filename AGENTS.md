# AGENTS.md

## Cursor Cloud specific instructions

This is a **static portfolio website** built with vanilla HTML, CSS, and JavaScript. There is no backend, database, or framework.

### Running the dev server

Serve the project root over HTTP (required because `main.js` fetches `data/projects.json` at runtime):

```
npx serve -l 3000
```

Open `http://localhost:3000` in a browser. The site loads `./main.js` directly (not the webpack bundle in `dist/`).

### Build

`npm run build` runs webpack and outputs a minified bundle to `dist/main.js`. The live site does **not** reference `dist/main.js`; it loads `./main.js` directly. The build is only useful for producing a production bundle.

### Lint / Tests

There is no linter or test framework configured. The `npm test` script exits with an error by design (`echo "Error: no test specified" && exit 1`). JS syntax can be verified via `node --check main.js`.

### Key files

| File | Purpose |
|---|---|
| `index.html` | Single-page entry point |
| `main.js` | All runtime JS (navigation, project loading) |
| `css/main.css` | Styles |
| `data/projects.json` | Project data fetched at runtime |
| `webpack.config.js` | Optional production bundler config |
