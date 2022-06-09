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

    // const handleDelete = () => {

    // }


    // const handleDelete = (e) => {
    //     e.preventDefault();
    //     Axios.post("http://localhost:5000/removeBlog", {
    //         title
    //     }).then((response) => {
    //         setListOfBlogs([...listOfBlogs, {
    //             title,
    //             body
    //         }]);
    //         console.log("User Created");
    //     })
    //     navigate('/');
    // }


    return (
        <>
            <div className="container">
                {
                    listOfBlogs.map((blog) => {
                        return (
                            <div className="content p-3" key={blog._id}>
                                <h2 className="text-dark">{blog.title}</h2>
                                <p className="text-secondary">{blog.body}</p>
                                {/* <h6 className='text-danger' onClick={handleDelete}>Delete</h6> */}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
