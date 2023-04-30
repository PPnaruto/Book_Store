const express = require('express');
const router = express.Router();
import { getAllBooks,AddBook,UpdateBook,DeleteBook } from "../Controller/Controller";

router.get('/allbooks',getAllBooks);

router.post('/add',AddBook)

router.patch('/update/:id',UpdateBook)

router.delete('/delete/:id',DeleteBook)

export default router;