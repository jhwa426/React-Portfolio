import React, { useState } from "react";
import { useTheme } from "styled-components";
import { ThemeContainer, ThemeLogo, Elements } from "./ThemeButtonStyledComponent";
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

const ThemeButton = ({ onClick }) => {
    const [darkMode, setDarkMode] = useState(false);
    const theme = useTheme();

    return (
        <ThemeContainer>
            <ThemeLogo onClick={onClick} theme={theme}>
                {
                    darkMode ? (
                        <Elements onClick={() => setDarkMode(false)}>
                            <DarkModeRoundedIcon />
                        </Elements>
                    ) : (
                        <Elements onClick={() => setDarkMode(true)}>
                            <LightModeRoundedIcon />
                        </Elements>
                    )
                }
            </ThemeLogo>
        </ThemeContainer>
    );
}

export default ThemeButton;