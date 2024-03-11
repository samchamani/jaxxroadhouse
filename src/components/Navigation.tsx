import styled from "styled-components";
import { Logo } from "./Logo";
import { Link, useLocation } from "react-router-dom";

type Props = {};

export const Navigation: React.FC<Props> = ({}) => {
  const { pathname } = useLocation();

  return (
    <Container>
      <LogoContainer to={""}>
        <Logo />
      </LogoContainer>
      <Options>
        <Option to={""} aria-selected={pathname === "/"}>
          HOME
        </Option>
        <Option to={"shop"} aria-selected={pathname.startsWith("/shop")}>
          SHOP
        </Option>
        <Option to={"contact"} aria-selected={pathname === "/contact"}>
          CONTACT
        </Option>
      </Options>
    </Container>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

const Container = styled.nav`
  position: sticky;
  top: 0;
  height: 70px;
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  align-self: stretch;
  z-index: 100;
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 60px;
  padding: 0;
  margin: 0;
  background: transparent;
`;

const Options = styled.div`
  display: flex;
  gap: 10px;
`;
const Option = styled(Link)`
  background-color: transparent;
  color: white;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;

  &:hover {
    color: grey;
  }

  &[aria-selected="true"] {
    color: orange;
  }

  transition: color 0.3s;
`;
