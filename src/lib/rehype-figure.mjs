export function rehypeFigure() {
  return (tree, file) => {
    const image = file?.data?.astro?.frontmatter?.image;
    if (!image) return;
    const caption = String(file.data.astro.frontmatter.imageCaption || "");
    const children = tree.children || [];
    let seen = 0;
    let at = -1;
    for (let i = 0; i < children.length; i++) {
      const node = children[i];
      if (node.type === "element" && node.tagName === "p") {
        seen += 1;
        if (seen === 2) {
          at = i + 1;
          break;
        }
      }
    }
    if (at < 0) return;
    children.splice(at, 0, {
      type: "element",
      tagName: "figure",
      properties: { className: ["sx-figure"] },
      children: [
        {
          type: "element",
          tagName: "img",
          properties: {
            src: String(image),
            alt: caption,
            width: 1600,
            loading: "lazy",
            decoding: "async",
          },
          children: [],
        },
        {
          type: "element",
          tagName: "figcaption",
          properties: {},
          children: [{ type: "text", value: caption }],
        },
      ],
    });
  };
}
