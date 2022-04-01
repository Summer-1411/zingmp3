import { useContext, useLayoutEffect, useRef } from 'react';
import { StateContext } from '../GlobalState';
import './Header.css'
import { useState } from 'react';
import { avtar_ns, avt_view } from '../setAvatar';
function Header(){
    
    document.onclick = function(){
        historyRef.current.classList.remove('flex')
    }
    //console.log('re-render-his');
    const themeBgRef = useRef();
    const historyRef = useRef();
    const context = useContext(StateContext)
    const [primary, setPrimary] = useState();
    const [bgSearch, setBgSearch] = useState();
    useLayoutEffect(() => {
        setPrimary(primary)
    }, [primary])
    const handleClick = (value) => {
        context.setBackground(value.srcbg)
        themeBgRef.current.classList.remove('display')
        //console.log(value.bg_header);
        setPrimary(value.bg_header)
        setBgSearch(value.sidebar_bg)
        context.setBgNavbar(value.bottom_bg)
        context.setColorBt(value.color)
    }
    const handleClickSearch = (e) => {
        e.stopPropagation()
        historyRef.current.classList.add('flex')
    }
    const handleBgColor = () => {
        themeBgRef.current.classList.add('display')
    }
    const handleClose = () => {
        themeBgRef.current.classList.remove('display')
    }
    //const [index, setIndex, display, setDisplay,background, setBackground] = useContext(StateContext)
    
    
    return (
        <div className="heading" style={{backgroundColor: `${primary}`}}>
                <div className="heading-main">

                    <div className="content-heading-left">
                        <div className="content-heading-prev" style={{color: `${bgSearch}`}}>
                            <i className="bi bi-arrow-left"></i>
                        </div>
                        <div className="content-heading-next" style={{color: `${bgSearch}`}} >
                            <i className="bi bi-arrow-right"></i>
                        </div>
                        <div className="content-heading-input-search" style={{backgroundColor: `${bgSearch}`}}>
                            <div className="content-heading-input-search-icon">
                                <i className="bi bi-search"></i>
                            </div>
                            <input  type="text" className="input-heading-search" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..." 
                                onClick={handleClickSearch}
                            />
                            <div ref={historyRef} className="history-search" style={{backgroundColor: `${primary}`}}>
                                <h3 className="offer-search">Đề xuất cho bạn</h3>
                                <ul className="history-search-list">
                                    <li className="history-search-item">
                                        <i className="bi bi-graph-up"></i>
                                        <a href="/" className="history-item-link">Chạy về nơi</a>
                                    </li>
                                    <li className="history-search-item">
                                        <i className="bi bi-graph-up"></i>
                                        <a href="/" className="history-item-link">Đơn phương</a>
                                    </li>
                                    <li className="history-search-item">
                                        <i className="bi bi-graph-up"></i>
                                        <a href="/" className="history-item-link">Tình đơn côi</a>
                                    </li>
                                    <li className="history-search-item">
                                        <i className="bi bi-graph-up"></i>
                                        <a href="/" className="history-item-link">#Zingchat</a>
                                    </li>
                                    <li className="history-search-item">
                                        <i className="bi bi-graph-up"></i>
                                        <a href="/" className="history-item-link">#Zing choice</a>
                                    </li>
                                </ul>
                            </div>

                            
                        </div>
    
                    </div>
                    <div className="content-heading-right">
                        <div className="content-heading-right-icon" style={{backgroundColor: `${bgSearch}`}}
                            onClick={handleBgColor}
                        >
                            <i className="bi bi-mask"></i>
                        </div>    
                        <div ref={themeBgRef} className="overflow">
                            <div className="select-backgound" style={{backgroundColor: `${primary}`}}>
                                <div className="select-background-heading">
                                    <h3 className='heading-text'>Giao diện</h3>
                                    <span className='Exit-select-bg'
                                        onClick={handleClose}
                                    >
                                        <i className="bi bi-x-lg"></i>
                                    </span>
                                </div>
                                <div className="select-background-main">
                                    <div className="main-title-1">
                                        Dynamic
                                    </div>
                                    <div className="grid">
                                        <div className="row">
                                            {avt_view.map((value, key) => (
                                                <div key={key} className="col l-2 m-3 c-6">
                                                    <div className="content-item-box">
                                                        <div className="content-item-image" style={{backgroundImage: `url(${value.avt})`}}>
                                                            
                                                        </div>
                                                        <div className="apply"
                                                            onClick={() => {
                                                                handleClick(value)}}
                                                        >Áp dụng</div>
                                                    </div>
                                                    <span className="content-item-name">{value.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="main-title-1">
                                        Nghệ sĩ
                                    </div>
                                    <div className="grid">
                                        <div className="row">
                                            {avtar_ns.map((value, key) => (
                                                <div key={key} className="col l-2">
                                                    <div className="content-item-box">
                                                        <div className="content-item-image" style={{backgroundImage: `url(${value.avt})`}}>
                                                            
                                                        </div>
                                                        <div className="apply"
                                                            onClick={() => {
                                                                handleClick(value)}}
                                                        >Áp dụng</div>
                                                    </div>
                                                    <span className="content-item-name">{value.name}</span>
                                                </div>

                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="content-heading-right-icon" style={{backgroundColor: `${bgSearch}`}}>
                            <i className="bi bi-gem"></i>
                        </div>
                        <div className="content-heading-right-icon" style={{backgroundColor: `${bgSearch}`}}>
                            <i className="bi bi-arrow-bar-up"></i>
                        </div>
                        <div className="content-heading-right-icon" style={{backgroundColor: `${bgSearch}`}}>
                            <i className="bi bi-gear"></i>
                        </div>
                        <div className="content-heading-right-avt">
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Header;