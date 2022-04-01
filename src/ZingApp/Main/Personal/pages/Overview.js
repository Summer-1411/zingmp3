import { useContext } from 'react';
import { StateContext } from '../../../GlobalState';
import {  Link, Outlet } from 'react-router-dom';
//import imgSong1 from '../../../img/img_song1.jpg'
import listMusic from '../ListMusic';
//import TheSong from './TheSong';
function Overview(){
    const context = useContext(StateContext);
    //const [index, setIndex, display] = useContext(StateContext);
   const handleClickItem = (id) => {
       context.setIndex(id)
   }
    return (
        <div className="main-stt1">
            <div className="main-stt1-heading">
                <div className="header-sound">Bài Hát</div>
                <div className="main-stt1-switch">
                    <Link to ='music' className="btn case case-all"
                        onClick={() => {context.setPage(1)}}
                    >   
                        TẤT CẢ <i className="bi bi-chevron-right"></i>
                    </Link>
                    <div className="btn case case-up"><i className="bi bi-upload"></i>TẢI LÊN</div>
                    <div className="btn case case-play-all"
                        onClick={() => {context.setIndex(() => {
                            if(context.index === 0){
                                return 1;
                            }else {
                                return 0;
                            }
                        })}}
                    >
                        <i className="bi bi-caret-right-fill"></i>PHÁT TẤT CẢ
                    </div>
                </div>
            </div>
            <div className="main-stt1-contain">
                <div className="main-stt1-img-events">
                    <img src={listMusic[context.index].avatar} alt="" className="img-events index1" />
                </div>
                <div className="main-stt1-song-list">
                    {listMusic.map((value, id) => (
                        // <div key={id} className="stt1-song-item active2">
                        <div key={id} className = {id === context.index ? "stt1-song-item active2" : "stt1-song-item"} onClick={() => {handleClickItem(id)}}>
                            <div className="song-item-left">
                                <div className="song-item-avatar" style={{backgroundImage: `url(${value.avatar})`}}>
                                    {(context.display && id === context.index) && <div className="gif" style={{backgroundImage: 'url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/icons/icon-playing.gif)'}}></div>}
                                    {(context.display && id === context.index) || (
                                        <div className="song-item-icon-pause">
                                            <i className="bi bi-caret-right-fill"></i>
                                        </div>
                                    )}
                                    
                                </div>
                                <div className="song-item-properti">
                                    <div className="song-item-properti-name">{value.name}</div>
                                    <div className="song-item-properti-single">{value.single}</div>
                                </div>
                            </div>
                            <div className="song-item-name-album">
                                {value.album}
                            </div>
                            <div className="song-item-right">
                                <div className="reaction">
                                    <i className="bi bi-suit-heart-fill"></i>
                                </div>
                                <div className="song-times">
                                    {value.time}
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
            <div className="main-stt1-bottom">
                <div className="main-stt1-bottom-heading">
                    <h3 className="name-playlist">
                        Playlist
                    </h3>
                    <div className="name-all">
                        Tất cả
                        <span className="name-all-icon">
                            <i className="bi bi-chevron-right"></i>
                        </span>
                    </div>
                </div>
                <div className="add-playlist-new">
                    <div className="add-play-new-contain">
                        <div className="add-playlist-new-icon">
                            <i className="bi bi-plus"></i>
                        </div>
                        <div className="add-playlistnew-text">
                            Tạo playlist mới
                        </div>

                    </div>
                </div>
            </div>
            <Outlet />
            {/* <Routes>
                
                <Route path="/music" element = {<TheSong />} />
                
            </Routes> */}
        </div>
    )
}
export default Overview;