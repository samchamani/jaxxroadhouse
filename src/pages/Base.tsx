// import styled from "styled-components";
import { Navigation } from "../components/Navigation";
import { Outlet } from "react-router-dom";

type Props = {};

export const Base: React.FC<Props> = ({}) => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

// const Container = styled.div``;
