import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";

import Header from "./Header";

function App() {
  const [isDarkMode, setDarkMode] = useState(false)
  const paletteType = isDarkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: isDarkMode ? '#121212' : '#eaeaea'
      }
    }
  })

  const handleDarkModeChange = () => {
    setDarkMode(!isDarkMode)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header isDarkMode={isDarkMode} handleOnChange={handleDarkModeChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
