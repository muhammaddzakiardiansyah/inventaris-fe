const Button = (props) => {
    const {type, classname, children} = props;
    return (
        <button type={type} className={classname}>
                {children}
        </button>            
    )
}

export default Button;