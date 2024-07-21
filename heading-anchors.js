class HeadingAnchors extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "heading-anchors", HeadingAnchors);
    }
  }

  connectedCallback() {
    this.headings.forEach((heading) => {
      if (!heading.hasAttribute("tabindex")) {
        heading.setAttribute("tabindex", -1);
      }
      heading.insertAdjacentHTML(this.position, this.anchor(heading));
    });
  }

  anchor(heading) {
    let anchor = document.createElement("a");
    anchor.href = `#${heading.id}`;
    anchor.innerHTML = `Jump to '${heading.textContent}'`;

    return anchor.outerHTML;
  }

  get headings() {
    return this.querySelectorAll("h2[id], h3[id], h4[id]");
  }

  get position() {
    return this.getAttribute("position") || "afterend";
  }
}

HeadingAnchors.register();
