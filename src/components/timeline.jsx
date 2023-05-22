import './style/timeline.css'

const Timeline = (props) => {
	return (
		<div className="timeline">
            <div className="timeline-items">
				<div className="timeline-item fa-solid fa-circle-dot" style={{color: "var(--pale-pink)"}}>
                    <div className="timeline-content">
                        <h3>2012</h3>
                        <h2>Baccalauréat</h2>
                    </div>
                </div>
				<div className="timeline-item fa-solid fa-circle-dot item2" style={{color: "var(--pale-pink)"}}>
                    <div className="timeline-content">
                        <h3>2017</h3>
                        <h2>ESCE</h2>
                        <p>Master en Commerce International</p>
                    </div>
                </div>
				<div className="timeline-item fa-solid fa-circle-dot item3" style={{color: "var(--pale-pink)"}}>
                    <div className="timeline-content">
                        <h3>2021</h3>
                        <h2>Le Wagon</h2>
                        <p>Bootcamp en programmation web</p>
                    </div>
                </div>
				<div className="timeline-item fa-solid fa-circle-dot item3" style={{color: "var(--pale-pink)"}}>
                    <div className="timeline-content">
                        <h3>2023</h3>
                        <h2>Ecole 42</h2>
                        <p>Ecole de programmation</p>
                    </div>
                </div>
			</div>
        </div>
	)
}

export default Timeline;