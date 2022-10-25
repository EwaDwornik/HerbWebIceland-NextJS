import React from 'react';
import {Formik, Field, Form, FormikHelpers} from "formik";
import {ContactValues} from "../model";


// Simple contact page.
function Contact() {

    return (
        <div className="contact-box">
            <div className="center-element">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut
                    labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                    In
                    nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et
                    malesuada fames ac. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                    Pellentesque elit uillamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo
                    ullamcorper a lacus vestibulum sed arcu non.</p>
            </div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: '',
                    message: ''
                }}
                onSubmit={(
                    values: ContactValues,
                    {setSubmitting}: FormikHelpers<ContactValues>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                <Form className="contactForm">
                    <div className="formRow">
                        <label htmlFor="firstName">First Name</label>
                        <Field id="firstName" name="firstName" placeholder="John"/>

                        <label htmlFor="lastName">Last Name</label>
                        <Field id="lastName" name="lastName" placeholder="Brown"/>
                    </div>
                    <div className="formRow">
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="john@brown.com"
                            type="email"
                        />
                        <label htmlFor="subject">Subject</label>
                        <Field id="subject" name="subject" placeholder="subject"/>
                    </div>

                    <label htmlFor="message">Message</label>
                    <Field component='textarea' row={7} id="message" name="message" placeholder="message"/>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

        </div>
    );
}

export default Contact;





