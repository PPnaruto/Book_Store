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

const UpdateBook = async(req,res)=>{
    try{
        const id = req.params.id;
        const updated_data = req.body;
        const data = await Book.findByIdAndUpdate(id,{...updated_data},{new:true});
        res.send({
            data:data,
        })
    }catch(err){
        console.error(err.message);
        res.status(400).send({
            "message":"Something Went Wrong"
        })
    }
}

const DeleteBook = async(req,res)=>{
    try{
        const id = req.params.id;
        const data = await Book.findByIdAndUpdate(id);
        res.send({
            data:data,
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
    AddBook,
    UpdateBook,
    DeleteBook
}