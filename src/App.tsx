import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./context/authProvider";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import usePersistedState from "./utils/usePersistensedState";
import { CartProvider } from "./context/handleCart";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
