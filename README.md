# Directory structure

참조 https://sass-guidelin.es/#main-file

```
scss-project/
├─ dist/
│  ├─ css/
│  │  ├─ common.css
│  │  └─ common.css.map
│  └─ js/
│     ├─ common.min.js
│     └─ common.min.js.map
│
├─ entry/
│  ├─ css/
│  │  ├─ abstracts/ (or utilities/)
│  │  │  ├─ _mixins.scss // Sass Mixins
│  │  │  ├─ _template.scss // all file(abstracts, base, components, layout) import
│  │  │  └─ _variables.scss // Sass Variables
│  │  ├─ base/
│  │  │  ├─ _base.scss // base rules(css type, common.scss import)
│  │  │  ├─ _colors.scss // color rules(css type, common.scss import)
│  │  │  └─ _reset.scss // reset/normalize(css type, common.scss import)
│  │  ├─ components/ (or modules/)
│  │  │  ├─ _buttons.scss
│  │  │  ├─ _divisions.scss
│  │  │  ├─ _icons.scss
│  │  │  ├─ _layers.scss
│  │  │  ├─ _lists.scss
│  │  │  ├─ _messages.scss
│  │  │  └─ _tabs.scss
│  │  ├─ layout/
│  │  │  ├─ _aligns.scss
│  │  │  ├─ _footer.scss
│  │  │  ├─ _forms.scss
│  │  │  ├─ _grid.scss
│  │  │  ├─ _header.scss
│  │  │  ├─ _navigation.scss
│  │  │  └─ _sidebar.scss
│  │  └─ pages/
│  │     ├─ common.scss
│  │     └─ main.scss
│  ├─ js/ (based AM-M)
│  │  ├─ aside
│  │  ├─ common
│  │  ├─ community
│  │  ├─ corp
│  │  ├─ event
│  │  ├─ member
│  │  ├─ recruit
│  │  ├─ resume
│  │  ├─ search
│  │  ├─ service
│  │  └─ tab
│  └─ lib/
│     └─ swiper-3.3.1/
│        ├─ README.md
│        ├─ swiper-3.3.1.css
│        ├─ swiper-3.3.1.js
│        └─ swiper-3.3.1.min.js
│
├─ guide/
│  ├─ guide.html
│  └─ page_template.html
│
├─ css-config.js
├─ js-config.js
└─ webpack.config.js
```

# What's included

| Name                       | Description                                                    | Type                       |
| -------------------------- | -------------------------------------------------------------- | ----------------------------- |
| abstracts/ | | |
| abstracts/\_mixins.scss | @mixin: box-sizing, display-flex, flex, order, flex-wrap, align-content, flex-direction, transform, animation,   keyframes, transition, calc, clearfix | @mixin |
| abstracts/\_template.scss | all file(abstracts, base, components, layout) import | |
| abstracts/\_variables.scss | color, icon(data:image), easing variables, icon function | $(variables), @function |
| base/ | | |
| base/\_base.scss | base rules(common.scss import) | css |
| base/\_colors.scss | color rules(common.scss import) | css |
| base/\_reset.scss | reset / normalize(common.scss import) | css |
| components/ | | |
| components/\_buttons.scss | @mixin: layout-button, button-group | @mixin |
| components/\_divisions.scss | %: layout-division-line, layout-inner-division, 
@mixin ui-division-line, ui-inner-division | %, @mixin |
| components/\_icons.scss | icon(used \_variables.scss) Placeholder Selectors(%) | % |
| components/\_layers.scss  | %: layout-layer, layout-layer-promotion | % |
| components/\_lists.scss | @mixin: list-detail-filter, list-detail-sort, hash-tag, list-m-top-plus, list-m-top-logo, list-m-top, list-normal-type, %list-layout | %, @mixin |
| components/\_messages.scss  | %layout-message, @mixin ui-message | %, @mixin |
| components/\_tabs.scss  | %layout-tab, @mixin ui-tab-type-web, @mixin ui-tab-type-app | %, @mixin |
| layout/   | | |
| layout/\_aligns.scss | @mixin v-align, h-align, c-align, %layout-align | %, @mixin |
| layout/\_footer.scss | .footer(main) | css |
| layout/\_forms.scss | | |
| layout/\_grid.scss | @mixin make-grid($size: 12), %layout-grid | %, @mixin |
| layout/\_header.scss | header, %header-util-button(main) | css |
| layout/\_navigation.scss | | |
| layout/\_sidebar.scss | | |
