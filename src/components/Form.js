import React, { useState } from "react";

const initialValues = {
    category: "",
    title: ""
};

export default function Form(props) {
    console.log(`Begin Form function: props= ${props}`);    
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [values, setValues] = useState( initialValues );

    // invoked on form submit below
    function handleSubmit(e) {
        
        e.preventDefault();
        console.log('Form Add button pressed');
        props.addSnippet(values);
        setValues(initialValues);
    }

    const handleInputChange = (e) => {  
        const {name, value} = e.target;

        setValues({
            ...values,
            [name]:value
        });

        console.log(values);        
        console.log('exiting handleInputChange');
    }

    return (
        <form onSubmit={handleSubmit}>
            <table bordered="true" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label>Category</label></td>
                        <td><input 
                            type="text" 
                            value={values.category} 
                            name="category" 
                            onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Title</label></td>
                        <td><input 
                            type="text" 
                            value={values.title}
                            name="title" 
                            onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Comments</label></td>
                        <td><textarea id="commentId" name="comments" rows="5" cols="50" /></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                        <input type="submit" className="btn btn__primary btn__lg" value="Add" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}