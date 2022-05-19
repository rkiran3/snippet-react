

export default function Form() {

    function handleSubmit(e) {
        e.preventDefault();
        alert('hello');
    }

    return (
        <form>
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
                        <td><input type="text" name="category" /></td>
                    </tr>

                    <tr>
                        <td><label>Title</label></td>
                        <td><input type="text" name="title" /></td>
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