const express = require("express");
const mongoose = require("mongoose");
const BlogModel = require("./models/Blogs");
const cors = require("cors");
require('dotenv').config();

const conn = mongoose.connect(`mongodb+srv://${process.env.user}:${process.env.pass}@dj.vwphbtm.mongodb.net/blogsDB?retryWrites=true&w=majority`);
const app = express();
app.use(express.json());
app.use(cors());

if(conn) {
    console.log("Database Connected Successfully.");
} else {
    console.log("try again");
}

app.get("/seeBlogs", (req, res) => {
    BlogModel.find({}, (err, result) => {
        if(err) {
            console.log("Error");
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

app.post("/addBlog", async (req, res) => {
    const blog = req.body;
    const newBlog = new BlogModel(blog);
    await newBlog.save();
    res.json(blog);
});

app.delete("/removeBlog/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    BlogModel.findByIdAndRemove({_id: id}, (err, blog) => {
        if (err) {
            res.json(err);
        } else {
            res.json("Blog deleted successfully!");
        }
    })    
})



app.listen(5000, () => {
    console.log("Server is up and running on port 5000.");
})