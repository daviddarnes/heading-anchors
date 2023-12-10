class HeadingAnchors extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "heading-anchors", HeadingAnchors);
    }
  }

  connectedCallback() {
    this.headings.forEach((heading) => {
      heading.append(this.anchor(heading));
    });
  }

  anchor(heading) {
    let anchor = document.createElement("a");
    anchor.href = `#${heading.id}`;
    anchor.innerHTML = "#";
    anchor.title = `Jump link to '${heading.textContent}'`;
    return anchor;
  }

  get headings() {
    return this.querySelectorAll("h2[id], h3[id], h4[id]");
  }
}

HeadingAnchors.register();
