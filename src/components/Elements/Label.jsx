const Label = (props) => {

    const {htmlFor, classname, children} = props;

    return (
        <label htmlFor={htmlFor} className={classname}>{children}</label>
    )
}

export default Label;