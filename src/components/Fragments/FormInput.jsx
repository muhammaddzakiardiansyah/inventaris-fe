import Input from "../Elements/Input"
import Label from "../Elements/Label"

const FormInput = (props) => {

    const { onSubmit, type, placeholder, id, name, required, lableTitle, buttonTitle, btnClassname } = props;

    return (
        <form action="" className="bg-slate-200">
            <div className="p-5">
                <Label htmlFor={id}>{lableTitle}</Label>
                <Input type={type} placeholder={placeholder} id={id} name={name} {...required} />
            </div>
            <Button classname={btnClassname} >{buttonTitle}</Button>
        </form>
    )
}

export default FormInput;