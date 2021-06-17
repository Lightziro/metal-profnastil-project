import React from "react";
import {FioSuggestions, PartySuggestions} from "react-dadata";
import '../dadata.css';

export default function CompanyField(props)
{
    const countCustom = (!props.countItems) ? 3 : props.countItems;

    const onBlurInput = event => {
        if (!event.target.value.length) {
            event.target.classList.add('input-error');
        }
    }
    const onFocusInput = event => {
        event.target.classList.remove('input-error');
    }

    const onChangeHandler = (event) => {
        props.value.set(false, {company: event.value});
    }
    const onChangeInput = (event) => {
        props.value.set(false, {company: event.target.value});
    }
    return (
        <PartySuggestions token='9cfb98a176ccc15aeac8bb48ef4cf2cf4fb8f138'
                          inputProps={{
                              className: props.name + '-react-dadata__input',
                              autoComplete: 'off',
                              onBlur: (event) => onBlurInput(event),
                              onFocus: (event) => onFocusInput(event),
                              onChange: (event) => onChangeInput(event),
                              placeholder: 'Название компании или ИНН',
                          }}
                          count={countCustom}
                          onChange={(event) => onChangeHandler(event)}
                          suggestionsClassName={props.name + '-react-dadata__suggestions'}
                          currentSuggestionClassName='react-dadata__suggestion--current'
                          suggestionClassName={props.name + '-react-dadata__suggestion'}
        >

        </PartySuggestions>
    );
}
