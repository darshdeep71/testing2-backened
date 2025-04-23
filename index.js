let express = require("express");
let app = express();
app.use(express.json())

require('./config')

let User = require('./user')

let cors = require("cors");
app.use(cors());

app.get( "", (req, resp)=>{
    resp.send("node working on browser")
} )

app.post( '/register', async (req, resp)=>{
    // resp.send("111")

    // resp.send(req.body);
    // console.log(req.body)

    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
    // console.log(req.body);
    console.log(result);
} )



app.get( '/get', async (req, resp)=>{
    // resp.send("111")

    // resp.send(req.body);
    // console.log(req.body)

    // let user = new User(req.body);
    let result = await User.find();
    // let b = result[6].upid;
    // let b = result[0];
    // resp.send(b)
    // console.log(b)
    // result = result.length;
    resp.send(result)
    // resp.send(result.length)
    console.log(result)
    // console.log(result.length)
    // if(b==1224444) {
    //     resp.send(b)
    //     console.log("yes")
    // }
    // else {
    //     console.log("no")
    // }
    // resp.send(result[6]);
    // console.log(req.body);
    // console.log(b);
} )



app.listen(1000);