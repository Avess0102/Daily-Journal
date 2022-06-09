import React from 'react'

function Try() {

    const handleBlogBody = (e) => {

    }
    const handleBlogTitle = (e) => {
        
    }
    const getInputValue = (e) => {
        
    }




    return (
        <>
            <div className="container text-start p-5">
                <h2 className="text-dark">Compose</h2>
                <form action="">
                    <div className="form-group">
                        <label className='form-label' htmlFor="blogTitle">Title</label>
                        <input type="text" className='form-control' name="blogTitle" value="" onChange={handleBlogTitle} />
                        <label className='form-label' htmlFor="blogBody">Post</label>
                        <textarea type="text" className='form-control' name="blogBody" value="" rows="5" cols="30"  onChange={handleBlogBody}/>
                    </div>
                    <button className="btn btn-primary" type='submit' name='button' onClick={getInputValue}>Publish</button>
                </form>
            </div>
        </>
    )
}

export default Try