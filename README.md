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
| abstracts/\_mixins.scss | @mixin: box-sizing, display-flex, flex, order, flex-wrap, align-content, flex-direction, transform, animation,   keyframes, transition, calc | @mixin |
| abstracts/\_template.scss | all file(abstracts, base, components, layout) import | |
| abstracts/\_variables.scss | color, icon(data:image), easing variables | $(variables) |
| base/ | | |
| base/\_base.scss | base rules(common.scss import) | css |
| base/\_colors.scss | color rules(common.scss import) | css |
| base/\_reset.scss | reset / normalize(common.scss import) | css |
| components/ | | |
| components/\_buttons.scss | @mixin: layout-button, button-group | @mixin |
| components/\_divisions.scss | | |
| components/\_icons.scss | 레이아웃(상단 html 참조)                                       | '.carousel-wrapper'           |
| components/\_layers.scss  | 레이아웃(상단 html 참조)                                       | '.carousel-slide'             |
| components/\_lists.scss | 레이아웃(상단 html 참조)                                       | '.carousel-btn-play'          |
| components/\_messages.scss  | 레이아웃(상단 html 참조)                                       | '.carousel-btn-stop'          |
| components/\_tabs.scss  | 레이아웃(상단 html 참조)                                       | '.carousel-btn-next'          |
| layout/   | 레이아웃(상단 html 참조)                                       | '.carousel-btn-prev'          |
| layout/\_aligns.scss | 레이아웃(상단 html 참조)                                       | '.carousel-pagination-bullet' |
| layout/\_footer.scss | 레이아웃(상단 html 참조)                                       | '.carousel-pagination-bullet' |
| layout/\_forms.scss | 레이아웃(상단 html 참조)                                       | '.carousel-pagination-bullet' |
| layout/\_grid.scss | 레이아웃(상단 html 참조)                                       | '.carousel-pagination-bullet' |
| layout/\_header.scss | 레이아웃(상단 html 참조)                                       | '.carousel-pagination-bullet' |
| layout/\_navigation.scss | 레이아웃(상단 html 참조)                                       | '.carousel-pagination-bullet' |
| layout/\_sidebar.scss | 레이아웃(상단 html 참조)                                       | '.carousel-pagination-bullet' |
