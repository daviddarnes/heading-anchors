# `heading-anchors`

A Web Component to add anchor links to headings with IDs.

**[Demo](https://daviddarnes.github.io/heading-anchors/demo.html)** | **[Styling demo](https://daviddarnes.github.io/heading-anchors/demo-styling.html)** | **[Further reading](https://darn.es/heading-anchors-web-component/)**

## Examples

```html
<script type="module" src="heading-anchors.js"></script>

<heading-anchors>
  <h2 id="heading-level-2">Heading level 2</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

  <h3 id="heading-level-3">Heading level 3</h3>
  <p>
    Excepturi eligendi exercitationem, ratione, in delectus vitae veritatis
    dolorem porro cupiditate quam eaque voluptates.
  </p>
</heading-anchors>
```

## Features

This Web Component allows you to:

- Add anchor links to headings which have an ID attribute and value
- Customise which elements will be appended with an anchor link using the `selector` attribute
- Customise where the anchor link is appended using the `position` attribute

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@daviddarnes/heading-anchors): `npm install @daviddarnes/heading-anchors`
1. [Download the source manually from GitHub](https://github.com/daviddarnes/heading-anchors/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

### Usage

Make sure you include the `<script>` in your project (choose one of these):

```html
<!-- Host yourself -->
<script type="module" src="heading-anchors.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://www.unpkg.com/@daviddarnes/heading-anchors@2.0.0/heading-anchors.js"
></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://esm.sh/@daviddarnes/heading-anchors@2.0.0"
></script>
```

### Using `selector` and `position`

By default `heading-anchors` will select all the `h2[id]`, `h3[id]` and `h4[id]` elements within it to append an anchor link to. However with the `selector` attribute you can pass in a different selector string to select:

```html
<heading-anchors selector="h2[id]">
  <!-- ... -->
</heading-anchors>
```

_Note: It's recommended you use selectors that utilise the `[id]` attribute selector for better reliability_

By default `heading-anchors` will append anchor links right after the element, using the [`insertAdjacentHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) API. However you can adjust this using the `position` attribute:

```html
<heading-anchors position="beforeend">
  <!-- ... -->
</heading-anchors>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/component-template)
- [Curtis Wilcox](https://github.com/extra808) for the accessibility feedback
