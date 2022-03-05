import React, { ReactElement } from "react";
import { capitalize } from "lodash";

import Container from "./Checkbox.styles";
import { CheckboxProps } from "./Checkbox.types";

const Checkbox = ({
  label,
  checked,
  onChange,
}: CheckboxProps): ReactElement => {
  return (
    <Container>
      <input
        type="checkbox"
        name={label}
        id={label}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={label}>{capitalize(label)}</label>
    </Container>
  );
};

export default Checkbox;
