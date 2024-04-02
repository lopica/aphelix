import styled from "styled-components";

const Wrapper = styled.table`
  width: 800px;
  margin-top: 100px;
  font-size: 18px;
  /* border: 1px solid #343a40;
  border-collapse: collapse; */

  th,
  td {
    /* border: 1px solid #343a40; */
    padding: 16px 24px;
    text-align: left;
  }

  thead tr {
    background-color: #087f5b;
    color: #fff;
  }

  thead th {
    width: 25%;
  }

  tbody tr:nth-child(odd) {
    background-color: #f8f9fa;
  }

  tbody tr:nth-child(even) {
    background-color: #e9ecef;
  }
`;

export default function Table({ children }) {
  return (
    <Wrapper>
      {children}
      {!children && (
        <>
          <thead>
            <tr>
              <th>Chair</th>
              <th>The Laid Back</th>
              <th>The Worker Bee</th>
              <th>The Chair 4/2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Width</th>
              <td>80 cm</td>
              <td>60 cm</td>
              <td>220 cm</td>
            </tr>
            <tr>
              <th>Height</th>
              <td>100 cm</td>
              <td>110 cm</td>
              <td>90 cm</td>
            </tr>
            <tr>
              <th>Depth</th>
              <td>70 cm</td>
              <td>65 cm</td>
              <td>80 cm</td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>16 kg</td>
              <td>22 kg</td>
              <td>80 kg</td>
            </tr>
          </tbody>
        </>
      )}
    </Wrapper>
  );
}
