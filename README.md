# Directory structure

참조 https://sass-guidelin.es/#main-file

```
scss-project/
├─ dist/
│  ├─ css/
│  │  ├─ common.css
│  │  └─ common.css.map
│  ├─ img/
│  │  └─ common-sprite.png
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
│  │  │  └─ _reset.scss // reset / normalize(css type, common.scss import)
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
│  │  ├─ pages/
│  │  │  ├─ common.scss
│  │  │  └─ main.scss
│  │  └─ sprites/
│  │     └─ common-sprite.scss
│  ├─ img/
│  │  ├─ common
│  │  │  ├─ button-favorite-on.png
│  │  │  └─ button-favorite.png
│  │  └─ dummy.js
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
├─ img-config.js
├─ js-config.js
├─ jsconfig.json (option, VS Code file)
└─ webpack.config.js
```

# What's included

| Name                        | Description                                                                                                                                                                   | Type                     |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| abstracts/                  |                                                                                                                                                                               |                          |
| abstracts/\_mixins.scss     | @mixin clearfix                                                                                                                                                               | @mixin                   |
| abstracts/\_template.scss   | all file(abstracts, base, components, layout) import                                                                                                                          |                          |
| abstracts/\_variables.scss  | color, icon(data:image), easing variables, icon function                                                                                                                      | \$(variables), @function |
| base/                       |                                                                                                                                                                               |                          |
| base/\_base.scss            | base rules(common.scss import)                                                                                                                                                | css                      |
| base/\_colors.scss          | color rules(common.scss import)                                                                                                                                               | css                      |
| base/\_reset.scss           | reset / normalize(common.scss import)                                                                                                                                         | css                      |
| components/                 |                                                                                                                                                                               |                          |
| components/\_buttons.scss   | @mixin layout-button, @mixin button-group                                                                                                                                     | @mixin                   |
| components/\_divisions.scss | %layout-division-line, @mixin ui-division-line, %layout-inner-division, @mixin ui-inner-division                                                                              | %, @mixin                |
| components/\_icons.scss     | icon(used \_variables.scss) Placeholder Selectors(%)                                                                                                                          | %                        |
| components/\_layers.scss    | %layout-layer, %layout-layer-promotion                                                                                                                                        | %                        |
| components/\_lists.scss     | @mixin list-detail-filter, @mixin list-detail-sort, %list-layout, @mixin hash-tag, @mixin list-m-top-plus, @mixin list-m-top-logo, @mixin list-m-top, @mixin list-normal-type | %, @mixin                |
| components/\_messages.scss  | %layout-message, @mixin ui-message                                                                                                                                            | %, @mixin                |
| components/\_tabs.scss      | %layout-tab, @mixin ui-tab-type-web, @mixin ui-tab-type-app                                                                                                                   | %, @mixin                |
| layout/                     |                                                                                                                                                                               |                          |
| layout/\_aligns.scss        | @mixin v-align, @mixin h-align, @mixin c-align, %layout-align                                                                                                                 | %, @mixin                |
| layout/\_footer.scss        | .footer(main css)                                                                                                                                                             | css                      |
| layout/\_forms.scss         |                                                                                                                                                                               |                          |
| layout/\_grid.scss          | @mixin make-grid(\$size: 12), %layout-grid                                                                                                                                    | %, @mixin                |
| layout/\_header.scss        | header(main css), %header-util-button                                                                                                                                         | css                      |
| layout/\_navigation.scss    |                                                                                                                                                                               |                          |
| layout/\_sidebar.scss       |                                                                                                                                                                               |                          |
