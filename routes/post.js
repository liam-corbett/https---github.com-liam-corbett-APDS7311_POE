const express = require('express')
const router = express.Router();
const Post = require('../modules/post')
const checkauth = require('../check-auth')

router.get('', (req,res) => {
    /*const orders = [
        {
            id: "1",
            name: "Orange"

        },
        {
            id: "2",
            name: "Banana"
        },
        {
            id: "3",
            name: "Pear"
        }
    ]
    res.json(
        {
            message: "Fruits",
            orders: orders
        }
    )*/
    Post.find().then((posts)=>{
        res.json(
            {
                message: 'Posts found',
                posts:posts
            }
        )
    })

})

router.post('', checkauth, (req,res) => {
    const post = new Post(
        {
            id: req.body.id,
            name: req.body.name
        }
    )
    post.save();
    res.status(201).json({
        message: 'Posts Created',
        post:post
    })
})

router.delete("/:id", checkauth, (req,res) => {
    Post.deleteOne({_id: req.params.id})
    .then((result)=>
    {
        res.status(200).json({message: "Post Deleted"});
    });
})

module.exports = router