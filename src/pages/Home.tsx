import styled from "styled-components";
import { Story } from "../components/Story";

type Props = {};

export const Home: React.FC<Props> = ({}) => {
  return <Container>
    <Story/>
  </Container>;
};

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

const Container = styled.div``;
