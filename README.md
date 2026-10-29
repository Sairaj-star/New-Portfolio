# Sairaj Deshmukh — Cinematic Portfolio

A responsive, cinematic personal portfolio built with plain HTML, CSS, and JavaScript. The design combines custom CSS interactions inspired by the principles found in SmoothUI, Magic UI, and Unlumen UI: expressive but purposeful motion, modular project cards, refined visual hierarchy, responsive components, and reduced-motion support.

## Included
- Complete one-page portfolio with hero, project gallery, hardware projects, about, toolkit, certificates, education, and contact sections
- Uploaded portrait and resume
- Custom-generated CSS project previews, no external screenshots required
- The uploaded `Malhari.mp3` included under `assets/`
- Floating music player with play/pause, mute, volume, progress and seek controls
- Music continues while visitors scroll because one looping audio element stays mounted in the page
- Mobile navigation, reveal effects, responsive layouts, keyboard focus styles, reduced-motion support
- Search and social-sharing metadata

## Run locally
Open `index.html` in a browser. No build command or package installation is needed.

## Music behavior
The soundtrack is included at `assets/Malhari.mp3`. Visitors must press Play once because browsers generally block autoplay with sound. Once started, music loops and continues playing while visitors scroll between sections. The floating player remains visible on screen. If your browser blocks audio, click the Play button.

## Deploy to Render
1. Extract this ZIP and push the contents of the `sairaj-portfolio` folder to a GitHub repository.
2. In Render, choose **New + → Static Site** and connect the repository.
3. Leave the Build Command blank.
4. Set Publish Directory to `.`.
5. Deploy.

## Before sharing with recruiters
- Test the live project URLs because their availability can change.
- Add LinkedIn if you want it included (a URL was not present in the resume).
- Add genuine project screenshots, short case studies, and measured outcomes as you gather them.
- The Money Mind preview and other project art are illustrative UI mockups, not claims that the live apps look exactly like the previews.
- Personal Jarvis is described as in development. No unverified performance metrics, testimonials, or job outcomes are claimed.

## Content
Education, training, technologies, certifications, and project descriptions are based on the supplied resume and earlier portfolio content. Update the site as the experience changes.


## Design references and attribution

The visual direction was authored for this portfolio and informed by public documentation and examples from:
- [SmoothUI](https://github.com/educlopez/smoothui) (MIT licensed; used as a design reference, not copied as a component dependency)
- [Magic UI](https://github.com/magicuidesign/magicui) (MIT licensed; used as a design reference, not copied as a component dependency)
- [Unlumen UI Docs](https://github.com/leovvx/unlumen-ui-docs) (public UI documentation/component registry; used as a design reference)

This portfolio does not import or bundle those libraries. The page is custom HTML/CSS/JavaScript, so static hosting does not need npm packages or a build step.
