import React from "react";
import cn from 'classnames'

interface EmailField {
    name: string,
    handleChange: (name: string, value: any) => void,
    classList?: string,
    value: string,
    error?: string,
}

const EmailField: React.FC<EmailField> = ({name, handleChange, classList = '', value = '', error = null}) => {
    const onChangeInput = (event) => {
        event.persist()
        handleChange(name, event.target.value)
    }

    return (
        <input className={cn('field', {fieldError: error})}
               type='email'
               name={name}
               value={value}
            // onFocus={(event) => onFocusInput(event)}
            // onBlur={(event) => onBlurInput(event)}
               onChange={event => onChangeInput(event)}
               placeholder='Укажите почту'
        />
    )
}
export default EmailField;
