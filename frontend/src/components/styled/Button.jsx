import styled from 'styled-components'

const LinkButton = styled.a`
  &:link, 
  &:visited {
    background-color: #087f5b;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 18px;
    padding: 16px 32px;
    display: inline-block;
  }
  &:hover,
  &:active {
    background-color: #099268;
  }
`

export default function Button({ children, ...props }) {
  return (
    <LinkButton {...props}>
      {children}
    </LinkButton>
  )
}