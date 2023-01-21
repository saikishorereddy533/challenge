const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user");
const cookieParser = require("cookie-parser")
const path = require("path")

dotenv.config();

const app = express();



app.set("view engine","ejs");

//app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true })); 

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/",userRoute);

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("db connected...")
}).catch((err)=>{
    console.log(err)
})
app.listen(process.env.PORT || 5050,()=>{
    console.log("server running...")
})
