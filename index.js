const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const country = require("./db/contries");
const state = require("./db/states");
const city = require("./db/city");

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    dob:String,
    email:String,
    mobilenum:String,
    password:String,
    country:String,
    state:String,
    city:String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfully", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 



app.post("/signup", (req, res)=> {
    const { name, email, dob, mobilenum, country, state, city,password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email, 
                dob, 
                mobilenum, 
                country, 
                state, 
                city,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

app.get('/profiledata/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const result = await User.findOne({_id:id}).exec();
    res.send(result);
    
})

app.put('/Updatedata/:id', async (req, res) => {
    const itemId = req.params.id;
    const updatedData = req.body;

    try {
        const result = await User.updateOne({ _id: itemId }, { $set: updatedData });

        if (result.nModified === 1) {
            res.send(result);
        } else {
            res.status(404).send("Item not found");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
});









app.post("/country", async (req, res) => {
    let Country = new country(req.body);
    let result= await Country.save();     
    res.send(result);
});

app.get('/country', async(req, res) =>{ 
    let Country=await country.find();
    res.send(Country);
});


app.post("/state", async (req, res) => {
    let State = new state(req.body);
    let result= await State.save();     
    res.send(result);
});

app.get('/state/:id', async(req, res) =>{
    const countryId = req.params.id; 
    const States = await state.find({ country_id: countryId }).exec();
    res.send(States);
});

app.post("/city", async (req, res) => {
    let City = new city(req.body);
    let result= await City.save();
    res.send(result);
});

app.get('/city/:id', async(req, res) =>{ 
    const stateId = req.params.id;
    const City = await city.find({ state_id: stateId }).exec();
    res.send(City);
});


app.listen(9002,() => {
    console.log("BE started at port 9002")
})