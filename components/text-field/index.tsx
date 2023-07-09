"use client";

import { styled } from "@/styled-system/jsx";
import { textField } from "@/styled-system/recipes";
import { JsxStyleProps } from "@/styled-system/types";
import {
  Editable,
  EditableProps,
  EditableArea,
  EditableInput,
  EditableLabel,
  EditablePreview,
} from "@ark-ui/react";
import { forwardRef } from "react";

export type TextFieldProps = JsxStyleProps & {
  label?: string;
} & Omit<EditableProps, "children">;

const StyledEditable = styled(Editable);

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ label, value, ...props }, ref) {
    return (
      <StyledEditable className={textField()} {...props}>
        {label && <EditableLabel>{label}</EditableLabel>}
        <EditableArea>
          <EditablePreview />
          <EditableInput ref={ref} />
        </EditableArea>
      </StyledEditable>
    );
  }
);
