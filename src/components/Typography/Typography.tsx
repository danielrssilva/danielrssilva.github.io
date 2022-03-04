import React from "react";

import StyledTextBase from "./Typography.styles";
import {
  TypographyProps,
  TypographyTypesNames,
  Typography,
} from "./Typography.types";

const createComponent = (componentTypeName: TypographyTypesNames) => {
  const componentType = Typography[componentTypeName];
  const StyledText = StyledTextBase.withComponent(componentType.as);
  const props = { textType: componentTypeName };
  const component = ({ children, color }: TypographyProps) => (
    <StyledText {...props} {...(color && { style: { color } })}>
      {children}
    </StyledText>
  );
  component.displayName = componentType.as;

  return component;
};

// create all typography componenents
export const H1 = createComponent(TypographyTypesNames.Header1);
export const H2 = createComponent(TypographyTypesNames.Header2);
export const H3 = createComponent(TypographyTypesNames.Header3);
export const H4 = createComponent(TypographyTypesNames.Header4);
export const H5 = createComponent(TypographyTypesNames.Header5);
export const Subtitle1 = createComponent(TypographyTypesNames.Subtitle1);
export const Subtitle2 = createComponent(TypographyTypesNames.Subtitle2);
export const Subtitle3 = createComponent(TypographyTypesNames.Subtitle3);
export const Subtitle4 = createComponent(TypographyTypesNames.Subtitle4);
export const Text = createComponent(TypographyTypesNames.Text);
export const Caption = createComponent(TypographyTypesNames.Caption);
