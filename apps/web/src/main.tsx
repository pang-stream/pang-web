import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "styled-components";
import './index.css'
import App from './App.tsx'

import { theme } from "@repo/ui/theme";
import { Page } from './Page.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  </StrictMode>
)
