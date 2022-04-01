import './Recently.css'
function Recently({List}){
    return (
        <div className="recently-container">
            <div className="recently-title">
                <p className="recently-title-text">
                    Gần đây
                </p>
            </div>
            <div className="grid">
                <div className="row">
                    {List.map((value, key) => (
                        <div key={key} className="col l-2-4">
                            <div className="recently-item">
                                <div className="recently-content">
                                    <div className="recently-content-overflow"></div>
                                    <div className="recently-btn-icon">
                                        <div className="recently-btn icon-heart hidden">
                                            <i className="no-heart bi bi-heart"></i>
                                            <i className="heart bi bi-heart-fill"></i>
                                        </div>
                                        <div className="icon-play">
                                            <i className="bi bi-play-circle"></i>
                                        </div>
                                        <div className="recently-btn icon-dots">
                                            <i className="bi bi-three-dots"></i>
                                        </div>
                                    </div>
                                    <img className='recently-image' src={value.img} alt="" />
                                </div>
                                <div className="recently-text">
                                    <div className="recently-text-name">
                                        {value.name}
                                    </div>
                                    <div className="recently-text-user">
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
export default Recently