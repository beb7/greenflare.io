<!--
# v0.18.0
_2018_
- [Downloads for v0.18.0](https://syna.okkur.org/releases/v0.18.0)
- [Changelog since v0.17.2](#changes-since-v0171)

## Documentation for v0.17
[Documentation](https://syna.okkur.org/docs) *Documentation defaults to latest release*

## Changes since v0.17.2

## Fixes since v0.17.2

---

-->

# v0.17.4

_2020-10-23_

- [Downloads for v0.17.3](https://syna.okkur.org/releases/v0.17.4)
- [Changelog since v0.17.3](#changes-since-v0173)

## Documentation for v0.17.3

[Documentation](https://syna.okkur.org/docs) _Documentation defaults to latest release_

## Changes since v0.17.3

- Global variable hide similar to "disabled" [817](https://github.com/okkur/syna/pull/817)
- repositories_github: Add allow list attribute [815](https://github.com/okkur/syna/pull/815)

## Fixes since v0.17.3

- Fix "read more" link on tiled list [832](https://github.com/okkur/syna/pull/832)
- Fix disabled attribute on subitems [829](https://github.com/okkur/syna/pull/829)

---

# v0.17.3

_2020-07-25_

- [Downloads for v0.17.3](https://syna.okkur.org/releases/v0.17.3)
- [Changelog since v0.17.2](#changes-since-v0172)

## Documentation for v0.17.3

[Documentation](https://syna.okkur.org/docs) _Documentation defaults to latest release_

## Changes since v0.17.2

- list: Update whitespace in list mode [776](https://github.com/okkur/syna/pull/776)
- portfolio: Add support for background image on portfolio overlays [802](https://github.com/okkur/syna/pull/802)
- repositories_hithub: Added new fragment to fetch and display user repositories from Github [803](https://github.com/okkur/syna/pull/803)
- Update documentation
- Added more tests

## Fixes since v0.17.2

- nav: Add support for nested menus by adding dropdowns [781](https://github.com/okkur/syna/pull/781)
- nav: Fix the bug that prevented search from working if there were multiple nav fragments in one page [782](https://github.com/okkur/syna/pull/782)
- content: Fix sticky sidebar issues [788](https://github.com/okkur/syna/pull/788)
- items: Fix overflowing image issue [794](https://github.com/okkur/syna/pull/794)
- Fix multilingual pages not showing subitems of fragments in non default language page [800](https://github.com/okkur/syna/pull/800)

---

# v0.17.2

_2020-06-01_

- [Downloads for v0.17.2](https://syna.okkur.org/releases/v0.17.2)
- [Changelog since v0.17.1](#changes-since-v0171)

## Documentation for v0.17.2

[Documentation](https://syna.okkur.org/docs) _Documentation defaults to latest release_

## Changes since v0.17.1

- Spanish translation (now supporting Spanish, French, Dutch, English, German and Portuguese) [772](https://github.com/okkur/syna/pull/772)

## Fixes since v0.17.1

- Fix faulty conditional that broke compatibility with Hugo v0.72.0 [774](https://github.com/okkur/syna/pull/774)

---

# v0.17.1

_2020-05-23_

- [Downloads for v0.17.1](https://syna.okkur.org/releases/v0.17.1)
- [Changelog since v0.17.0](#changes-since-v0170)

## Documentation for v0.17.1

[Documentation](https://syna.okkur.org/docs) _Documentation defaults to latest release_

## Changes since v0.17.0

- Allow custom inputs in the contact form [754](https://github.com/okkur/syna/pull/754)

## Fixes since v0.17.0

- Fix duplicate section pages in list fragment [755](https://github.com/okkur/syna/pull/755)
- Fix a bug that caused subsections be shown if the config was set to not show them or show duplicate subsections if config was set to show them.
- hero: Fix image.height and image.width [768](https://github.com/okkur/syna/pull/768)
- contact: Fix alignment of contact fragment's submit button when recaptcha is not fully loaded [767](https://github.com/okkur/syna/pull/767)
- config: Fix duplicated output [765](https://github.com/okkur/syna/pull/765)

---

# v0.17.0

_2020-04-24_

- [Downloads for v0.17.0](https://syna.okkur.org/releases/v0.17.0)
- [Changelog since v0.16.2](#changes-since-v0162)

## Documentation for v0.17

[Documentation](https://syna.okkur.org/docs) _Documentation defaults to latest release_

## Changes since v0.16.2

- Dutch translation (now supporting French, Dutch, English, German and Portuguese)

## Fixes since v0.16.2

- Fix date_format not being used [738](https://github.com/okkur/syna/pull/738)
- Remove relLangURL for assets [732](https://github.com/okkur/syna/pull/732)
- Fix list section path in exampleSite [726](https://github.com/okkur/syna/pull/726)

---

# v0.16.2

_2020-03-23_

- [Downloads for v0.16.2](https://syna.okkur.org/releases/v0.16.1)
- [Changelog since v0.16.1](#changes-since-v0161)

## Documentation for v0.16

[Documentation](https://syna.okkur.org/docs) _Documentation defaults to latest release_

## Changes since v0.16.1

- `portfolio`: Add support for icons
- `hero`: Remove leftover particle code, when disabled
- `item`: Images and icons can now have urls
- Add linter and fixer for JS files
- Migrate to Hugo's internal [opengraph template](https://gohugo.io/templates/internal/#open-graph)

## Fixes since v0.16.1

- Fix release links

---

# v0.16.1

_2020-01-24_

- [Downloads for v0.16.1](https://syna.okkur.org/releases/v0.16.1)
- [Changelog since v0.16.0](#changes-since-v0160)

## Documentation for v0.16

[Documentation](https://syna.okkur.org/docs) _Documentation defaults to latest release_

## Changes since v0.16.0

- Add alpha support for multilingual websites [687](https://github.com/okkur/syna/pull/687)
- Add e2e tests via Cypress

## Fixes since v0.16.0

- `contact`: formspree forms now work synchronously [689](https://github.com/okkur/syna/pull/689)
- `list`: Fix list fragment not working on some sections [688](https://github.com/okkur/syna/pull/688)
- Fix language code prefix of static assets [680](https://github.com/okkur/syna/issues/680)
- Fix incorrect language config key [684](https://github.com/okkur/syna/pull/684)
- Fix events not firing [681](https://github.com/okkur/syna/pull/681)
- Fix FAQ card width overflow on mobile [673](https://github.com/okkur/syna/pull/673)

---

# v0.16.0

_2019-12-31_

- [Downloads for v0.16.0](https://syna.okkur.org/releases/v0.16.0)
- [Changelog since v0.15.0](#changes-since-v0150)

## Documentation for v0.16

[Documentation](https://syna.okkur.org/docs) _Documentation defaults to latest release_

## Changes since v0.15.0

- Support Hugo v0.61
- Move skeleton css to theme side
- Helper classes for each section and containers #665
- Add Cypress based tests using Github actions #647 #666
- Use unsafe markdown configuration due to Hugo change #645
- Bootstrap update to v4.4.1
- `content`: Added defaulting for page title from content fragment #670
- `content`: Add addtional content fragment documentation #668
- `content`: Content fragment now supports `padding` variable like other fragments using container helper
- `hero`: Add minHeight parameter
- `list`: Add optional sort order to lists

## Fixes since v0.15.0

- Fix default list order #669
- Remove unnencessary markdownify calls #646
- Refactor modal html into js code #643
- Fix \_index being added into lists #610
- Fix subdirecotry fragments not working #588
- Remove extra space before codeblocks #605
- `events`: Fix missing character issue in published events with question marks in arguments #608
- `list`: Fix child depth #606
- `404`: Fix fragments not showing on 404 page #589

---

# v0.15.2

_2019-10-16_

- [Downloads for v0.15.2](https://syna.okkur.org/releases/v0.15.2)
- [Changelog since v0.15.1](#changes-since-v0151)

## Documentation for v0.15.2

[Documentation](https://syna.okkur.org/docs) _Documentation defaults to latest release_

## Changes since v0.15.1

- Add support for sort order in the list fragment #583
- Add minHeight param to hero fragment #571
- Bump Hugo's minimum required version to v0.58 #588

## Fixes since v0.15.1

- Fix fragments not showing in the 404 page #575
- Fix global fragments with subitems showing warning #582
- Fix toc list displaying pagination in docs
- Fix extra padding on code blocks #603
- Filter special pages out of list fragment's displayed pages #595
- Fix children deptch in toc #596
- Fix bad split in event params (pubsub) #594

---

# v0.15.1

_2019-05-27_

- [Downloads for v0.15.1](https://syna.okkur.org/releases/v0.15.1)
- [Changelog since v0.15.0](#changes-since-v0150)

## Documentation for v0.15.1

[Documentation](https://syna.okkur.org/docs) _Documentation defaults to latest release_

## Changes since v0.15.0

## Fixes since v0.15.0

- Add the new auto generated files (have been missed in a previous commit)
- Move syna-grid.css from user side to theme side (bad approach, removes it from user side at least)
- Fix the .Dir deprecation warning, I have no idea how these are popping up

---

# v0.15.0

_2019-05_

- [Downloads for v0.15.0](https://syna.okkur.org/releases/v0.15.0)
- [Changelog since v0.14.0](#changes-since-v0140)

## Documentation for v0.15

[Documentation](https://syna.okkur.org/docs) _Documentation defaults to latest release_

## Changes since v0.14.0

- BREAKING: `item`: Item URL configuration is now `item_url` instead of `url`
- BREAKING: Custom JS and CSS within config.toml are replaced by `config` fragment
- Huge documentation overhaul
- Accesibility improvements via `alt` and `sr-only` tags
- Code snippets and inline code are more readable (invert background)
- Contrast improvements for text, buttons and backgrounds
- Add Title_align for better control of headers
- Enable and document usage of FontAwesome Pro
- Upgrade FontAwesome
- Show scrollspy and active page to navbar and sidebar based navbars
- Resize images automatically with the exception of `static/` based ones
- Use favicon.svg and favicon.png, if defined
- Add slot feature to combine various fragments
- Add support for social media cards
- Ability to create documentation via `content` and `list` using sidebar slots
- `list`: Add collapsible items
- `nav`: Add sticky option
- `hero`: Ability to customize particle.js
- `pricing`: Add plan:change event
- New: `events`: Client side pubsub like event framework including triggering events via URL
- `events`: Base64 obfuscated event URLs
- New: `stripe`: Add payments fragment based on stripe
- `stripe`: Prevent double charges by disabling button
- `stripe`: Add multiple price option
- `stripe`: Add custom price option
- New: `graph`: Add chart.js fragment
- New: `TOC`: Add table of contents fragment
- New: `config`: New config fragment to inject custom assets such as `meta`, `link` or `script`
- New: `header`: Add separate header fragment

## Fixes since v0.14.0

- Fix consistency of header margins
- Retriggering an event will clear fields
- `stripe`: Fix multiple Stripe fragments on a single page
- `contact`: Fix Recaptcha positioning
- `contact`: Make contact form async even within Firefox
- `table`: Optimize darker background colors
- `content`: Sidebar margin fixes
- `404`: Fix layout issues
- `editor`: Fix editor not always loading
- `react-portal`: Fix portal not always loading

---

# v0.14.0

_2018-10-15_

- [Downloads for v0.14.0](https://syna.okkur.org/releases/v0.14.0)
- [Changelog since v0.13.0](#changes-since-v0130)

## Documentation for v0.14

[Documentation](/tree/v0.14/docs)

## Changes since v0.13.0

- BREAKING: Fragment lookup order was broken in v0.13. Please check your fragments are overwritten as expected.
- BREAKING: `item`: Icons should be placed under `asset` table
- BREAKING: `items`: Icon for each column should be placed under `asset` table
- BREAKING: `logos`: Deprecated `logos` fragment in favor of `items` fragment
- BREAKING: `header`: `align` variable is changed to `header_align`
- Some colors have slightly changed. The change is a major internal overall. It's not considered a breaking change but please review your design.
- `nav`: Breadcrumb support added using `breadcrumb: false/true` and `breadcrumb_level: 1`
- `table`/`item`: Extract table into its own helper
- `list`: Display date and category for pages
- `list`: Pagination is now supported
- `list`: Change page title size based on visibility of summary
- `list`: Add ability to use a custom summary using `.Params.summary`
- `content`: `.Params.summary` added with markdown support
- `content`: Display date
- `content`: Fix max-width of images in the content
- `pricing`: Add warning message in case there are no items available
- `global`: All fragments now support alignment of the title and subtitle
- `faq`: Add `faq` fragment to list questions and answers
- Header (title and subtitle) code extracted into helper partial
- Text-color code extracted into helper partial
- Theme colors are now customizable through `config.toml`
- Hugo resource pipelines now builds sass files instead of Webpack
- Make build command minify by default

## Fixes since v0.13.0

- `contact`: Fix contact form not submitting data to Netlify

---

# v0.13.0

_2018-09-10_

- [Downloads for v0.13.0](https://syna.okkur.org/releases/v0.13.0)
- [Changelog since v0.12.0](#changes-since-v0120)

## Documentation for v0.13.0

[Documentation](/tree/v0.13.0/docs)

## Changes since v0.12.0

- BREAKING: Page declaration from `_index/index.md` needs to be moved to `content/_index.md`
- BREAKING: Page declaration for `_index/index.md` needs to be set to `headless = true`
- BREAKING: Image declaration changed from `[branding]`, `image = ""` to `[asset]` using consistent asset declaration
- BREAKING: Image declaration changed from `header = ""` to `[header]` using consistent asset declaration
- BREAKING: Image declaration changed from `[[logos]]` to `[[assets]]` using consistent asset declaration
- Hugo resource pipelines now builds sass files instead of Webpack
- Theme colors are now customizable through `config.toml`
- New: `list` fragment for section pages and page lists
- New: `pricing` fragment to show pricing and features
- New: `react-portal` fragment to embed react based features
- New: `editor` fragment to create an editor from JSON schemas
- New: `search` fragment enabling search as part of a page
- `navbar`: Support search in navbar
- `content`: Optionally show date and category in content fragment
- `footer`: `asset.title` is moved to `.Params.title`
- `portfolio`: Support image fallthrough
- `404`: Add ability to change and resize image
- `member`, `items`, `portfolio`: Display error messages, when no item is configured
- Refactor fragment lookup strategy
- Restructure exampleSite (showcase fragments and use as actual page for Syna)
- Add `/dev/` section to exampleSite for testing and development
- Extract code into helper partials

## Fixes since v0.12.0

- `footer`: Subtitle is now linked when there is no logo
- Use relLangURL for all links
- Fix recaptcha support for Netlify contact form
- Optimize asset sizes in exampleSite

---

# v0.12.0

_2018-08-06_

- [Downloads for v0.12.0](https://syna.okkur.org/releases/v0.12.0)
- [Changelog since v0.11.0](#changes-since-v0110)

## Documentation for v0.12.0

[Documentation](/tree/v0.12.0/docs)
[Getting started](/tree/v0.12.0/docs#using-starter)

## Changes since v0.11.0

- BREAKING: `content-single` and `content-split` merged into `content` fragment
- BREAKING: Moving to `_index` and `_global` as special directories and headless bundles
- BREAKING: Subpath handling made consistent with Hugo
- New: `header` fragment for easier section bundling and linking
- New: `portfolio` fragment to showcase projects etc.
- New: Categories for `content` fragment
- `member`: Company affiliation for single member mode
- `member`: Redesign single member mode
- Getting started guide
- Update documentation
- Bundle JS files and register them within each fragment
- `404`: Refactor 404 to be fragment based

## Fixes since v0.11.0

- Improve naming consistency
- Cleanup bootstrap files
- Add attribution for inspiration
- `table`: Align table cells using `align` variable
- `items`: Remove icon, if not set
- `item/table`: Fix icon + url
- `item`: Fix align = center

---

# v0.11.0

> Note: This version includes major breaking changes.
> With v0.11.0 most breaking changes are already settled.
> We expect a few more breaking changes in the coming releases, but nothing major.
> Our recommendation is to build your side from our release tags instead of master.

_2018-06-06_

- [Downloads for v0.11.0](https://syna.okkur.org/releases/v0.11.0)
- [Changelog since v0.10.0](#changes-since-v0100)

## Documentation

[Documentation](/tree/v0.11.0/docs)
[Examples](/tree/v0.11.0/exampleSite)

## Changes since v0.10.0

- BREAKING: Remove split layout in favour of content-split fragment
- BREAKING: Change all frontmatter variables named `link` to `url`
- BREAKING: Contact fragment configuration are loaded within the fragment controller
- NOTE: jQuery and jQuery Form Validator and BootstrapJS have been replaced with much smaller replacements
- NOTE: Nav and Footer are now fragments and should be configured
- Full rework of contact fragment
- Add support for global fragments
- Scroll to top button
- Netlify contact form support
- Use snake_case variable names
- Use nesting for frontmatter variables
- Default attribution to opt-in
- Settable jumbotron background
- Auto hide navbar (no menu items) with optional overwrite
- Single member mode for Member fragment
- Makefile to build and run a development server
- Add resource fallthrough to all images
- Remove extra whitespace in layout files
- Automatically set lastmod for content files
- Upgrade to Bootstrap v4
- Load all assets locally and remove usage of CDNs
- Introduce webpack for development
- Upgrade to latest Bootstrap v4.1
- Auto hide empty navigation bar

## Fixes since v0.10.0

- Recaptcha support
- Jumbotron corners
- Add links support for logo in footer fragment
- Fix full width coverage for particle.js
- Fontawesome icons now need to declare the full icon class: `fab fa-facebook` instead of `fa-facebook`
- Fix the default hidden contact fields.
- ParticleJS fixes

---

# v0.10.0

_2018-03-09_

- [Downloads for v0.10.0](https://syna.okkur.org/releases/v0.10.0)
- [Changelog since v0.9.0](#changes-since-v090)

## Documentation

[Examples](/tree/v0.10.0/exampleSite)

Notes: This version includes a major breaking change.

## Changes since v0.9.0

- Migrate data files to Page Bundles
- Use individual content files for member fragment
- Use individual content files for items fragment
- Reorganize Content structure

## Fixes since v0.9.0

- Split up member files into individual files (#13)
- Move from `<p>` to `<div>` for anything that could contain markdown content (#31)

---

# v0.9.0

_2017-12-08_

- [Downloads for v0.9.0](https://syna.okkur.org/releases/v0.9.0)
- [Changelog since v0.8.0](#changes-since-v080)

## Documentation

[Examples](/tree/v0.9.0/exampleSite)

Notes: Member and Footer fragments only support brand icons for now.

## Changes since v0.8.0

- Subscribe fragment reusing embed fragment
- Pre and Post subtitle for item for item fragment
- Migrate to Fontawesome v5
- Unchanged bootstrap v4 scss files
- Syna specific color overwrite

## Fixes since v0.8.0

- Page-top anchor (#20)

---

# v0.8.0

_2017-10-23_

- [Downloads for v0.8.0](https://syna.okkur.org/releases/v0.8.0)
- [Changelog since v0.7.0](#changes-since-v070)

## Documentation

[Examples](/tree/v0.8.0/exampleSite)

## Changes since v0.7.0

- Add icons to member fragment
- Color option for hero
- Item fragment with button and image/icon
- Cleanup example data
- Automatic push to demo via gitlab ci
- Update basefiles via reposeed

## Fixes since v0.7.0

- Member icon hover
- Print error on captcha inaccessible

---

# v0.7.0

_2017-10-18_

- [Downloads for v0.7.0](https://syna.okkur.org/releases/v0.7.0)
- [Changelog since v0.6.0](#changes-since-v060)

## Documentation

[Examples](/tree/v0.7.0/exampleSite)

## Changes since v0.6.0

- Option to hide unimportant columns on smaller devices
- Option to center table headers
- German translation
- Member fragment
- Source code note about syna
- Visual attribution

## Fixes since v0.6.0

- Table responsiveness
- Alignment legal footer
- Improve readability on mobile

---

# v0.6.0

_2017-10-08_

- [Downloads for v0.6.0](https://syna.okkur.org/releases/v0.6.0)
- [Changelog since v0.5.0](#changes-since-v050)

## Documentation

[Examples](/tree/v0.6.0/exampleSite)

## Changes since v0.5.0

- Merge item based fragments into item fragment
- Restructure example data
- Optional table for item fragment
- Table fragment

## Fixes since v0.5.0

- Alignment improvements for item fragment
- Responsiveness for item images

---

# v0.5.0

_2017-10-08_

- [Downloads for v0.5.0](https://syna.okkur.org/releases/v0.5.0)
- [Changelog since v0.4.0](#changes-since-v040)

## Documentation

[Examples](/tree/v0.5.0/exampleSite)

## Changes since v0.4.0

- Height and width option to hero logo
- Bind hero background image position to bottom
- Button fragment for call to action
- Reorganize fragments
- Cleanup data files
- Item fragment with cal to action

## Fixes since v0.4.0

- Fragment include conditionals

---

# v0.4.0

_2017-10-07_

- [Downloads for v0.4.0](https://syna.okkur.org/releases/v0.4.0)
- [Changelog since v0.3.0](#changes-since-v030)

## Documentation

[Examples](/tree/v0.4.0/exampleSite)

## Changes since v0.3.0

- Background color for body
- 404 page
- Multiple button option for hero
- Embed fragment for videos or other media

---

# v0.3.0

_2017-10-05_

- [Downloads for v0.3.0](https://syna.okkur.org/releases/v0.3.0)
- [Changelog since v0.2.0](#changes-since-v020)

## Documentation

[Examples](/tree/v0.3.0/exampleSite)

## Changes since v0.2.0

- Cleanup exampleSite
- Two column single page
- More example navigation

---

# v0.2.0

_2017-10-05_

- [Downloads for v0.2.0](https://syna.okkur.org/releases/v0.2.0)
- [Changelog since v0.1.0](#changes-since-v010)

## Documentation

[Examples](/tree/v0.2.0/exampleSite)

## Changes since v0.1.0

- Background color options
- Simple one column single page

---

# v0.1.0

_2017-10-04_

- [Downloads for v0.1.0](https://syna.okkur.org/releases/v0.1.0)
- [Changelog since v0.0.0](#changes-since-v000)

## Documentation

[Examples](/tree/v0.1.0/exampleSite)

## Changes since v0.0.0

- Bootstrap 4 support
- Logo fragment
- Contact fragment
- Legal footer fragment
- Footer fragment
- Hero fragment
- Row based item fragment
- Column based item fragment
