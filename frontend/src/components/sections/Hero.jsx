import styled from "styled-components";

const Wrapper = styled.section`
  font-family: "Rubik", sans-serif;
  color: #444;
  margin: 0 auto;

  header {
    background-color: orange;
    height: 100vh;
    position: relative;
  }

  nav {
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    background-color: green;
  }

  h1 {
    font-size: 52px;
    margin-bottom: 32px;
  }

  p {
    font-size: 20px;
    line-height: 1.6;
    margin-bottom: 48px;
  }

  a:link,
  a:visited {
    font-size: 20px;
    font-weight: 600;
    background-color: #e67e22;
    color: #fff;
    text-decoration: none;
    display: inline-block;
    padding: 16px 32px;
    border-radius: 9px;
  }

  h2 {
    font-size: 44px;
    margin-bottom: 48px;
  }

  section {
    padding: 96px 0;
    background-color: #f7f7f7;
  }

  .container {
    margin: 0 auto;
    width: 1200px;
    background-color: red;
  }

  .header__container {
    width: 1200px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: violet;
    text-align: center;
  }
`;

export default function Hero({ children }) {
  return (
    <Wrapper>
      <header className="container">
        <nav>
          <div>Logo</div>
          <div>Navigation</div>
        </nav>

        <div className="header__container">
          <h1>A healthy meal delivered to your door, every single day</h1>
          <p>
            The smart 365-days-per-year food subcription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs
          </p>
          <a href="#" className="btn">
            Start eating well
          </a>
        </div>
      </header>

      <section>
        <div className="container">
          <h2>Some random heading</h2>
          <p>
            Proident laboris dolore voluptate consequat adipisicing deserunt
            irure exercitation dolor reprehenderit Lorem ad. Est id nostrud ad
            incididunt irure irure nostrud minim aute dolore Lorem
            reprehenderit.
          </p>
        </div>
      </section>
    </Wrapper>
  );
}
