import { useEffect } from 'react';
import './RowItem.css'
function RowItem({title, List}){
    
    useEffect(() => {
        let hearts = document.querySelectorAll('.icon-heart')
        
        for(let i = 0; i < hearts.length; i++){
            hearts[i].addEventListener('click', function(e){
                let heartIcon = e.target.closest('.heart')
                let NoHeartIcon = e.target.closest('.no-heart')
                if(heartIcon){                   
                    hearts[i].classList.add('hidden')
                }
                if(NoHeartIcon){   
                    hearts[i].classList.remove('hidden')
                }
            })
        }
    }, [])
    return (
        <div className="row-container">
            <div className="row-title">
                <p className="row-title-text">
                    {title}
                </p>
            </div>
            <div className="grid">
                <div className="row">
                    {List.map((value, key) => (
                        <div key={key} className="col l-2-4">
                            <div className="row-main-item">
                                <div className="row-main-content">
                                    <div className="row-main-content-overflow"></div>
                                    <div className="row-main-btn-icon">
                                        <div className="row-main-btn icon-heart hidden">
                                            <i className="no-heart bi bi-heart"></i>
                                            <i className="heart bi bi-heart-fill"></i>
                                        </div>
                                        <div className="icon-play">
                                            <i className="bi bi-play-circle"></i>
                                        </div>
                                        <div className="row-main-btn icon-dots">
                                            <i className="bi bi-three-dots"></i>
                                        </div>
                                    </div>
                                    <img className='row-main-image' src={value.img} alt="" />
                                </div>
                                <div className="row-main-text">
                                    <div className="row-main-text-name">
                                        {value.name}
                                    </div>
                                    <div className="row-main-text-user">
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
export default RowItem