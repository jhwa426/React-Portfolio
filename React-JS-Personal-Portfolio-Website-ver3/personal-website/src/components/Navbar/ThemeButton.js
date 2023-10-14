import React, { useState } from "react";
import { useTheme } from "styled-components";
import { ThemeLogo, Elements } from "./ThemeButtonStyledComponent";
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

const ThemeButton = ({ onClick }) => {
    const [darkMode, setDarkMode] = useState(false);
    const theme = useTheme();

    return (

        <ThemeLogo onClick={onClick} theme={theme}>
            {
                darkMode ? (
                    <Elements onClick={() => setDarkMode(false)}>
                        <LightModeRoundedIcon />
                    </Elements>
                ) : (
                    <Elements onClick={() => setDarkMode(true)}>
                        <DarkModeRoundedIcon />
                    </Elements>
                )
            }
        </ThemeLogo>

    );
}

export default ThemeButton;