const Input = (props) => {

    const {type, placeholder, id, name, onChange} = props;

    return (
        <input type={type} id={id} onChange={onChange} name={name} placeholder={placeholder} className="rounded-lg w-full placeholder:text-sm" required/>
    )
}

const InputNoRequired = (props) => {

    const {type, placeholder, id, name} = props;

    return (
        <input type={type} id={id} name={name} placeholder={placeholder} className="rounded-lg w-full placeholder:text-sm"/>
    )
}

Input.norequired = InputNoRequired;

export default Input;