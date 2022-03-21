import "./Personal.css"
import {Route, Routes, Link} from 'react-router-dom'
import MainStt1 from "./pages/MainStt1"
import MainStt2 from "./pages/MainStt2"
import PlayList from "./pages/MainStt3"
import PODCAST from "./pages/MainStt4"
import { useState, useEffect } from "react"
import { useContext } from "react"
import { StateContext } from "../../GlobalState"
const tab = [
    {
        to: '/',
        tabName: 'TỔNG QUAN'
    },
    {
        to: '/music',
        tabName: 'BÀI HÁT'
    },
    {
        to: '/playlist',
        tabName: 'PLAYLIST'
    },
    {
        to: '/podcast',
        tabName: 'PODCAST'
    },
    {
        to: '/',
        tabName: '...'
    },
]
function Personal(){
    //const [page, setPage] = useState(0);
    const context = useContext(StateContext)
    
    return (
        <div id="personal">
            <div className="user">
                <div className="select-tab">
                
                    <div className="btn btn-update">NÂNG CẤP VIP</div>
                    <div className="btn btn-code">NHẬN CODE VIP</div>
                    <div className="btn-dots">...</div>
                </div>
                <div className="user-main">
                    <div className="user-main-avatar" >
                        <div className="img-avt" ></div>
                        
                    </div>
                    <div className="user-main-name">
                        Thảo Bắp
                    </div>
                    <span className="user-navbar-contain">
                    
                        
                        <div className="user-navbar">
                            {tab.map((value,index) => (
                                <Link 
                                    to={value.to} 
                                    key = {index} 
                                    className="btn user-navbar-item"
                                    onClick = {() => context.setPage(index)}
                                    style = {index === context.page ? {
                                        backgroundColor: ' #637191'
                                    } : {}}
                                >
                                    {value.tabName}
                                </Link>
                            ))}
                        </div>
                            
                    </span>
                </div>
            </div>
            <Routes>
                <Route path="/" element = {<MainStt1 />} />
                <Route path="/music" element = {<MainStt2 />} />
                <Route path="/playlist" element = {<PlayList />} />
                <Route path="/podcast" element = {<PODCAST />} />
            </Routes>
            


            

        </div>
    )
}
export default Personal