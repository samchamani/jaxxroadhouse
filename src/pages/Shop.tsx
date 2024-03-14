import styled from "styled-components";
import { ProductCard } from "../components/ProductCard";
import { CartButton } from "../components/CartButton";
import { PRODUCTS } from "../data";
import { TabOption, Tabs } from "../components/Tabs";
import { useMemo, useState } from "react";

type Props = {};

const OPTIONS: TabOption[] = [
  { label: "Alle", value: "" },
  { label: "Pfannen", value: "pfannen" },
  { label: "Dutch-Oven", value: "dutchoven" },
  { label: "Küchenmesser", value: "messer" },
  { label: "Zubehör", value: "zubehoer" },
];

export const Shop: React.FC<Props> = ({}) => {
  const [category, setCategory] = useState("");

  const filteredList = useMemo(() => {
    if (category === "") return PRODUCTS;
    return PRODUCTS.filter((data) =>
      data.categories.some((c) => c === category)
    );
  }, [category]);

  return (
    <Container>
      <Tabs option={OPTIONS} onSelect={(val) => setCategory(val.value)} />
      <Cards>
        {filteredList.map((data, i) => (
          <ProductCard key={i} product={data} />
        ))}
      </Cards>
      <CartButton />
    </Container>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

const Container = styled.div``;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-content: flex-start;
  padding: 45px;
`;
