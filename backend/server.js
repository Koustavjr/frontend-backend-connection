import express from "express";
import cors from "cors"
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000; 

app.get('/',(req,res)=>{
    return res.status(200).send("SERVER IS LIVE");
})
app.get('/api/jokes',(req,res)=>{
    res.status(200).send(jokes);
})

const jokes=[{
    id:1,
    title:"first joke",
    content:"hahaha"
},{
id:2,
title:"second joke",
content:"asdased"
},{
id:3,
title:"third joke",
content:"sogsdji"
},
{
id:4,
title:"fourth joke",
content:"bmfcjvi"
},
{
id:5,
title:"fifth joke",
content:"akowodc"
}
]


app.listen(PORT,()=>{
    console.log('SERVER IS LIVE');
})

