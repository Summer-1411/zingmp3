import { useState } from 'react'
import './Playlist.css'
import List from './Playlist/List';
function Album() {
    const [heart, setHeart] = useState(true);
    return (
        <div className="main-stt1-bottom">
            <div className="main-stt1-bottom-heading">
                <h3 className="name-playlist">
                    Album
                </h3>
                
            </div>
            <div className="grid">
                <div className="row">
                    {List.map((value, index) => (
                        <div className="col l-2-4 m-4 c-2" key={index}>
                            <div className="playlist-item">
                                <div className="playlist-content">
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
export default Album