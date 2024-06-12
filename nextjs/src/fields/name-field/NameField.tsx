import React from 'react';
import {DaDataFio, DaDataSuggestion, FioSuggestions} from "react-dadata";
import cn from 'classnames'

interface NameField {
    countItems?: number,
    name: string,
    handleChange: (name: string, value: any) => void,
    classPrefix?: string
    error?: string,
}

const NameField: React.FC<NameField> = ({countItems = 3, name, handleChange, classPrefix = '', error = null}) => {

    function onKeyPressInput(event) {
        const re = RegExp(/^[А-Яа-я\s]/);
        if (!re.test(event.key)) {
            event.preventDefault();
        }
    }

    const onChangeHandler = (data: DaDataSuggestion<DaDataFio>) => {
        handleChange(name, data.value)
    }
    const onChangeInput = (event: any) => {
        handleChange(name, event.target.value)
    }

    return (
        <FioSuggestions token={process.env.NEXT_PUBLIC_DADATA_KEY}
                        inputProps={{
                            className: cn('field', {'fieldError': error}),
                            autoComplete: 'off',
                            placeholder: 'Укажите ФИО',
                            onKeyPress: onKeyPressInput,
                            onChange: onChangeInput,
                            name,
                        }}
                        onChange={onChangeHandler}
                        count={countItems}
                        suggestionsClassName={'fieldSuggestions'}
                        currentSuggestionClassName={'fieldSuggestionsCurrent'}
                        suggestionClassName={'fieldSuggestionItem'}
        />
    )
}
export default NameField
