import { useContext } from 'react';
import { StateContext } from '../GlobalState';
import './Bottom.css'
import '../Main/Personal/Personal.css'
import listMusic from '../Main/Personal/ListMusic'
import { useEffect, useRef, useState } from 'react';
function Bottom() {
    
    
    const [repeat, setRepeat] = useState(false)
    const [random, setRandom] = useState(false)
    const [vol, setVol] = useState(50)
    const [turnOff, setTurnOff] = useState(false)
    const [time,setTime] = useState(0);
    const audioRef = useRef();
    const prevBtn = useRef();
    const nextBtn = useRef();
    const randomBtn = useRef();
    const repeatBtn = useRef();
    const cdThumb = useRef()
    //const volume = useRef();
    const cdThumbAnimate = useRef()
    //const [timeItem, setTimeItem] = useState('');
    const [timeCurent, setTimeCurent] = useState('00:00')
    const context = useContext(StateContext);
    //const [index,setIndex, display, setDisplay] = useContext(StateContext)
    
    
    const handleClickPlay = () => {
        audioRef.current.play()
        context.setDisplay(false) 
    }
    const handleClickPause = () => {
        audioRef.current.pause()
    }
    const handleRepeat = () => {
        setRepeat(!repeat);
    }
    const handleRandom = () => { 
        setRandom(!random) 
    }
    //console.log(cdThumbAnimate.current);
    useEffect(() => {
        cdThumbAnimate.current = cdThumb.current.animate({ transform: "rotate(360deg)" }, {
            duration: 10000, // 10 seconds
            iterations: Infinity
        });
        cdThumbAnimate.current.pause()
    }, [])
    useEffect(() => {
       
        
        audioRef.current.onplay = function(){
           
            context.setDisplay(true);
            
            //console.log('play');
           
             cdThumbAnimate.current.play()
            
        }
        audioRef.current.onpause = function(){
            
            context.setDisplay(false);
           
             cdThumbAnimate.current.pause();
            
        }
        audioRef.current.onended = function(){
            
            if(repeat){
                
                audioRef.current.play()
            }else {
                handleNext()
            }
        }

    }, [context.index])
    useEffect(() => {
        audioRef.current.onended = function(){
            
            if(repeat){
                
                audioRef.current.play()
            }else {
                handleNext()
            }
        }
    }, [repeat])
    
    
    //console.log(listMusic.length - 1);
    const handlePre = () => {
        if(random){
           context.setIndex(() => {
                return Math.floor(Math.random() * listMusic.length);
            })
        }else {
           context.setIndex((prev) => {
                prev -= 1;
                if(prev >= 0){
                    return prev;
                }else {
                    return listMusic.length -1;
                }
            })
        }
    }
    const handleNext = () => {
        if(random){
           context.setIndex(() => {
                return Math.floor(Math.random() * listMusic.length);
            })
        }else {
           context.setIndex((prev) => {
                prev += 1;
                if(prev < listMusic.length){
                    return prev;
                }else {
                    return 0
                }
            })
        }
    }
    
    
    const handleTurnOff = () => {
        audioRef.current.muted = !turnOff
        setTurnOff(true)
       
        
    }
    const handleTurnOnl = () => {
        audioRef.current.muted = !turnOff
        setTurnOff(false)
    }
    useEffect(()=> {
        if(audioRef.current){
            audioRef.current.play()
        }
        
        
        return () => {
            audioRef.current.pause()
        }

    
    }, [context.index])
    
    
   
  
    
    
    
    useEffect(() => {
        const hanlderEvent = () => {
            if (audioRef.current.duration) {
                const progressPercent = Math.floor(
                    (audioRef.current.currentTime / audioRef.current.duration) * 100
                );
                setTime(progressPercent)
                setTimeCurent(() => {
                    var m = Math.floor(audioRef.current.currentTime / 60);
                        m = (m >= 10) ? m : "0" + m;
                    var s = Math.floor(audioRef.current.currentTime % 60);
                        s = (s >= 10) ? s : "0" + s;
                    return m + ":" + s;
                })
                // setTimeItem(() => {
                //     var m = Math.floor(audioRef.current.duration / 60);
                //         m = (m >= 10) ? m : "0" + m;
                //     var s = Math.floor(audioRef.current.duration % 60);
                //         s = (s >= 10) ? s : "0" + s;     
                //     return m + ":" + s;
                // })   
            }
        }
        //console.log('add');
        audioRef.current.addEventListener('timeupdate', hanlderEvent);

        
        return () => {
            //console.log('remover');
            audioRef.current.removeEventListener('timeupdate', hanlderEvent)
        }
    }, [])
    const handleChange = (e) => {
        audioRef.current.currentTime = (audioRef.current.duration / 100) * e.target.value;
    }
    const handleVolumne = (e) => {
        setVol(e.target.value)
        
    }
    useEffect(() => {
        audioRef.current.volume = vol/100
    }, [vol])
    

    
    return (
        <div className="bottom" style={{backgroundColor: `${context.bgNavbar}`, color: `${context.colorBt}`}}>
            <audio  src={listMusic[context.index].path} ref = {audioRef}></audio>
            <div className="stt1-song-item">
                    <div className="song-item-left">
                        <div ref={cdThumb} className="song-item-avatar" style={{backgroundImage: `url(${listMusic[context.index].avatar})`}}>
                            
                        </div>
                        <div className="song-item-properti">
                            <div className="song-item-wrap">
                                <div className="song-item-name-music">
                                    <div className="song-name">{listMusic[context.index].name}</div>
                                    <div className="song-name">{listMusic[context.index].name}</div>
                                </div>

                            </div>
                            <div className="song-item-properti-single">{listMusic[context.index].single}</div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="audio">
                    <div className="control-audio">
                        <div ref={randomBtn} className={random === true ? 'control-btn btn-random active3' : 'control-btn btn-random'}
                             onClick={handleRandom}
                        >
                            <i className="bi bi-shuffle"></i>
                        </div>
                        <div ref={prevBtn} className="control-btn btn-pre"
                            onClick={handlePre}
                        >
                            <i className="bi bi-skip-start-fill"></i>
                        </div>
                        {context.display || (
                            <div className="control-btn btn-pause" onClick={handleClickPlay}>
                                <i className="bi bi-play-circle"></i>
                            </div>
                        )}
                        {context.display && (
                        <div className="control-btn btn-play" onClick={handleClickPause}>
                            <i className="bi bi-pause-circle"></i>
                        </div>

                        )}
                        <div ref={nextBtn} className="control-btn btn-next"
                            onClick={handleNext}
                        >
                            <i className="bi bi-skip-end-fill"></i>
                        </div>
                        <div ref={repeatBtn} className={repeat === true ? 'control-btn btn-repeat active3' : 'control-btn btn-repeat'}
                            onClick={handleRepeat}
                        >
                            <i className="bi bi-arrow-repeat"></i>
                        </div>

                    </div>
                    <div className="control-input-range">
                        <div className="curent-time time-music">{timeCurent}</div>
                        <input className="progress" type="range" min="1" max="100"  step="0.1" value={time}
                         onChange = {(e) => handleChange(e)}/>
                        <div className="full-time time-music">{listMusic[context.index].time}</div>
                    </div>
                </div>
                <div className="volumn">
                    <i className="bi bi-mic"></i>
                    <i className="bi bi-front"></i>
                    {turnOff || (
                        <i className="bi bi-volume-up" onClick = {handleTurnOff}></i>
                    )}
                    {turnOff && (
                        <i className="bi bi-volume-mute" onClick={handleTurnOnl}></i>
                    )}
                    
                    <input type="range" className='range-volume' min="0" max="100" step="1" value={vol}
                        onChange = {(e) => {handleVolumne(e)}}
                    />
                    <span className="solid1"></span>
                    <i className="bi bi-music-note-list"></i>
                    
                </div>
        </div>
    )
}
export default Bottom