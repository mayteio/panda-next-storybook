"use client";

import { ComponentProps, forwardRef } from "react";

import { Pressable } from "@ark-ui/react";
import { button } from "@/styled-system/recipes/button";
import { RecipeVariantProps } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

export type ButtonProps = ComponentProps<typeof Pressable> &
  RecipeVariantProps<typeof button>;

export const Button = styled(
  forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
    return <Pressable ref={ref} {...props} />;
  }),
  button
);
