import React, {useState} from 'react';
import InputMask from 'react-input-mask';
import cn from 'classnames'

interface PhoneInputMask {
    name: string,
    handleChange: (name: string, value: string) => void,
    classSelect?: string,
    value: string,
    error?: string,
}

const PhoneInputMask: React.FC<PhoneInputMask> = ({name, handleChange, classSelect = '', value = '', error = null}) => {
    const [valueField, setValueField] = useState('');
    const changeInput = event => {
        event.persist()
        const inputValue = event.target.value;
        setValueField(inputValue);
        const regex = /[^0-9]/g;
        const phoneWithoutMask = inputValue.replace(regex, '');
        if (phoneWithoutMask.length === 11 || phoneWithoutMask.length === 0) {
            handleChange(name, inputValue);
        }
    }

    return (
        <InputMask className={cn('field', {fieldError: error})}
                   placeholder='+7 (999) 999 99 99'
                   mask="+7 (999) 999 99 99"
                   maskChar=' '
                   autoComplete='off'
                   value={valueField}
                   name={name}
                   onChange={changeInput}
        >
        </InputMask>
    )
}
export default PhoneInputMask
