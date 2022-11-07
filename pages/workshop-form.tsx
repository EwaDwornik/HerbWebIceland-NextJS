import React from 'react';
import {Formik, Form, Field} from "formik";
import * as Yup from 'yup';
import {generateIdWorkshop, workshopsDB} from "../data/workshops";



const initialState={
        title: '',
        date: '',
        imageWorkshop: '',
        email: '',
        description: '',
        event: ''
}
const WorkshopSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too short')
        .max(50, 'Too long')
        .required('Required'),
    date: Yup.date().required(),
    imageWorkshop: Yup.string().required(),
    email: Yup.string().email('Invalid email').required('Required'),
    description: Yup.string().min(20, 'Too short').required('Required'),
    event: Yup.string().required(),
});



export function WorkshopForm({addWorkshop}: any) {


    const handleSubmit = (values: any) => {
        workshopsDB.push({...values, id: generateIdWorkshop()});
        workshopsDB.sort((a, b) => (b.date > a.date) ? 1 : -1)
        console.log(workshopsDB)
    };


    return (
        <div className="center-element ">
            <Formik
                initialValues ={initialState}
                validationSchema={WorkshopSchema}
                onSubmit={(
                    values: any,
                    {setSubmitting}
                ) => {
                    handleSubmit(values)
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >

                {({errors, touched}) => (
                    <Form className="workshop-form">
                        <div>
                            <div className="pos-relative">
                                <label>Title:</label>
                                <Field className="effect-green-longer" name="title" placeholder="Ewok"/>
                                <span className="focus-border"></span>
                                {errors.title ? (
                                    <div>{(errors.title) as string}</div>
                                ) : null}
                            </div>
                            <div className="pos-relative">
                                <label>Date:</label>
                                <Field className="effect-green-longer" name="date" type={"date"} placeholder="Ewok"/>
                                <span className="focus-border"></span>
                                {errors.date ? (
                                    <div>{errors.date}</div>
                                ) : null}
                            </div>
                        </div>
                        <div>
                            <div className="pos-relative">
                                <label>Photo URL:</label>
                                <Field className="effect-green-longer" name="imageWorkshop" type={"imageWorkshop"} placeholder="Ewok"/>
                            </div>
                            <div className="pos-relative">
                                <label>Email:</label>
                                <Field className="effect-green-longer" name="email" placeholder="Ewok"/>
                                <span className="focus-border"></span>
                                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                            </div>
                        </div>
                        <div className="pos-relative">
                            <label>Description:</label>
                            <Field as="textarea" style={{height:200}} className="effect-green-longer" name="description" type={"description"} placeholder="Ewok"/>
                            <span className="focus-border"></span>
                            {errors.description ? (
                                <div>{errors.description}</div>
                            ) : null}
                        </div>
                        <div>
                            <div className="pos-relative">
                                <label>Link to the event:</label>
                                <Field className="effect-green-longer"  name="event" placeholder="http://"/>
                                <span className="focus-border"></span>
                                {errors.event ? (
                                    <div>{errors.event}</div>
                                ) : null}
                            </div>

                            <div>
                                <label>Add event:</label>
                                w <button type="submit">Submit</button>
                            </div>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default WorkshopForm;
