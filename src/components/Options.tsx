import { useEffect, useState } from "react";
import styled from "styled-components";
import { ProductOption, ProductOptionValue } from "../data";

type Props = {
  option: ProductOption;
  onSelect: (value: ProductOptionValue) => void;
};

export const Options: React.FC<Props> = ({ option, onSelect }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    onSelect(option.values[index]);
  }, [index]);
  return (
    <Label>
      {option.label}
      <OptionsContainer>
        {option.values.map((val, i) => (
          <Option
            key={i}
            onClick={() => setIndex(i)}
            aria-selected={i === index}
          >
            {val.name}
          </Option>
        ))}
      </OptionsContainer>
    </Label>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

const Label = styled.label`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 600;
  color: grey;
`;

const OptionsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Option = styled.button`
  &[aria-selected="true"] {
    background-color: antiquewhite;
  }

  transition: background-color 0.3s;
`;
