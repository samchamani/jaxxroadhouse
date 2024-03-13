import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

type Props = {};

export const CartButton: React.FC<Props> = ({}) => {
  const { items } = useContext(CartContext);

  return (
    <Container to={"/shop-cart"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="35"
        viewBox="0 -960 960 960"
        width="35"
        fill="currentColor"
      >
        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
      </svg>
      {items.length > 0 && <Counter>{items.length}</Counter>}
    </Container>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

const Container = styled(Link)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  background: black;
  height: 70px;
  width: 70px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: orange;
    transform: scale(105%);
  }

  transition: all 0.3s;
`;

const Counter = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -5px;
  right: -5px;
  position: absolute;
  border-radius: 50%;
  background-color: orange;
  color: white;
`;
