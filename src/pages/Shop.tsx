import styled from "styled-components";
import { ProductCard } from "../components/ProductCard";
import { CartButton } from "../components/CartButton";
import { PRODUCTS } from "../data";

type Props = {};



export const Shop: React.FC<Props> = ({}) => {
  return (
    <Container>
      <Cards>
        {PRODUCTS.map((data, i) => (
          <ProductCard
            key={i}
            slug={i}
            product={data}
          />
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
