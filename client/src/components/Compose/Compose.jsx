import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';


export default function Compose() {

    const [listOfBlogs, setListOfBlogs] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();

    const addBlog = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:5000/addBlog", {
            title,
            body
        }).then((response) => {
            setListOfBlogs([...listOfBlogs, {
                title,
                body
            }]);
            console.log("User Created");
        })
        navigate('/');
    }




    return (
        <>
            <div className="container text-start p-5">
                <h2 className="text-dark">Compose</h2>
                <form action="">
                    <div className="form-group">
                        <label className='form-label' htmlFor="blogTitle">Title</label>
                        <input
                            type="text" 
                            className='form-control' 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} />
                        <label className='form-label' htmlFor="blogBody">Body</label>
                        <textarea
                            type="text" 
                            className='form-control' 
                            value={body} 
                            rows="5" cols="30"  
                            onChange={(e) => setBody(e.target.value)}/>
                    </div>
                    <button className="btn btn-primary" type='submit' name='button' onClick={addBlog}>Publish</button>
                </form>
            </div>
        </>
    )
}