import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 700px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const HiddenBox = styled.div`
  grid-column: 2;
  display: none;
  > p {
    line-height: 1.6;
    margin-bottom: 24px;
  }

  > ul {
    color: #868e96;
    margin-left: 18px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style-type: disc;
  }
`;
const Number = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #087f5b;
  &:hover {
    cursor: pointer;
  }
`;

const Text = styled(Number)``;

const Item = styled.div`
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.1);
  padding: 24px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 24px;
  row-gap: 32px;
  align-items: center;
  border-top: ${(props) => (props.show === "true" ? "4px solid #087f5b" : "")};

  ${HiddenBox} {
    display: ${(props) => (props.show === "true" ? "block" : "none")};
  }

  ${Number} {
    color: ${(props) => (props.show === "true" ? "#087f5b" : "#ced4da")};
  }

  ${Text} {
    color: ${(props) => (props.show ? "#087f5b" : "#495057")};
  }
`;

const Icon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #087f5b;
  &:hover {
    cursor: pointer;
  }
`;

Accordion.Item = ({ number, text, children }) => {
  const [show, setShow] = useState(false);
  return (
    <Item show={show ? "true" : "false"}>
      <Number onClick={() => setShow(!show)}>{number}</Number>
      <Text onClick={() => setShow(!show)}>{text}</Text>
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="icon"
        onClick={() => setShow(!show)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </Icon>
      <HiddenBox>{children}</HiddenBox>
    </Item>
  );
};

export default function Accordion({ children }) {
  return (
    <Wrapper>
      {children}
      {!children && (
        <Accordion.Item number="01" text="Where are these chairs assembled?">
          <p>
            Dolore sunt mollit aliqua incididunt Lorem labore aute. Irure ipsum
            ea reprehenderit consequat deserunt. Ullamco id enim nisi sit ad
            tempor qui esse. Ex nostrud sint ut eiusmod labore eiusmod
            reprehenderit. Amet minim ad qui ipsum. Quis sit voluptate ad
            pariatur ullamco in ut velit cillum magna excepteur. Nulla anim enim
            reprehenderit anim do magna fugiat. Sint consectetur.
          </p>
          <ul>
            <li>
              Nisi nostrud sunt aliquip aliqua ad minim elit tempor aliquip id
              proident cupidatat anim.
            </li>
            <li>
              Nisi nostrud sunt aliquip aliqua ad minim elit tempor aliquip id
              proident cupidatat anim.
            </li>
            <li>
              Nisi nostrud sunt aliquip aliqua ad minim elit tempor aliquip id
              proident cupidatat anim.
            </li>
            <li>
              Nisi nostrud sunt aliquip aliqua ad minim elit tempor aliquip id
              proident cupidatat anim.
            </li>
            <li>
              Nisi nostrud sunt aliquip aliqua ad minim elit tempor aliquip id
              proident cupidatat anim.
            </li>
          </ul>
        </Accordion.Item>
      )}
    </Wrapper>
  );
}
