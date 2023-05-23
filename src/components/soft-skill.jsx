const SoftSkills = (props) => {

    const { skillName } = props;

    const circleStyle = {
        height: 150,
        width: 150,
        borderRadius: 100,
        backgroundColor: "var(--pale-pink)",
        margin: '0px 20px',
    }

    const textStyle = {
        color: "var(--beige)",
        height: 'inherit',
        width: '90%',
        paddingLeft: '10%',
        textAlign: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        letterSpacing: '0.15em'
    }

    return (
        <div className="skill" style={circleStyle}>
            <p style={textStyle}>{`${skillName}`}</p>
        </div>
    )   
}

export default SoftSkills