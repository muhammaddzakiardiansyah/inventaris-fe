import Input from "../Elements/Input"
import Label from "../Elements/Label"

const FormInput = (props) => {

    const { onSubmit  } = props;

    return (
        <form action="" className="bg-slate-200">
            <div className="p-5">
                <Label></Label>
                <Input />
            </div>
            <Button classname="px-5 py-2 bg-green-600 hover:bg-green-800 rounded-lg">Tambah</Button>
        </form>
    )
}

export default FormInput;