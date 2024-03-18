import styled from "styled-components";
import { Logo } from "./Logo";
import { Stories } from "../data";

type Props = {
  
};

export const Story: React.FC<Props> = ({ }) => {

  return (
    <Container>
        <Title>
            UNSERE STORY
        </Title>
        <Part>
            <LogoContainer>
                <Logo/>
            </LogoContainer>
            <StoryContainer>
                {Stories[0]}
            </StoryContainer>
        </Part>
        <Part>
            <StoryContainer>
                {Stories[1]}
            </StoryContainer>
            <ImageContainer>
                <Image src="https://crevelt.de/wp-content/uploads/2023/10/IK_Umwelt_edit_09.jpg"/>
            </ImageContainer>
        </Part>
        <Part>
            <ImageContainer>
                <Image src="https://www.sueddeutsche.de/image/sz.1.5500459/1200x675?v=1641220844"/>
            </ImageContainer>
            <StoryContainer>
                {Stories[2]}
            </StoryContainer>
        </Part>
    </Container>
  );
};

const Container = styled.div`   
`

const LogoContainer = styled.div`
    padding: 40px 110px;
    flex: 1;
`

const Part = styled.div`
    display: flex;
`

const StoryContainer = styled.div`
    flex: 1;
    flex-shrink: 0;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;

`

const Image = styled.img`
    width: 40vw;
    border-radius: 10px;
    object-fit: contain;
`

const ImageContainer = styled.div`
    flex: 1;
    padding: 30px;
`

const Title = styled.div`
  margin: 40px 0;
  margin-left: 40px;
  text-align: left;
  color: black;
  font-size: 40px;

  align-self: flex-start;
`;