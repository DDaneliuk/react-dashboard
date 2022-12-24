import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "view/layout";
import Dashboard from "view/dashboard";

function App() {
    const theme = createTheme(themeSettings())
    return(
        <div className="App">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route element={<Layout/>}>
                            <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
                            <Route path="/dashboard" element={<Dashboard/>}/>
                        </Route>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
