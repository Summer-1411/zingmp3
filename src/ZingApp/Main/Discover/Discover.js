import { useEffect, useRef } from 'react';
import'./Discover.css'
import listSlider from './listSlider';
import List from '../Personal/pages/Playlist/List';
import Recently from './Recently/Recently';
import RowItem from '../RowItem/RowItem';

function Discover(){
    
    const items = useRef()
    const positionX = useRef(0);
    const index = useRef(0);
    const sliderMain = useRef();
    const prevBtn = useRef();
    const nextBtn = useRef();
    useEffect(() => {

        const sliderLeng = listSlider.length;
        const itemsWidth = items.current.offsetWidth
        function handleChangeSlide(value){
                if(value === 1){
                    
                    if(index.current >= sliderLeng - 3){
                        index.current = sliderLeng - 3;
                        return;
                    };
        
                    positionX.current = positionX.current - itemsWidth;
                    sliderMain.current.style = `transform: translateX(${positionX.current}px);`;
                    index.current++;
                    
                }else if(value === -1){
                    
                    if(index.current <= 0) {
                        index.current = 0
                        return
                    };
                    positionX.current = positionX.current + itemsWidth;
                    
                    sliderMain.current.style = `transform: translateX(${positionX.current}px);`;
                    index.current--;
                    
                }
               
        }
        const handleNext = () => {
            handleChangeSlide(1)
        }
        const handlePrev = () => {
            handleChangeSlide(-1)
        }

        nextBtn.current.addEventListener('click', handleNext);
        prevBtn.current.addEventListener('click', handlePrev)

        return () => {
            if(nextBtn.current && prevBtn.current){
                nextBtn.current.removeEventListener('click', handleNext);
                prevBtn.current.removeEventListener('click', handlePrev)
            }
            
    
        }
    })

  
    return (
        <div className="discover">
            <div className="discover-slider-wrap">
                <div ref={prevBtn} className="discover-btn discover-btn-prev">
                    <i className="bi bi-chevron-left"></i>
                </div>
                <div ref={nextBtn} className="discover-btn discover-btn-next">
                    <i className="bi bi-chevron-right"></i>
                </div>
                <div ref={sliderMain} className="discover-slider-main">
                    {listSlider.map((value, key) => (
                        <div ref={items} key={key} className="discover-slider-item">
                            <img className='discover-slider-img' src={value.src} alt="" />
                        </div>
                    ))}
                    
                </div>
            </div>
            <Recently List={List} />
            <RowItem 
                title="Lựa chọn hôm nay"
                List = {List} 
            />
            <RowItem 
                title="Có thể bạn muốn nghe"
                List={List}
            />
            <RowItem 
                title="XONE's CORNER"
                List={List}
            />
            .
        </div>
    )
}
export default Discover