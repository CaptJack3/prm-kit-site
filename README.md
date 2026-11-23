# PRM Kit project website

A standalone GitHub Pages presentation for [PRM Kit](https://github.com/CaptJack3/multiobjective-prm-kit).

The website contains the project video, selected research images, a capability overview and links to the toolkit. The toolkit repository, its README and its releases are maintained separately. The toolkit repository, guides and release downloads are publicly accessible.

## Preview

Run `python3 -m http.server 8080 --bind 127.0.0.1` here, then open `http://127.0.0.1:8080`.

This is a static website. It requires no build tools, package installation, external fonts, analytics or server application.

## Edit

- `index.html`: page content, links and accessible structure.
- `style.css`: responsive layout and visual styling.
- `script.js`: video playback button, full-size scene viewer and command copying.
- `assets/project-demo.mp4`: the uploaded project video, copied unchanged.
- `assets/`: selected original research images and the site mark.

The video is stored locally so playback does not depend on a private GitHub session or an expiring attachment URL. Replace it with the final project video when needed. The video uses native controls and metadata preloading, with no autoplay.

## GitHub Pages

Publish from **Settings → Pages → Deploy from a branch → main → /(root)**. The `.nojekyll` file enables direct static hosting. Relative asset paths work under the project URL and during local preview.

The public site includes only its presentation assets. Robot meshes, research datasets, planner code and credentials are not part of this repository.

## Asset provenance

The three environment images are unchanged multiview previews from the PRM Kit research showcase. The poster is the kitchen assembly preview. The project video is the owner's GitHub attachment `331acb83-4525-439c-970d-568803ff2548`. Their original checksums and paths are recorded in `ASSET_PROVENANCE.json`.

Historical scene images and route videos show documented hardware revisions. Read the toolkit's research guide for the distinction. Public viewing of this website does not grant an open-source redistribution license for the research media or toolkit.
