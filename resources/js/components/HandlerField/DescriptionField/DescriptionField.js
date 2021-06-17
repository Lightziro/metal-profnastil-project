import React from "react";
import '../dadata.css';

export default function DescriptionField(props) {

    const onKeyPressHandler = (event) => {
        const re = RegExp(/^[А-Яа-я\s\d!()%]/);
        if (!re.test(event.key)) {
            event.preventDefault();
        }
    }
    const onChangeInput = (event) => {
        event.persist()
        props.value.set(event)
    }

    return (<textarea onChange={onChangeInput}
                      className='cart-react-dadata__input'
                      value={props.value.get}
                      name='description'
                      placeholder='Укажите описание(не обязательно)'
                      onKeyPress={(event) => onKeyPressHandler(event)}
        />
    )
}
