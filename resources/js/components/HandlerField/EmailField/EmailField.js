import React from "react";

export default function EmailField(props) {

    const onFocusInput = event => {
        event.target.classList.remove('input-error');
    }
    const onBlurInput = (event) => {
        const re = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm);

        if (!re.test(event.target.value)) {
            event.target.classList.add('input-error');
        }
    }
    const onChangeInput = (event) => {
        event.persist()
        props.value.set(event)
    } 

    return (
        <input className={props.classList}
               type='email'
               name='email'
               value={props.value.get}
               onFocus={(event) => onFocusInput(event)}
               onBlur={(event) => onBlurInput(event)}
               onChange={event => onChangeInput(event)}
               placeholder='Укажите почту'
        />
    )
}
