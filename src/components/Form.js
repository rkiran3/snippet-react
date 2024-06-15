import React, { useState } from "react";

import Dropdown from './Dropdown';

export default function Form({values, options, handleSubmit, handleChange, handleClear}) {

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
                    <td></td>
                    <td><input 
                        type="hidden" 
                        readOnly={true}
                        value={values.id} 
                        name="id" 
                        onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Category</label></td>
                        <td>
                            <Dropdown label="Dropdown" options={options} handleChange={handleChange} ></Dropdown> 
                        </td>
                    </tr>
                    <tr>
                        <td><label>Title</label></td>
                        <td><input 
                            type="text" 
                            size="100"
                            value={values.title}
                            name="title" 
                            onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Content</label></td>
                        <td><textarea 
                            id="commentId" 
                            value={values.content}
                            name="content" 
                            onChange={handleChange}
                            rows="10" 
                            cols="100" /></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                        <input type="submit" className="btn btn__primary btn__lg" value="Add" />
                        <button value="clear" onClick={handleClear} >Clear</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}
