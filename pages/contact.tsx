import React from 'react';
import {Formik, Field, Form, FormikHelpers} from "formik";
import {ContactValues} from "../model";
import Link from "next/link";


// Simple contact page.
function Contact() {

    return (
        <div className="contact-background">
            <div className="contact-box animated bounceInLeft">
                <div className="center-element">
                    <h1>Contact us if you want to cooperate!</h1>
                </div>
                <Formik
                    initialValues={{
                        name: '',
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
                    <Form className="contactForm ">
                        <div className="pos-relative">
                            <label htmlFor="Name">name</label>
                            <Field className="effect-green-longer" name="name" placeholder="Ewok"/>
                            <span className="focus-border"></span>
                        </div>
                        <div className="pos-relative">
                            <label htmlFor="email">e-mail</label>
                            <Field
                                className="effect-green-longergreen"
                                name="email"
                                placeholder="ewok@sw.com"
                                type="email"
                            />
                            <span className="focus-border"></span>
                        </div>
                        <div className="pos-relative">
                            <label htmlFor="subject">subject</label>
                            <Field className="effect-green-longer" name="subject" placeholder="subject"/>
                            <span className="focus-border"></span>
                        </div>
                        <div className="pos-relative">
                            <label htmlFor="message">message</label>
                            <Field className="effect-green-longer" component='textarea' row={7} id="message" name="message"
                                   placeholder="message"/>
                            <span className="focus-border"></span>

                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>

            <div className="credits">
                photo by <Link href="https://www.pexels.com/@madsdonald/" target="_blank">Mads Thomsen</Link>
            </div>
        </div>

    );
}

export default Contact;





