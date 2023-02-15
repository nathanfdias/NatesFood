import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./context/authProvider";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import usePersistedState from "./utils/usePersistensedState";
import { CartProvider } from "./context/handleCart";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggledTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <GlobalStyle />
              <Router />
            </BrowserRouter>
          </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
