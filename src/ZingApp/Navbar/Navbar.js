import { useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    const listNavbar = [
        {
            path: '/',
            icon: 'bi bi-music-note-list',
            text: 'Cá nhân'
        },
        {
            path: '/discover',
            icon: 'bi bi-record-circle',
            text: 'Khám phá'
        },
        {
            path: '/zingchat',
            icon: 'bi bi-bullseye',
            text: '#Zingchat'
        },
        {
            path: '/radio',
            icon: 'bi bi-headphones',
            text: 'Radio'
        },
        {
            path: '/',
            icon: 'bi bi-emoji-heart-eyes',
            text: 'Theo dõi'
        }
    ]

    const subnav = [
        {
            path:'/musicnew',
            icon: 'bi bi-music-note-beamed',
            text: 'Nhạc mới',
        },
        {
            path: '/category',
            icon: 'bi bi-columns-gap',
            text: 'Thể loại'
        },
        {
            path: '/top100',
            icon: 'bi bi-star',
            text: 'Top 100'
        },
        {
            path: '/mv',
            icon: 'bi bi-collection-play',
            text: 'MV'
        }
    ]
    const [index, setIndex] = useState(0);
    const [index1, setIndex1] = useState(-1);
    return (
            <div className="navbar">
                <div className="navbar-logo">
                    <a href="/" className="logo-zingmp3">
                    </a>
                </div>
                <div className="navbar-container">
                    <ul className="navbar-list">
                        {listNavbar.map((value, key) => (
                            <li 
                                onClick={() => {
                                    setIndex(key)
                                    setIndex1(-1)
                                }} 
                                key={key} 
                                className={key === index ? "navbar-item active" : "navbar-item"}
                            >
                                <Link to={value.path} className="navbar-item-link">
                                    <span className="navbar-item-icon">
                                        <i className={value.icon}></i>
                                    </span>
                                    <span className="navbar-item-text">{value.text}</span>
                                </Link>
                            </li>
                        ))}
                        
                    </ul>
                    <div className="solid"></div>
                    <div className="subnav">
                        <ul className="navbar-list">
                            {subnav.map((value, key) => (
                                <li 
                                    onClick={() => {
                                        setIndex1(key);
                                        setIndex(-1);
                                    }} 
                                    key={key} 
                                    className={index1 === key ? "navbar-item active" : "navbar-item"}
                                >
                                    <Link to={value.path} className="navbar-item-link">
                                        <span className="navbar-item-icon">
                                            <i className={value.icon}></i>
                                        </span>
                                        <span className="navbar-item-text">{value.text}</span>
                                    </Link>
                                </li>
                            ))}
                            
                        </ul>
                        <div className="update_vip">
                            <p className="vip-text">Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
                            <span className="btn-vip">NÂNG CẤP VIP</span>
                        </div>
                        <div className="subnav-libery">
                            <h3 className="subnav-libery-heading">THƯ VIỆN</h3>
                            <ul className="subnav-libery-list">
                                <li className="subnav-libery-item">
                                    <a href="" className="subnav-libery-link">
                                        <img  className = "subnav-libery-img-icon" src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg" alt="" />
                                        <span className="subnav-libery-title">Bài hát</span>
                                    </a>
                                </li>
                                <li className="subnav-libery-item">
                                    <a href="" className="subnav-libery-link">
                                        
                                        <img  className = "subnav-libery-img-icon" src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg" alt="" />
                                        <span className="subnav-libery-title">Playlist</span>
                                    </a>
                                </li>
                                <li className="subnav-libery-item">
                                    <a href="" className="subnav-libery-link">
                                        <img  className = "subnav-libery-img-icon" src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg" alt="" />
                                        <span className="subnav-libery-title">Gần đây</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                        
                    </div>
                    <h3 className="create-play-list-new">
                        <span className="create-play-list-new-icon"><i className="bi bi-plus"></i></span>
                        Tạo play list mới
                    </h3>
                    <Outlet />
                </div>
            </div>
    )
}

export default Navbar;