import { Link } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../data";
import { useMemo } from "react";

type Props = {
  product: Product
  slug: number;
};

export const ProductCard: React.FC<Props> = ({ product, slug }) => {


  const [euros, cents] = useMemo(() => {
    const fulleuros = Math.floor(product.price);
    const plaincents = `${(product.price + 0.001) - fulleuros}`.substring(2, 4);
    return [`${fulleuros}`, plaincents]
  }, [product.price])


  return (
    <Container to={`/shop/${slug}`}>
      <Image src={product.imgUrls[0]} />
      <Name>{product.name}</Name>
      <Rating>{`${product.rating}/5 (${product.rating_count} Bewertungen)`}</Rating>
      <Price>
        <Euros>{euros}</Euros>
        <Cents>{`${cents} €`}</Cents>
      </Price>
    </Container>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

const Container = styled(Link)`
  /* min-width: 300px; */
  height: 330;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  align-items: flex-start;
  justify-content: flex-start;

  &:hover {
    box-shadow: 0 4px 8px orange;
    transform: scale(105%);
  }

  transition: all 0.3s;
`;

const Name = styled.div`
  margin-top: 25px;
  text-align: left;
  color: black;
  font-size: 18px;
`;

const Rating = styled.div`
  /* margin-top: 5px; */
  text-align: left;
  color: grey;
  font-size: 14px;
`;

const Price = styled.div`
  color: green;
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
`;

const Euros = styled.span`
  font-size: 30px;
  line-height: 30px;
`;
const Cents = styled.span`
  font-size: 12px;
`;

const Image = styled.img`
  height: 200px;
  width: 100%;
  object-fit: contain;
`;
