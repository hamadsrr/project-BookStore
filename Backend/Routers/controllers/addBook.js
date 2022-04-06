const {Books}=require("../../models/bookSchema")

/* -------------------------------- Add books ------------------------------- */

function saveBook(req,res){
    const newBook= new Books({
        bookId: req.body.bookId,
        title: req.body.title,
        wrater: req.body.wrater,
        price: req.body.price,
        qty: req.body.qty,
        img: req.body.img,
    })
    newBook
    .save()
    .then((err, result) => res.send(newBook))
    .catch((err) => console.log(err));
}

const getAllbooks= (req,res)=>{
    Books.find({}, (err, result)=> {
        res.json({ result: result });
      });
}



module.exports={saveBook,getAllbooks}