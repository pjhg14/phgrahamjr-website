export default function SkeletonCard() {
    return(
        <div className="skele-card">
            <div className="card-img skele-bg"></div>
            <div className="skele-detail">
                {/* <h3>{title}</h3> */}
                <div className="skele-bg skele-title"></div>
                {/* <p>{short_description}</p> */}
                <div className="skele-desc">
                    <div className="skele-bg"></div>
                    <div className="skele-bg"></div>
                    <div className="skele-bg"></div>
                </div>
                
                
                {/* <p>list of techs used</p> */}
                <div className="skele-bg skele-techs"></div>
            </div>
        </div>
    )
}