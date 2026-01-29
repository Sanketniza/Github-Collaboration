
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/' , (req , res) => {
    return res.json({
        msg: "server is running on v1"
    })
})
   

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})