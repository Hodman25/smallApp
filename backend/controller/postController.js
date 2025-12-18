const postModel = require("../models/postModel")

// create data
const createPost = async (req, res) => {
    const newData = postModel({
        title: req.body.title,
        description: req.body.description,
        pImage: req.file.filename
    })
    const saveData = await newData.save()
    if (saveData) {
        res.send(saveData)
    }
}

// read 
const readData = async (req, res) => {
    const getData = await postModel.find()
    if (getData) {
        res.send(getData)
    }
}

const readSingleData = async (req, res) => {
    const getData = await postModel.find({ _id: req.params.id })
    if (getData) {
        res.send(getData)
    }
}

// update
const updateData = async (req, res) => {
    const putData = await postModel.updateOne(
        { _id: req.params.id },
        {
            $set: {
                title: req.body.title,
                description: req.body.description,
                pImage: req.file ? req.file.filename : undefined
            }
        }
    )
    if(putData){
        res.send("success update")
    }
}

const searchData = async (req, res) => {
    const findData = await postModel.find({
        $or: [
            {title: {$regex: req.params.key}}
        ]
})
    if(findData){
        res.send(findData)
    }
}

//delete data 
const deleteData = async (req, res) =>{
    try {
        const deleteItem = await postModel.deleteOne({_id: req.params.id})
        if(deleteItem){
            res.send("success delete")
        }
        
    } catch (error) {
        res.status(500).send("Server Error")
        
    }
}
module.exports = { createPost, readData, readSingleData, updateData, searchData, deleteData }