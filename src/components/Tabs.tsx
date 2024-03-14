import { useEffect, useState } from "react";
import styled from "styled-components";

  
  export type TabOption = {
    label: string;
    value: string;
  };

type Props = {
  option: TabOption[];
  onSelect: (value: TabOption) => void;
};

export const Tabs: React.FC<Props> = ({ option, onSelect }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    onSelect(option[index]);
  }, [index]);
  return (
      <OptionsContainer>
        {option.map((val, i) => (
          <Option
            key={i}
            onClick={() => setIndex(i)}
            aria-selected={i === index}
          >
            {val.label}
          </Option>
        ))}
      </OptionsContainer>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */


const OptionsContainer = styled.div`
  padding: 20px 45px 0;
  display: flex;
  gap: 10px;
`;

const Option = styled.button`
  &[aria-selected="true"] {
    background-color: antiquewhite;
  }

  transition: background-color 0.3s;
`;
