import React, { useState } from "react";

// const finitialValues = {
//     category: "",
//     title: "",
//     content: ""
// };

export default function Form(props) {
    const [values, setValues] = useState( props.values );

    // invoked on form submit below
    function handleSubmit(e) {
        e.preventDefault();
        // call addSnippet method in App.js
        props.addSnippet(values);
        setValues(props.values);
    }

    const handleInputChange = (e) => {  
        const {name, value} = e.target;

        setValues({
            ...values,
            [name]:value
        });
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
                            size="100"
                            value={values.category} 
                            name="category" 
                            onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Title</label></td>
                        <td><input 
                            type="text" 
                            size="100"
                            value={values.title}
                            name="title" 
                            onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Content</label></td>
                        <td><textarea 
                            id="commentId" 
                            value={values.content}
                            name="content" 
                            onChange={handleInputChange}
                            rows="10" 
                            cols="100" /></td>
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