const Input = (props) => {

    const {type, placeholder, classname, id, name, required} = props;

    return (
        <input type={type} id={id} name={name} placeholder={placeholder} className={classname} {...required}/>
    )
}

export default Input;