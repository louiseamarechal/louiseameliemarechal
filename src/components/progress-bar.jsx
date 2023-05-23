import './style/progress-bar.css'

const ProgressBar = (props) => {
    const { completed, skill } = props;
  
    const containerStyles = {
      height: 20,
      width: 180,
      backgroundColor: "var(--white)",
      border: "1px solid var(--grey)",
      borderRadius: 20
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: "var(--pale-pink)",
      borderRadius: 'inherit',
      transition: 'width 1s ease-in-out',
    //   opacity: 0.

    }
  
    return (
        <div className="progress-bar">
            <div style={containerStyles}>
                <div style={fillerStyles}></div>
            </div>
            <p>{`${skill}`}</p>
        </div>
    );
  };
  
  export default ProgressBar;