import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../contexts/CartContext";
import { PaypalButton } from "../components/PaypalButton";


PaypalButton
type Props = {};

export const Cart: React.FC<Props> = ({}) => {
  const { items, onChange } = useContext(CartContext);

  const handleQuantity = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newList = [...items];
    const checkedValue = Math.max(0, parseInt(e.target.value));
    newList[index].quantity = checkedValue;
    onChange(newList);
  };

  return (
    <Container>
      <Title>WARENKORB</Title>
      <Items>
        {items.map((item, index) => (
          <Item key={index}>
            <Thumbnail src={item.thumbnail} />
            <Name>{item.name}</Name>
            <Extras>
              {item.extras.map((e, i) => (
                <Extra key={"extra_" + i}>{e}</Extra>
              ))}
            </Extras>
            <Quantity
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantity(e, index)}
            ></Quantity>
            <Price>{(item.quantity * item.price).toFixed(2)} €</Price>
          </Item>
        ))}
      </Items>
      <Total>
        {items
          .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
          .toFixed(2)}{" "}
        €
      </Total>
      <Buttons>
        <PaymentButton>Bezahlen</PaymentButton>
        <PayPal href="https://www.paypal.com/signin">
          <PaypalButton />
        </PayPal>
      </Buttons>
    </Container>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 10vw;
  box-sizing: border-box;
`;

const Items = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`;

const Item = styled.div`
  padding: 20px 0;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  border-top: 1px solid grey;
`;

const Thumbnail = styled.img`
  width: 220px;
  height: 150px;
  object-fit: contain;
`;

const Name = styled.div`
  font-weight: 600;
`;

const Extras = styled.div`
  color: grey;
  width: 100px;
`;

const Extra = styled.div``;

const Quantity = styled.input`
  width: 50px;
  border: none;
`;

const Price = styled.div``;

const Total = styled.div`
  align-self: flex-end;
`;

const Buttons = styled.div`
  align-self: flex-start;
  display: flex;
  gap: 20px;
`;

const PaymentButton = styled.button`
  background-color: orange;
  color: black;
  border: 1px solid orange;
`;

const PayPal = styled.a`
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 5px 15px;
    border: 1px solid white;

    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
        border: 1px solid grey;
    }

    transition: border-color 0.3s;
`;

const Title = styled.div`
  margin: 25px 0;
  text-align: left;
  color: black;
  font-size: 40px;

  align-self: flex-start;
`;
