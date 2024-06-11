import React from "react";
import {OptionItem} from "../../types/field";

interface SelectField {
    name: string,
    value: string,
    options: OptionItem[],
    handleChange: (name: string, value: string) => void,
}

const SelectField: React.FC<SelectField> = ({name, value, options, handleChange}) => {

    return (<select onChange={e => handleChange(name, e.target.value)} name={name} className='field' value={value}>
        {options.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
    </select>)
}
export default SelectField;
