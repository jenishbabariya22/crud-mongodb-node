let http = require("http")
let express = require("express")

let app = express()
app.set("view engine",'ejs')
app.use(express.urlencoded())

let db = require('./config/db')

let user = require('./models/usermodel')

app.get('/',(req,res)=>{
    return res.render("home")
})

app.post('/insert',(req,res)=>{
    const name = req.body.name;
    const password = req.body.password
    user.create({
        name:name,
        password:password
    }).then((data)=>{
        console.log('recford add');
        res.redirect('/viewrecord')
    }).catch((err)=>{
        console.log(err);
    })
})

app.get('/viewrecord',(req,res)=>{
   user.find().then((data)=>{
    return res.render('viewrecord',{
        data
    })
   })
})

app.get('/deleterecord',(req,res)=>{
    let id = req.query.id
    user.findByIdAndDelete(id)
    .then((data)=>{
        console.log(data);
        return res.redirect('/viewrecord')
    }).catch((err)=>{
        console.log(err);
        return false
    })
})

http.createServer(app).listen(8000)