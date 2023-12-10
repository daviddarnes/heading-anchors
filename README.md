# `heading-anchors`

A Web Component to add anchor links to headings with IDs.

**[Demo](https://daviddarnes.github.io/heading-anchors/demo.html)**

## Examples

```
<script type="module" src="heading-anchors.js"></script>

<heading-anchors>
  <h2 id="heading-level-2">Heading level 2</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repudiandae expedita totam nesciunt quisquam voluptatum eos optio iste sunt temporibus suscipit, et inventore veniam neque corrupti est facere rem incidunt?</p>

  <h3 id="heading-level-3">Heading level 3</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi eligendi exercitationem, ratione, in delectus vitae veritatis dolorem porro cupiditate quam eaque voluptates. Aliquid reprehenderit iusto blanditiis ea, temporibus perferendis libero.</p>
</heading-anchors>
```

## Features

This Web Component allows you to:

- Add anchor links to headings which have an ID attribute and value

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
<script type="module" src="https://www.unpkg.com/@daviddarnes/heading-anchors@1.0.0/heading-anchors.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script type="module" src="https://esm.sh/@daviddarnes/heading-anchors@1.0.0"></script>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/component-template)
