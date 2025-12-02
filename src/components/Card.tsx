import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
  compact?: boolean;
}

export default function Card({
  href,
  frontmatter,
  secHeading = true,
  compact = false,
}: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: [
      "font-medium decoration-dashed hover:underline",
      compact ? "text-base" : "text-lg",
    ].join(" "),
  };

  return (
    <li className={`article-card ${compact ? "article-card--compact" : ""}`}>
      <a
        href={href}
        className={`inline-block ${compact ? "text-base" : "text-lg"} text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0`}
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
      <p className={compact ? "text-sm" : ""}>{description}</p>
    </li>
  );
}
