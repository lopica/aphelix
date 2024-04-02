import styled from "styled-components";

const Img = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  border-radius: 8px;
  transform: scale(1.5);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div`
  width: 800px;
  margin: 100px auto;
  background-color: #087f5b;
  border-radius: 8px;
  padding: 32px 48px 32px 86px;
  position: relative;

  display: flex;
  align-items: center;
  gap: 86px;
`;

const Testimonial = styled.blockquote``;

const TestimonialText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 32px;
  color: #c6fcf5;
`;

const TestimonialAuthor = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
  color: #c3fae8;
`;

const TestimonialJob = styled.p`
  color: #c3fae8;
  font-size: 12px;
`;

const Btn = styled.button`
  background-color: #fff;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftBtn = styled(Btn)`
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const RightBtn = styled(Btn)`
  right: 0;
  top: 50%;
  transform: translate(50%, -50%);
`;

const BtnIcon = styled.svg`
  height: 24px;
  width: 24px;
  stroke: #087f5b;
`;

const Dots = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 32px);

  display: flex;
  gap: 12px;
`;

const Dot = styled.button`
  height: 12px;
  width: 12px;
  background-color: ${(props) => (props.fill === "true" ? "#087f5b" : "#fff")};
  border: 2px solid #087f5b;
  border-radius: 50%;
  cursor: pointer;
`;

export default function Carousel() {
  return (
    <Wrapper>
      <Img
        src="https://cdn.mos.cms.futurecdn.net/yid2yREEvcnA7VL4g75APf-1200-80.jpg"
        alt="human"
      />
      <Testimonial>
        <TestimonialText>
          "Nisi excepteur eu et ullamco magna laborum commodo pariatur laborum L
          commodo amet adipisicing dolore elit. "
        </TestimonialText>
        <TestimonialAuthor>Human</TestimonialAuthor>
        <TestimonialJob>No job</TestimonialJob>
      </Testimonial>
      <LeftBtn>
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
      </LeftBtn>
      <RightBtn>
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
      </RightBtn>
      <Dots>
        <Dot fill="true" />
        <Dot />
        <Dot />
        <Dot />
      </Dots>
    </Wrapper>
  );
}
