import './style/timeline.css'

const Timeline = (props) => {
	return (
		<div className="timeline">
            <div className="timeline-items">
				<div className="timeline-item">
                    <p>2012</p>
                    <div className="timeline-content">Step 1</div>
                </div>
				<div className="timeline-item">
                    <p>2017</p>
                    <div className="timeline-content">Step 2</div>
                </div>
				<div className="timeline-item">
                    <p>2017</p>
                    <div className="timeline-content">Step 3</div>
                </div>
				<div className="timeline-item">
                    <p>2021</p>
                    <div className="timeline-content">Step 4</div>
                </div>
			</div>
        </div>
	)
}

export default Timeline;