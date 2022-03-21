import './Navbar.css'
function Navbar() {
    return (
            <div className="navbar">
                <div className="navbar-logo">
                    <a href="/" className="logo-zingmp3">
                    </a>
                </div>
                <div className="navbar-container">
                    <ul className="navbar-list">
                        <li className="navbar-item active">
                            <a href="/" className="navbar-item-link">
                                <span className="navbar-item-icon">
                                    <i className="bi bi-music-note-list"></i>
                                </span>
                                <span className="navbar-item-text">Cá nhân</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="/" className="navbar-item-link">
                                <span className="navbar-item-icon">
                                    <i className="bi bi-record-circle"></i>
                                </span>
                                <span className="navbar-item-text">Khám phá</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="/" className="navbar-item-link">
                                <span className="navbar-item-icon">
                                    <i className="bi bi-bullseye"></i>
                                </span>
                                <span className="navbar-item-text">#Zingchat</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="/" className="navbar-item-link">
                                <span className="navbar-item-icon">
                                    <i className="bi bi-headphones"></i>
                                </span>
                                <span className="navbar-item-text">Radio</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="/" className="navbar-item-link">
                                <span className="navbar-item-icon">
                                    <i className="bi bi-emoji-heart-eyes"></i>
                                </span>
                                <span className="navbar-item-text">Theo dõi</span>
                            </a>
                        </li>
                        
                    </ul>
                    <div className="solid"></div>
                    <div className="subnav">
                        <ul className="navbar-list">
                            <li className="navbar-item">
                                <a href="/" className="navbar-item-link">
                                    <span className="navbar-item-icon">
                                        <i className="bi bi-music-note-beamed"></i>
                                    </span>
                                    <span className="navbar-item-text">Nhạc mới</span>
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a href="/" className="navbar-item-link">
                                    <span className="navbar-item-icon">
                                        <i className="bi bi-columns-gap"></i>
                                    </span>
                                    <span className="navbar-item-text">Thể loại</span>
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a href="/" className="navbar-item-link">
                                    <span className="navbar-item-icon">
                                        <i className="bi bi-star"></i>
                                    </span>
                                    <span className="navbar-item-text">Top 100</span>
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a href="/" className="navbar-item-link">
                                    <span className="navbar-item-icon">
                                        <i className="bi bi-collection-play"></i>
                                    </span>
                                    <span className="navbar-item-text">MV</span>
                                </a>
                            </li>
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
                </div>
            </div>
    )
}

export default Navbar;