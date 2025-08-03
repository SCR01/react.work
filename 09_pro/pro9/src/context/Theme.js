import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light", // Changed from "Light" to "light"
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}