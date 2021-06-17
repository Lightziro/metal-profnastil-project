import React  from 'react';
import InputMask from 'react-input-mask';

export default function PhoneInputMask(props) {
    const blurInputPhone = (event) => {
        if (!event.target.value.length) {
            event.target.classList.add('input-error');
        }
    }

    const focusInputPhone = event => {
        event.target.classList.remove('input-error');
    }
    const changeInput = event => {
        event.persist()
        props.value.set(event)
    }

    return(
        <InputMask className={props.classSelect}
                   inputRef={props.refInput}
                   placeholder='+7 (999) 999 99 99'
                   mask="+7 (999) 999 99 99"
                   maskChar=' '
                   autoComplete='off'
                   value={props.value.get}
                   name='phone'
                   onChange={changeInput}
                   onBlur={(event) => blurInputPhone(event)}
                   onFocus={(event) => focusInputPhone(event)}>
        </InputMask>
    )
}
