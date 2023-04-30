const express = require('express');
const router = express.Router();
import { getAllBooks,AddBook } from "../Controller/Controller";

router.get('/',getAllBooks);

router.post('/',AddBook)

// router.patch('/:id',UpdateBook)

// router.delete('/:id',DeleteBook)

export default router;