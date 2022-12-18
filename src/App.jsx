import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "./context/ThemeContext";
import Icon_darkMode from "./components/Icon_darkMode/Icon_darkMode";
const App = () => {
  const { themeValue } = useContext(ThemeContext);
  return (
    <AppStyled color={themeValue.body}>
      <TitlePage color={themeValue.text}>Dark Mode</TitlePage>
      <Icon_darkMode></Icon_darkMode>
    </AppStyled>
  );
};

export default App;

const AppStyled = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  transition: all 0.25s ease;
`;

const TitlePage = styled.h1`
  color: ${(props) => props.color};
  font-size: 3.125rem;
  margin-bottom: 1.25rem;
`;
