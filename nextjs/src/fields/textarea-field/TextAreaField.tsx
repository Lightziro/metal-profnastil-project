import React from "react";
interface TextAreaField {
    name: string,
    handleChange: (name: string, value: any) => void,
    classList?: string,
    value: string,
    placeHolder?: string,
}
const TextAreaField: React.FC<TextAreaField> = ({name, handleChange, classList, value, placeHolder}) => {

    const onChangeInput = (event) => {
        event.persist()
        handleChange(name, event.target.value)
    }

    return (<textarea onChange={onChangeInput}
                      className='field'
                      value={value}
                      name={name}
                      placeholder={placeHolder}
        />
    )
}
export default TextAreaField;
