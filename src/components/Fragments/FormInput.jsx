const FormInput = (props) => {

    const { children, onSubmit } = props;

    return (
        <form onSubmit={onSubmit} className="bg-slate-200">
            {children}
        </form>
    )
}

export default FormInput;