import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  imagePath?: string;
};

export const ProductCard: React.FC<Props> = ({ imagePath = "" }) => {
  return (
    <Container to={"/shop/some-product"}>
      <Image src={imagePath} />
      <Name>DIE BRATPFANNE</Name>
      <Rating>4.5/5 (1313 Bewertungen)</Rating>
      <Price>
        <Euros>129</Euros>
        <Cents>00 €</Cents>
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
