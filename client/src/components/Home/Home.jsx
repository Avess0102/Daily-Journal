import React, { useState, useEffect } from 'react';
import './styles.css';
import Axios from 'axios';

export default function Home() {

    const [listOfBlogs, setListOfBlogs] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:5000/seeBlogs").then((response) => {
            setListOfBlogs(response.data);
            console.log(response.data);
        });
    }, []);

    const handleDelete = (e) => {
        console.log(e);
        Axios.delete(`http://localhost:5000/removeBlog/${e}`,{e}).then((response) => {
            alert("Deleted");
            window.location.reload(false)
        });
    }

    return (
        <>
            <div className="container">
                {
                    listOfBlogs.map((blog) => {
                        return (
                            <div className="content p-3" key={blog._id}>
                                <div className='x'>
                                    <h2 className="text-dark">{blog.title}</h2>
                                    <button className='btn rounded btn-outline-danger' onClick={() => handleDelete(blog._id)}>X</button>
                                </div>
                                <p className="text-secondary">{blog.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
