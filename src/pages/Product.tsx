import styled from "styled-components";
import { CartButton } from "../components/CartButton";
import { PRODUCTS, ProductOptionValue } from "../data";
import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useState, useContext } from "react";
import { Options } from "../components/Options";
import { CartContext, Item } from "../contexts/CartContext";

type Props = {};

export const Product: React.FC<Props> = ({}) => {
  const { pathname } = useLocation();

  const data = useMemo(() => {
    const urlItems = pathname.split("/");
    return PRODUCTS[parseInt(urlItems[urlItems.length - 1])];
  }, [pathname]);

  const [euros, cents] = useMemo(() => {
    const fulleuros = Math.floor(data.price);
    const plaincents = `${data.price + 0.001 - fulleuros}`.substring(2, 4);
    return [`${fulleuros}`, plaincents];
  }, [data.price]);

  const [index, setIndex] = useState(0);

  const hasLeft = useMemo(() => index > 0, [index]);
  const hasRight = useMemo(() => index < data.imgUrls.length - 1, [index]);

  const [total, setTotal] = useState(data.price);

  const [optionList, setOptionList] = useState<ProductOptionValue[]>(() =>
    data.options.map((o) => ({
      name: o.values[0].name,
      addedCosts: o.values[0].addedCosts,
    }))
  );

  const { items, onChange } = useContext(CartContext);

  const handleAdd = () => {
    const foundIndex = items.findIndex((i) => i.name === data.name);
    if (foundIndex < 0) {
      const newItem: Item = {
        thumbnail: data.imgUrls[0],
        name: data.name,
        price: total,
        quantity: 1,
        extras: optionList.map((o) => o.name),
      };
      onChange([...items, newItem]);
    } else {
      const newList = [...items];
      newList[foundIndex].quantity += 1;
      onChange(newList);
    }
  };

  useEffect(() => {
    setTotal(
      data.price + optionList.reduce((prev, curr) => prev + curr.addedCosts, 0)
    );
  }, [optionList, data.price]);

  return (
    <Container>
      <Carousel>
        <Image src={data.imgUrls[index]} />
        {hasLeft && (
          <LeftButton onClick={() => setIndex((prev) => prev - 1)}>
            {"<"}
          </LeftButton>
        )}
        {hasRight && (
          <RightButton onClick={() => setIndex((prev) => prev + 1)}>
            {">"}
          </RightButton>
        )}
      </Carousel>
      <Description>
        <Name>{data.name}</Name>
        <Rating>{`${data.rating}/5 (${data.rating_count} Bewertungen)`}</Rating>
        <About>{data.description}</About>
        <Price>
          <Euros>{euros}</Euros>
          <Cents>{`${cents} €`}</Cents>
        </Price>
        {data.options.map((o, i) => (
          <Options
            key={i}
            option={o}
            onSelect={(value) =>
              setOptionList((prev) => {
                const nextList = [...prev];
                nextList[i] = value;
                return nextList;
              })
            }
          />
        ))}
        <AddToCart onClick={handleAdd}>{`In den Warenkorb für ${total.toFixed(
          2
        )} €`}</AddToCart>
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
  max-width: 40vw;
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
  margin-top: 30px;
  width: 300px;
  background-color: orange;
  color: black;
`;

const Carousel = styled.div`
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
`;

const LeftButton = styled.button`
  position: absolute;
  top: 45%;
  left: 20px;
`;

const RightButton = styled(LeftButton)`
  left: initial;
  right: 20px;
`;
