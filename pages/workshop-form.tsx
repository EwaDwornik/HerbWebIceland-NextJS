import React, {useState} from 'react';
import {generateIdWorkshop} from "../services/utilities";
import {workshopsDB} from "../data/workshops";
import {Formik, Form} from "formik";
import * as Yup from 'yup';



const initialState={
    id: -1,
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
    const [formState, setFormState] = useState(initialState);


    const handleChange = (event: any) => {
        event.preventDefault();
        workshopsDB.push({...formState, id: generateIdWorkshop()});
        // Form to add a workshop. It is sorted by a date.
        workshopsDB.sort((a, b) => (b.date > a.date) ? 1 : -1)
        addWorkshop(formState);
        setFormState(initialState);
    };


    return (
        <div className="center-element ">
            <Formik
                initialValues ={{
                    id: -1,
                    title: '',
                    date: '',
                    imageWorkshop: '',
                    email: '',
                    description: '',
                    event: ''
                }}
                validationSchema={WorkshopSchema}
                onSubmit={handleChange}
            >

                {({errors, touched}) => (
                    <Form className="workshop-form">
                        <div>
                            <div className="pos-relative">
                                <label>Title:</label>
                                <input
                                    className="effect-green"
                                    type='text'
                                    required
                                    value={formState.title}
                                    onChange={e => {
                                        setFormState({...formState, title: e.target.value});
                                    }}/>
                                <span className="focus-border"></span>
                                {errors.title ? (
                                    <div>{errors.title}</div>
                                ) : null}
                            </div>
                            <div className="pos-relative">
                                <label>Date:</label>
                                <input
                                    className="effect-green"
                                    type='date'
                                    required
                                    value={formState.date}
                                    onChange={e => {
                                        setFormState({...formState, date: e.target.value});
                                    }}/>
                                <span className="focus-border"></span>
                                {errors.date ? (
                                    <div>{errors.date}</div>
                                ) : null}
                            </div>
                        </div>
                        <div>
                            <div className="pos-relative">
                                <label>Photo URL:</label>
                                <input
                                    className="effect-green"
                                    type='text'
                                    placeholder="http://"
                                    required
                                    value={formState.imageWorkshop}
                                    onChange={e => {
                                        setFormState({...formState, imageWorkshop: e.target.value});
                                    }}/>
                                <span className="focus-border"></span>
                            </div>
                            <div className="pos-relative">
                                <label>Email:</label>
                                <input
                                    className="effect-green"
                                    type='text'
                                    required
                                    value={formState.email}
                                    onChange={e => {
                                        setFormState({...formState, email: e.target.value});
                                    }}/>
                                <span className="focus-border"></span>
                                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                            </div>
                        </div>
                        <div className="pos-relative">
                            <label>Description:</label>
                            <textarea
                                className="effect-green"
                                rows={5}
                                maxLength={450}
                                required
                                value={formState.description}
                                onChange={e => {
                                    setFormState({...formState, description: e.target.value});
                                }}/>
                            <span className="focus-border"></span>
                            {errors.description ? (
                                <div>{errors.description}</div>
                            ) : null}
                        </div>
                        <div>
                            <div className="pos-relative">
                                <label>Link to the event:</label>
                                <input
                                    className="effect-green"
                                    type='text'
                                    placeholder="http://"
                                    required
                                    value={formState.event}
                                    onChange={e => {
                                        setFormState({...formState, event: e.target.value});
                                    }}/>
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
