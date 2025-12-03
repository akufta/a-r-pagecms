import type { RemarkPlugin } from "@astrojs/markdown-remark";
import type { Root, Text } from "mdast";
import { visit } from "unist-util-visit";

const YOUTUBE_SHORTCODE = /^{{<\s*youtube\s+([\w-]{8,})\s*>}}$/i;

const remarkYoutubeShortcode: RemarkPlugin = () => {
  return (tree: Root) => {
    visit(tree, "paragraph", (node, index, parent) => {
      if (!parent || typeof index !== "number") return;
      if (node.children.length !== 1) return;

      const child = node.children[0];
      if (child.type !== "text") return;

      const textChild = child as Text;
      const value = textChild.value.trim();
      const match = YOUTUBE_SHORTCODE.exec(value);
      if (!match) return;

      const videoId = match[1];
      const iframe = `<div class="youtube-embed">
  <iframe
    src="https://www.youtube.com/embed/${videoId}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>`;

      parent.children.splice(index, 1, {
        type: "html",
        value: iframe,
      });
    });
  };
};

export default remarkYoutubeShortcode;
