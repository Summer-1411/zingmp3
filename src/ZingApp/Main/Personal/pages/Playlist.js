import { useState } from 'react'
import './Playlist.css'
import List from './Playlist/List';
function PlayList() {
    const [heart, setHeart] = useState(true);
    console.log(List);
    return (
        <div className="main-stt1-bottom">
            <div className="main-stt1-bottom-heading">
                <h3 className="name-playlist">
                    Playlist
                </h3>
                
            </div>
            <div className="grid">
                <div className="row">
                    <div className="col l-2-4 m-4 c-2">
                        <div className="create-playlist-new">
                            <div className="create-playlist-icon">
                                <i className="bi bi-plus"></i>
                            </div>
                            <h3 className="create-playlist-heading">
                                Tạo playlist mới
                            </h3>
                        </div>
                    </div>
                    {List.map((value, index) => (
                        <div className="col l-2-4 m-4 c-2" key={index}>
                            <div className="playlist-item">
                                <div className="playlist-content">
                                    <div className="playlist-content-overflow"></div>
                                    <div className="playlist-btn-icon">
                                        <div className="playlist-btn icon-heart">
                                            {heart || (
                                                <i onClick={() => setHeart(true)} className="no-heart bi bi-heart"></i>
                                            )}
                                            {heart && (
                                                <i onClick={() => setHeart(false)} className="heart bi bi-heart-fill"></i>
                                            )}
                                        
                                        </div>
                                        <div className="icon-play">
                                            <i className="bi bi-play-circle"></i>
                                        </div>
                                        <div className="playlist-btn icon-dots">
                                            <i className="bi bi-three-dots"></i>
                                        </div>
                                    </div>
                                    <img className='playlist-image' src={value.img} alt="" />
                                </div>
                                <div className="playlist-text">
                                    <div className="playlist-text-name">
                                        {value.name}
                                    </div>
                                    <div className="playlist-text-user">
                                        {value.single}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    
                    
                    
                </div>
            </div>
        </div>
    )
}
export default PlayList