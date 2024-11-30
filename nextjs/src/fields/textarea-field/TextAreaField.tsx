import React from "react";
import cn from 'classnames'
interface TextAreaField {
    name: string,
    handleChange: (name: string, value: any) => void,
    classList?: string,
    value: string,
    placeHolder?: string,
    withoutResize?: boolean
}
const TextAreaField: React.FC<TextAreaField> = ({name, handleChange, classList, value, placeHolder, withoutResize = false}) => {

    const onChangeInput = (event) => {
        event.persist()
        handleChange(name, event.target.value)
    }

    return (<textarea onChange={onChangeInput}
                      className={cn('field', {['withoutResize']: withoutResize})}
                      value={value}
                      name={name}
                      placeholder={placeHolder}
        />
    )
}
export default TextAreaField;
