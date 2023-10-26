const Label = (props) => {

    const {htmlFor, children} = props;

    return (
        <label htmlFor={htmlFor} className="block font-bold text-sm pb-2" >{children}</label>
    )
}

export default Label;