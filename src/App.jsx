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
    useEffect(() => {
        if(window.screen.height < window.screen.width) { setNavType("rail") }
    }, [])
    let pageObj = <></>
    if(page === 'home') { pageObj = <Home class="page"/> }
    if(page === 'insert') { pageObj = <Insert class="page"/> }
    if(page === 'remove') { pageObj = <Remove class="page"/> }
    if(page === 'encode') { pageObj = <Encode class="page"/> }
    if(page === 'decode') { pageObj = <Decode class="page"/> }
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
