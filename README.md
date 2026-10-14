# Building Connections: program site

A static, no-build site for the Building Connections undergraduate research and extension program.

## Each year: edit one file

Open `cohort.js` and update:

- `label`: the academic year (for example "AY 2027-2028")
- `applyUrl`: the direct Google Form link
- `applicationDeadline`: set a date (leave `""` to hide it)
- `contact`: name and email shown under the apply button (leave email `""` to hide)
- `keyFacts`, `about`, `mentorship`, `conference`: dates, location, wording
- `projects`: add, remove, or reorder project entries

Save, commit, push. The page rebuilds itself from this file. `index.html`, `styles.css` and `app.js` normally never change.

## Publish on GitHub Pages

1. Create a repository (for example `buildingconnections`) and upload every file in this folder to the root.
2. In the repository: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site appears at `https://<your-username>.github.io/<repository-name>/` within a minute or two.

## Preview locally

Open `index.html` in a browser. No server is needed.

## Logos

Drop image files into an `assets/` folder and set `logo: "assets/name.png"` on a partner in `cohort.js`. Use logos you have permission to use.
