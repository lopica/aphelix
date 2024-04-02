import Table from "../components/styled/Table";
import Carousel from "../components/styled/Carousel";
import Accordion from "../components/styled/Accordion";
import Pagination from "../components/styled/Pagination";
import Hero from "../components/sections/Hero";
import styled from "styled-components";
import { GenderMale, GenderFemale } from "@phosphor-icons/react";
const Layout = styled.main`
  display: grid;
  grid-template-columns: 10% 1fr 15%;
  margin-top: 50px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  h1 {
    grid-column: 1 / -1;
    margin-bottom: 1.5rem;
  }

  h2,
  label,
  legend,
  input,
  select {
    margin-bottom: 0.5rem;
  }

  h2 {
    margin-right: 1rem;
  }

  p {
    display: inline-block;
  }

  small {
    display: inline-block;
    margin-right: 1rem;
    margin-bottom: 1.5rem;
  }

  input,
  select {
    height: 48px;
    padding-left: 0.5rem;
    max-width: 25rem;
  }

  input {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }

  input:last-child {
    margin-bottom: 0;
  }

  fieldset {
    /* border: 1px solid #444; */
    margin-bottom: 1rem;
  }

  .address {
    display: flex;
    flex-direction: column;
  }

  .gender__container {
    display: flex;
    gap: 0.5rem;
  }
`;

const Horizon = styled.hr`
  grid-column: 1 / -1;
  margin-bottom: 1rem;
`;

const FormSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GenderCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid aqua;
  width: 4rem;
  gap: 0.5rem;
`;

export default function Home() {
  return (
    <>
      <Layout>
        <div />
        <Form>
          <h1>My Form</h1>
          <Horizon />
          <div>
            <h2>Basic info</h2>
            <small>Your basic information</small>
          </div>
          <FormSectionContainer>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" size={35} />
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" size={10} />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
            <label htmlFor="facebook">Facebook:</label>
            <input type="url" id="facebook" />
            <fieldset className="address">
              <legend>Address:</legend>
              <label htmlFor="city">City</label>
              <select id="city">
                <option>City 1</option>
                <option>City 2</option>
                <option>City 3</option>
                <option>City 4</option>
                <option>City 5</option>
                <option>City 6</option>
              </select>
              <label htmlFor="district">District</label>
              <select id="district">
                <option>District 1</option>
                <option>District 2</option>
                <option>District 3</option>
                <option>District 4</option>
                <option>District 5</option>
                <option>District 6</option>
              </select>
              <label htmlFor="ward">Ward</label>
              <select id="ward">
                <option>Ward 1</option>
                <option>Ward 2</option>
                <option>Ward 3</option>
                <option>Ward 4</option>
                <option>Ward 5</option>
                <option>Ward 6</option>
              </select>
              <label htmlFor="address-detail">Detail:</label>
              <input type="text" id="address-detail" />
            </fieldset>
            {/* <fieldset>
              <legend>Gender:</legend>
              <label htmlFor="man">Man</label>
              <input type="radio" id="man" name="gender" value="man" />
              <label htmlFor="woman">Woman</label>
              <input type="radio" id="woman" name="gender" value="woman" />
              <label htmlFor="other">Other</label>
              <input type="radio" id="other" name="gender" value="other" />
            </fieldset> */}
            <fieldset>
              <legend>Gender:</legend>
              <div className="gender__container">
                <GenderCard>
                  <GenderMale size={32} />
                  <p>Male</p>
                </GenderCard>
                <GenderCard>
                <GenderFemale size={32} />
                  <p>Female</p>
                </GenderCard>
                <GenderCard>
                  <p>Other</p>
                  <p>Male</p>
                </GenderCard>
              </div>
            </fieldset>
            <label htmlFor="birthday">Birthday:</label>
            <input type="date" id="birthday" />
          </FormSectionContainer>
          <Horizon />
          <div>
            <h2>Body stat</h2>
            <small>Your body stat</small>
          </div>
          <FormSectionContainer>
            <label htmlFor="height">Height:</label>
            <input type="number" id="height" />
            <label htmlFor="width">Width:</label>
            <input type="number" id="width" />
            <label htmlFor="bust">Bust:</label>
            <input type="number" id="bust" />
            <label htmlFor="waist">Waist:</label>
            <input type="number" id="waist" />
            <label htmlFor="hip">Hip:</label>
            <input type="number" id="hip" />
          </FormSectionContainer>
        </Form>
        <div />
      </Layout>
    </>
  );
}
