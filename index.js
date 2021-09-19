const app = require('./app')
const port = process.env.PORT || 5000



app.listen(port, ()=>{
    console.log(' server has been started ')
})
//mongodb+srv://maxim:<password>@cluster0.6bfj1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority