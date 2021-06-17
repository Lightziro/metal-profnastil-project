import React, { useRef } from 'react';
import { useState } from 'react';
import {FioSuggestions, PartySuggestions} from "react-dadata";
import './style.css';
import '../dadata.css';

export default function NameField(props) {

    const countCustom = (!props.countItems) ? 3 : props.countItems;

    function onFocusInput(event) {
        event.target.classList.remove('input-error');
    }
    function onKeyPressInput(event) {
        const re = RegExp(/^[А-Яа-я\s]/);
        if (!re.test(event.key)) {
            event.preventDefault();
        }
    }
    const onChangeHandler = (event) => {
        props.value.set(false, {fullName: event.value});
    }
    const onChangeInput = (event) => {
        props.value.set(false, {fullName: event.target.value});
    }
    const onBlurInput = (event) => {
        if (!event.target.value.length) {
            event.target.classList.add('input-error');
        }
    }
    return(
        <FioSuggestions token='9cfb98a176ccc15aeac8bb48ef4cf2cf4fb8f138'
                        inputProps={{
                            className: props.name + '-react-dadata__input',
                            autoComplete: 'off',
                            onFocus: (event) => onFocusInput(event),
                            placeholder: 'Укажите ФИО',
                            onKeyPress: (event) => onKeyPressInput(event),
                            onChange: (event) => onChangeInput(event),
                            onBlur: (event) => onBlurInput(event),
                            name: 'fullName',
                        }}
                        onChange={(event) => onChangeHandler(event)}
                        count={countCustom}
                        suggestionsClassName={props.name + '-react-dadata__suggestions'}
                        currentSuggestionClassName={props.name+'-react-dadata__suggestion--current'}
                        suggestionClassName={props.name + '-react-dadata__suggestion'}
        >
        </FioSuggestions>
    )
}
