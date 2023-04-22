
interface Props {
    name: string;
    placeholder?: string;
    type: string;
    size?: number;
    checked?: boolean;
    value?: string;

}

function InputField(props: Props) {
    const { name, placeholder, type, size, checked, value } = props;
    return (
        <>
            <input name={name} placeholder={placeholder} type={type} size={size} checked={checked} value={value} />
        </>
    )
}

export default InputField
