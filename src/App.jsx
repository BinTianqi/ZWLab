import {useEffect, useState} from 'react'
import './App.css'
import {NavBar, NavRail} from "./Navigation.jsx";
import Home from "./Home.jsx";
import Insert from "./Insert.jsx";
import Remove from "./Remove.jsx";
import Encode from "./Encode.jsx";
import Decode from "./Decode.jsx";

export default function App() {
    const [page, setPage] = useState("home");
    const [navType, setNavType] = useState("bar");
    const [darkTheme, setDarkTheme] = useState(false)
    useEffect(() => {
        if(window.screen.height < window.screen.width) { setNavType("rail") }
        setDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches)
    }, [])
    document.getElementById("html_root").className = darkTheme ? "mdui-theme-dark" : "mdui-theme-light"
    let pageObj = <></>
    if(page === 'home') { pageObj = <Home darkTheme={darkTheme} setDarkTheme={(dark) => setDarkTheme(dark)}/> }
    if(page === 'insert') { pageObj = <Insert/> }
    if(page === 'remove') { pageObj = <Remove/> }
    if(page === 'encode') { pageObj = <Encode/> }
    if(page === 'decode') { pageObj = <Decode/> }
    let navObj = <></>
    if(navType === "bar") { navObj = <NavBar/> }
    if(navType === "rail") { navObj = <NavRail/> }
    window.onload = () => {
        if(navType === "bar") {
            const navbar = document.getElementById("navbar");
            navbar.addEventListener('change', () => setPage(navbar.value));
        } else {
            const navrail = document.getElementById("navrail");
            navrail.addEventListener('change', () => setPage(navrail.value));
        }
    }
    return (
        <>
            {pageObj}
            {navObj}
        </>
    )
}
