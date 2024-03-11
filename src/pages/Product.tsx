import styled from "styled-components";
import { CartButton } from "../components/CartButton";

type Props = {};

const ABOUT =
  "„Die Bratpfanne“ ist mehr als nur ein Küchenutensil – es ist ein Symbol für handwerkliche Perfektion und ästhetische Eleganz. Hergestellt aus feinstem Gusseisen und veredelt mit einem handgefertigten Holzgriff, repräsentiert sie eine nahtlose Verbindung von Funktionalität und Stil.";

export const Product: React.FC<Props> = ({}) => {
  return (
    <Container>
      <Image src="https://jaxx-roadhouse.de/wp-content/uploads/2024/01/01.webp"></Image>
      <Description>
        <Name>DIE BRATPFANNE</Name>
        <Rating>4.5/5 (1313 Bewertungen)</Rating>
        <About>{ABOUT}</About>
        <Price>
          <Euros>129</Euros>
          <Cents>00 €</Cents>
        </Price>
        <Label>
          Seasoning:
          <Variation>
            <option>mit Seasoning</option>
            <option>ohne Seasoning</option>
          </Variation>
        </Label>
        <Label>
          Holzgriff:
          <Variation>
            <option>Walnussholz</option>
            <option>Rosenholz</option>
          </Variation>
        </Label>
        <AddToCart>In den Einkaufswagen</AddToCart>
      </Description>
      <CartButton />
    </Container>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

const Container = styled.div`
  display: flex;
`;

const Image = styled.img`
  flex: 1;
  max-width: 50vw;
  object-fit: contain;
`;

const Description = styled.div`
  flex: 1;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  margin-top: 25px;
  text-align: left;
  color: black;
  font-size: 40px;
`;

const Rating = styled.div`
  /* margin-top: 5px; */
  text-align: left;
  color: grey;
  font-size: 14px;
`;

const Price = styled.div`
  color: green;
  margin-top: 20px;
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

const About = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
`;

const AddToCart = styled.button`
  margin-top: 20px;
  width: 250px;
  background-color: orange;
  color: black;
`;

const Label = styled.label`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 600;
  color: grey;
`;

const Variation = styled.select`
  /* margin-left: 30px; */
  border: none;
  width: 200px;
  background-color: antiquewhite;
  padding: 10px;
  border-radius: 10px;
`;
