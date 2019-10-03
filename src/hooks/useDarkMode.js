import React from "react"
import useLocalStorage from "./useLocalStorage"

const useDarkMode = () => {
    const [ lights, setLights ] = useLocalStorage("dark");
    useEffect(() => {
        lights 
        ? document.querySelector("body").classList.add("dark-mode")
        : document.querySelector("body").classList.remove("dark-mode")
    }, [lights])
    return [ lights, setLights ]
};