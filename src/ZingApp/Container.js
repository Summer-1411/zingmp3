import { useContext } from "react"
import { StateContext } from "./GlobalState"

import Header from "./Header/Header"
import Navbar from "./Navbar/Navbar"
import Main from "./Main/Main"
import Bottom from "./Bottom/Bottom"
function Container(){
    //const [index, setIndex, display, setDisplay,background, setBackground] = useContext(StateContext)
    //console.log(background);
    const context = useContext(StateContext)
    
    return (
        <div className="container grid" style={{backgroundImage: `url(${context.background})`}}>
            <Header />
            <Navbar />
            <Main />
            <Bottom />
        </div>
    )
}
export default Container