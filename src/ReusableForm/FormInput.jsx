import React, { useContext } from "react";
import { FormContext } from "./Form";

// FormInput
function FormInput(props) {
    const { 
        label, 
        type = 'text',
        name,
    } = props;

    const formContext = useContext(FormContext);
    const { form, handleFormChange } = formContext

    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                name={name}
                className="w3-input"
                value={form[name]}
                onChange={handleFormChange}
            />
        </div>
    )
}

export default FormInput;