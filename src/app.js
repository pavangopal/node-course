const path = require('path' )
const express = require('express')
const hbs = require('hbs')
const forcast = require('./utilities/forcast')
const geocode = require('./utilities/geocode')

const app = express()

//Define paths for express config
const publicDirPath = path.join(__dirname, '../public')
const viewsDirPath = path.join(__dirname, '../templates/views') 
const partialsPath = path.join(__dirname,'../templates/partials')

//Setup-handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsDirPath);

hbs.registerPartials(partialsPath)

// Setup static directory to serve 
app.use(express.static(publicDirPath))

app.get('', (req, res) => {     
    res.render('index', {
        title: "weather app",
        name: "pavan gopal"
    })
})

app.get('/about', (req,res)=>{
    res.render('about', {
        title: "About Page",
        name: "pavan gopal"
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:"Help",
        helpMessage:"This is a very helpful message",
        name: "pavan gopal"
    })
})

app.get('/weather',(req, res)=>{
const address = req.query.address

    if(!address) {
        return res.send({
            error:"Address is missing"
        })
    }
 
    geocode(address,(lat,long)=>{
        forcast(lat,long,(error,summary)=>{
            res.send({
                summary: summary
            })
        })
    })
})

app.get('/products',(req,res) => {
    if(!req.query.search){
        return res.send({
            error:"search param is missing"
        })
    }
    res.send({
        products:[]
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title: "404",
        name: "pavan gopal",
        errorMessage : "this is a 404 page"
    })
})

app.listen(3000,()=>{
    console.log("server up on port 3000");
})