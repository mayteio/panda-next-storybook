import { styled } from "@/styled-system/jsx";
import { JsxStyleProps } from "@/styled-system/types";
import { ElementType, PropsWithChildren, forwardRef } from "react";
import { css } from "@/styled-system/css";

export type HeadingProps = JsxStyleProps &
  PropsWithChildren<{
    size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2";
  }>;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading({ size = "h1", ...props }, ref) {
    const Element = styled(
      ["h1", "h2", "h3", "h4", "h5", "h6"].includes(size)
        ? (size as ElementType)
        : "p"
    );
    return (
      <Element ref={ref} className={css({ textStyle: size })} {...props} />
    );
  }
);
