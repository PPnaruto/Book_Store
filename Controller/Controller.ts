import Book from "../Model/Model";

const getAllBooks = async(req,res) =>{
    try{
        const data = await Book.find();
        res.send({
            data:data
        })
    }catch(err){
        console.error(err.message);
        res.status(400).send({
            "message":"Something Went Wrong"
        })
    }
}

const AddBook = async(req,res)=>{
    try{
        const book_data = req.body;
        const data = await Book.create({...book_data});
        res.send({
            data:data
        })
    }catch(err){
        console.error(err.message);
        res.status(400).send({
            "message":"Something Went Wrong"
        })
    }
}

export {
    getAllBooks,
    AddBook
}