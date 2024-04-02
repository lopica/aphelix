import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Btn = styled.button`
  border: 1px solid #087f5b;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #087f5b;
  }

  &:hover svg {
    stroke: #fff;
  }
`;

const BtnIcon = styled.svg`
  height: 24px;
  width: 24px;
  stroke: #087f5b;
`;

const PageLink = styled.a`
  &:link,
  &:visited {
    font-size: 18px;
    background-color: ${(props) => (props.current === "true" ? "#087f5b" : "")};
    color: ${(props) => (props.current === "true" ? "#fff" : "#343a40")};
    text-decoration: none;
    border-radius: 50%;
    height: 36px;
    width: 36px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover,
  &:active {
    background-color: #087f5b;
    color: #fff;
    border-radius: 50%;
    height: 36px;
    width: 36px;
  }
`;

const Dots = styled.span`
  color: #868e96;
`;

export default function Pagination() {
  return (
    <Wrapper>
      <Btn>
        <BtnIcon
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </BtnIcon>
      </Btn>
      <Btn>
        <BtnIcon
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </BtnIcon>
      </Btn>
      <PageLink href="#">1</PageLink>
      <PageLink href="#">2</PageLink>
      <PageLink href="#" current="true">
        3
      </PageLink>
      <PageLink href="#">4</PageLink>
      <Dots>...</Dots>
      <PageLink href="#">26</PageLink>
    </Wrapper>
  );
}
