import React, { useState } from "react";

import customerService from '../services/customerService';

const AddForm = () => {
    const [data, setData] = useState({Name: '', Email: ''})
    return (
        <form>
            <label>
                Name:
                <input type="text" name="Name" onChange={(e) => setData({...data, Name: e.target.value})} />
            </label>
            <label>
                Email:
                <input type="text" name="Email"onChange={(e) => setData({...data, Email: e.target.value})} />
            </label>
            <input type="submit" value="Submit" onClick={() => customerService.addUser(data)} />
        </form>
)}

export default AddForm