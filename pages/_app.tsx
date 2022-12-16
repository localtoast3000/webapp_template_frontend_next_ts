import "../styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/store";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeProvider } from "../contexts/color_mode";

export default function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ColorModeProvider value="light">
            <Component {...pageProps} />;
          </ColorModeProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
