import styled from "styled-components";
import { ProductCard } from "../components/ProductCard";
import { CartButton } from "../components/CartButton";

type Props = {};

const PRODUCTS = new Array(15).fill(0);

export const Shop: React.FC<Props> = ({}) => {
  return (
    <Container>
      <Cards>
        {PRODUCTS.map((_, i) => (
          <ProductCard
            key={i}
            imagePath="https://jaxx-roadhouse.de/wp-content/uploads/2024/01/01.webp"
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
