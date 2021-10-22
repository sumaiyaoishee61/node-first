const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


app.get('/',(req, res)=>{
    res.send('Hello here  my first node yeppii,i am so excited wow wow my node is ready')

});
//daynamic API

const users =[ 
    {id:'0',name:'Bakul',email:'bakul12@gamil,com', phone:'0166899789'},
    {id:'1',name:'Shimul',email:'shimul12@gamil,com', phone:'01668345'},
    {id:'2',name:'Shitul',email:'shitul12@gamil,com', phone:'016683756'},
    {id:'3',name:'Badol',email:'badol12@gamil,com', phone:'016680563'},
    {id:'4',name:'Babu',email:'babu12@gamil,com', phone:'01668992653'},
    {id:'5',name:'Brishti',email:'brishti12@gamil,com', phone:'0166890005'},
    {id:'6',name:'Binti',email:'binti12@gamil,com', phone:'016684443'},
]


//search quary
app.get('/users',(req,res)=>{
   const search=(req.query.search);
   if (search){
    const searchResult = users.filter(user=> user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult);
   }
   else{
    res.send(users)
   }

});

//app Method
app.post('/users',(req,res)=>{
    const newUser= req.body;
    newUser.id = users.length;
    user.push(newUser);
    console.log('hitting the post',req .body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id]
   res.send(user);
})

app.get('/fruits',(req,res)=>{
    res.send(['mango','banana','orange','apple'])
})



app.get('/fruits/mangos/fazli',(req,res)=>{
    res.send('yummy mummy mangoos')
})

app.listen(port,()=>{
    console.log('listening to port',port);
});

