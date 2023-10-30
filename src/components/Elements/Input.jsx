const Input = (props) => {

    const {type, placeholder, id, name, onChange, defaultValue} = props;

    return (
        <input type={type} id={id} onChange={onChange} name={name} placeholder={placeholder} className="rounded-lg w-full placeholder:text-sm" defaultValue={defaultValue} required/>
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