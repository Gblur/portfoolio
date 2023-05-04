import type {AppProps} from "next/app";
import {red, blue, green} from "@mui/material/colors";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import "../styles/Home.css";
import "../styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import useStore from "../../store";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: blue[500],
    },
    error: {
      main: red[500],
    },
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: blue[500],
    },
    error: {
      main: red[500],
    },
    mode: "light",
  },
});

export default function App({Component, pageProps}: AppProps) {
  const {isDarkMode, toggleDarkMode} = useStore((state) => state);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    toggleDarkMode(target.checked);
  }

  console.log(isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Component {...pageProps} checked={isDarkMode} />
      <Switch
        onChange={handleChange}
        checked={isDarkMode}
        sx={{position: "fixed", top: 0, right: 0}}
      />

      {/* <Footer /> */}
    </ThemeProvider>
  );
}
