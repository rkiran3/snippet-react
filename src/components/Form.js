import React, { useState } from "react";

export default function Form(props) {
    console.log(`Begin Form function: props= ${props}`);
    
    //const [name, setName] = useState('Use Hooks!');
    const [category, setCategory] = useState('Default Category');
    const [title, setTitle] = useState('Default Title');

    // invoked on form submit below
    function handleSubmit(e) {
        
        e.preventDefault();
        console.log('Form Add button pressed');
        console.log("Title: [" + e.target.title.value + "]");
        console.log("Category: [" + e.target.category.value + "]");
        props.addSnippet(category);
        setCategory("");
    }

    function handleChangeCategory(e) {  
        const target = e.target;
        
        console.log( "HC:name: " + target.name + "]") ;
        console.log(e.target.value);
        console.log(e.target.title.value);
        setCategory(e.target.value);

    }

    function handleInputChange(e) {  
        const target = e.target;
        const name = target.name;
        const value = target.value;
        
        console.log( "HC:name: [" + target.name + "]") ;
        console.log( "HC:value: [" + target.value + "]") ;
        
        if (name == 'category') {
            setCategory(value);
        } else {
            setTitle(value);
        }
    }

    function handleChangeTitle(e) {  
        console.log(e.target.value);
        setTitle(e.target.value);
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
                            value={category} 
                            name="category" 
                            onChange={handleInputChange} /></td>
                    </tr>

                    <tr>
                        <td><label>Title</label></td>
                        <td><input 
                            type="text" 
                            value={title}
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
                        <button type="submit" className="btn btn__primary btn__lg">
                        Add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}