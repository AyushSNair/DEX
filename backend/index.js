import express from 'express';
import { PORT } from './config.js'
const app = express();

app.get('/', (req, res)=>{
    res.send("Hello")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})