# Cleanup Review (Safe-First)

This repo is a static portfolio site with the active runtime path:

- `index.html`
- `main.js`
- `css/main.css`
- `data/projects.json`

## Changes included in this PR

1. **`main.js` cleanup (behavior-preserving)**
   - Removed accidental globals (`for (item of ...)`, trailing `getDirection = ...`).
   - Removed leftover debug logging.
   - Reduced repeated screen-toggle code by centralizing it in one helper.
   - Kept existing selectors/classes so navigation behavior remains the same.
   - Added fetch error handling to avoid silent failures when project data cannot load.

2. **`index.html` cleanup**
   - Removed duplicate `author` meta tag.
   - Added `rel="noopener noreferrer"` to the external resume link opened in a new tab.

## Additional cleanup suggestions (not applied yet)

These are likely safe but were intentionally left as follow-up decisions:

1. **Archive/remove legacy files**
   - `old/index2.html`
   - `old/main2.js`
   - `css/chukwuemeka.css`
   - `data/temp.txt`
   - `form.php`

   They are not used by the current active page, but may still have historical value.

2. **Build output strategy**
   - Decide whether `dist/main.js` should be treated as generated output (and excluded), or as a committed deploy artifact.

3. **Basic automated checks**
   - Add a lightweight smoke check in CI (for example: JSON validity + JS syntax check) to reduce accidental breakage risk.
