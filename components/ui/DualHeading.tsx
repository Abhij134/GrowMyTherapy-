import React from "react";
import clsx from "clsx";

export interface DualHeadingProps {
  as?: "h1" | "h2" | "h3";
  titleStart?: string;
  titleAccent?: string;
  titleEnd?: string;
  className?: string;
}

export default function DualHeading({
  as: Component = "h2",
  titleStart,
  titleAccent,
  titleEnd,
  className,
}: DualHeadingProps) {
  return (
    <Component className={clsx("font-serif text-[#333333] font-normal leading-[1.2]", className)}>
      {titleStart && <span>{titleStart} </span>}
      {titleAccent && <span className="headline-accent">{titleAccent}</span>}
      {titleEnd && <span> {titleEnd}</span>}
    </Component>
  );
}
