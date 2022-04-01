import "./Personal.css"
import {Link, Outlet} from 'react-router-dom'

import { useContext } from "react"
import { StateContext } from "../../GlobalState"
const tab = [
    {
        to: '',
        tabName: 'TỔNG QUAN'
    },
    {
        to: '/music',
        tabName: 'BÀI HÁT'
    },
    {
        to: 'playlist',
        tabName: 'PLAYLIST'
    },
    {
        to: 'podcast',
        tabName: 'PODCAST'
    },
    {
        to: 'album',
        tabName: 'ALBUM'
    },
    {
        to: '',
        tabName: '...'
    }
]
function Personal(){
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
                        Summer
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
            <Outlet />
            {/* <Routes>
                <Route path="/" element = {<Overview />} />
                <Route path="/music" element = {<TheSong />} />
                <Route path="/playlist" element = {<PlayList />} />
                <Route path="/podcast" element = {<Podcast />} />
                <Route path="/album" element = {<Album />} />
            </Routes> */}
        </div>
    )
}
export default Personal