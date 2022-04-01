import { useContext } from 'react';
import { StateContext } from '../../../GlobalState';
import listMusic from '../ListMusic'
function TheSong(){
    //const [index, setIndex, display] = useContext(StateContext)
    const context = useContext(StateContext)
    const handleClickItem = (id) => {
        context.setIndex(id)
    }
    return (
        <div id="main-stt2">
                        <div className="main-stt2-heading">
                            <div className="main-stt2-heading-item">
                                BÀI HÁT
                            </div>
                            <div className="main-stt2-heading-item">
                                ALBUM
                            </div>
                            <div className="main-stt2-heading-item">
                                THỜI GIAN
                            </div>
                        </div>
                        <div className="main-stt2-song-list">
                            {listMusic.map((value, id) => (
                                // <div key={id} className="stt1-song-item active2">
                                <div key={id} className={id === context.index ? "stt1-song-item active2" : "stt1-song-item"} onClick = {() => {handleClickItem(id)}}>
                                    <div className="song-item-left">
                                        
                                        <div className="song-item-avatar" style={{backgroundImage: `url(${value.avatar})`}}>
                                                {(context.display && id ===context.index) && <div className="gif" style={{backgroundImage: 'url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/icons/icon-playing.gif)'}}></div>}
                                                {(context.display && id ===context.index) || (
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
    )
}
export default TheSong;