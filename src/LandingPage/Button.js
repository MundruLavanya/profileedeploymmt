import styled from "styled-components/";

export default function Button(props) {
  const { text, color, icon } = props;

  const ButtonLink = styled.a`
    color: ${color === "white" ? "#de89dc" : "#de89dc"};
    border: 2px solid ${color === "white" ? "#de89dc" : "#de89dc"};
    padding: 8px 24px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.4s;

    :hover {
      color: ${color === "white" ? "#FFFFFF" : "#6DEBB5"};
      opacity: 0.7;
      transition: all 0.4s;
    }
  `;

  return (
    <ButtonLink>
      {text} <i className={icon}></i>
    </ButtonLink>
  );
}
