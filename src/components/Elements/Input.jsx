const Input = (props) => {

    const {type, placeholder, id, name, required} = props;

    return (
        <input type={type} id={id} name={name} placeholder={placeholder} className="rounded-lg w-full placeholder:text-sm" {...required}/>
    )
}

export default Input;