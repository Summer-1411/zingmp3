import { createContext, useState } from "react";
//import listMusic from "./Main/Personal/ListMusic";
import { avtar_ns, avt_view } from "./setAvatar";
const StateContext = createContext()


function GlobalState( { children }){

    const [index, setIndex] = useState(0);
    const [display, setDisplay] = useState(false);
    const [background, setBackground] = useState(avtar_ns[4].srcbg)
    const [page, setPage] = useState(0);
    const [bgNavbar, setBgNavbar] = useState();
    const [colorBt, setColorBt] = useState();
    const value = {
        index,
        setIndex,
        display,
        setDisplay,
        background,
        setBackground,
        page,
        setPage,
        bgNavbar,
        setBgNavbar,
        colorBt,
        setColorBt
    }
    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}
export {StateContext, GlobalState}