import React, { useState } from "react";
import Form from "./Form";
import FormInput from "./FormInput";

// App
function App(){
    const [message, setMessage] = useState("");

    const initialValues = {
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
    }

    const submit = (form) => {
        setMessage(`Thanks for signing up, ${form.firstName} ${form.lastName}! We've sent you an email to ${form.emailAddress}.`);
    };
 
    return (
        <div className="container">
            <div className="w3-card w3-padding-16 w3-margin">
                <div className="w3-container w3-blue">
                    <h4>Sign Up</h4>
                </div>
                <div className="w3-container w3-padding-16">
                    <Form submit={submit} initialValues={initialValues}>
                        <FormInput 
                            label="First Name" 
                            name="firstName" />
                        <FormInput 
                            label="Last Name" 
                            name="lastName" />
                        <FormInput 
                            label="Email Address" 
                            type="email" 
                            name="emailAddress" />
                        <FormInput 
                            label="Password" 
                            type="password" 
                            name="password" />
                    </Form>

                    <p>{message}</p>
                </div>
            </div>
            
            <br/>

            <div className="w3-card w3-padding-16 w3-margin">
                <div className="w3-container w3-blue">
                    <h4>Sign In</h4>
                </div>

                <div className="w3-container w3-padding-16">
                    <Form 
                        submit={(form) => {
                            alert(`Logged in as ${form.username}`);
                        }} 
                        initialValues={{
                            username: "",
                            password: "",
                        }}
                    >
                        <FormInput 
                            label="Username" 
                            name="username" />
                        <FormInput 
                            label="Password" 
                            type="password" 
                            name="password" />
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default App;