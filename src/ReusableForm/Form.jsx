import React, { useState } from "react";

export const FormContext = React.createContext({
    form: {}
});

function Form(props){
    const {
        children,
        submit = () => {},
        initialValues, 
    } = props;

    const [form, setForm] = useState(initialValues);

    const handleFormChange = (event) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    const handleSubmit = () => {
        submit(form)
        setForm(initialValues)
    }

    return (
        <form>
            <FormContext.Provider value={{
                form,
                handleFormChange
            }}>
                {children}
            </FormContext.Provider>

            <button 
                type="button" 
                className="w3-button w3-blue w3-margin"
                onClick={handleSubmit} >
                Submit
            </button>
        </form>
    );
}

export default Form;