/*

Auther -- Hardik

Purpose -- Understanding Template engines 
Javascript dynamic rendering of data to Static HTML PAGES --
Send Dynamic data and display in a HTML PAGE using EJS

EJS --> Embedded Javascript

--> Install ejs
npm install ejs --save

--> set view template
syntax -- app.set('view engine', 'view engine name(in our case ejs)')


-->Create a views(name -- mandatory) folder which will contain our template HTML Document

-->Create a .ejs file(Same as HTML)

-->Express automatically knows to locate this template


Now question will be how to inject this data to html??
Ans --> Just use the format --> <%= 'dataname' %>
Check out the template for further information
*/

var express = require('express')
var app = express()

app.set('view engine', 'ejs')


app.get('/', function(req, res){
    res.render('index')
})

app.get('/contact', function(req, res){
    res.render('contact')
})

/*
check this request out
http://127.0.0.1:8081/profile/hardik/hdk0512gupta@gmail.com/kyafarakpadega change params to any other name
app.get('/profile/:name/:email/:address', function(req, res)
{
    res.send('You are seeing the profile of --> '+req.params.name+' email --> '+req.params.email+' address --> '+req.params.address)
})

we will use this method as an example to check only to check profiles of various users and render that information into our HTML Page
Note  -- To render dynamic web pages we will use res.render instead of res.sendFile
(Name of Template -- profile)

syntax -- res.render('template-name', {Object with params to send to HTML})
*/

/* -- EJS CHECK Outputing only data --  */
//Inject data using <%= 'data' %>
app.get('/profile/:name', function(req, res){
    
    var data = {email : 'hdk0512gupta@gmail.com', status : 'Single', job : 'jobless'}//2. Now Create a Object and pass this also(This could dummy data or data fetched from the database)
    res.render('profile', {personName : req.params.name, userData : data}) //1. check only this out first
})

/* Embedding actual js code in HTML */ 
//Embedd js using <%  **JSCODE** %>


app.get('/posts', function(req, res){
    var posts = {posts:['We can do it!', 'All we need is love', 'Rise and shine', 'To success and nothing less']}
    res.render('posts', {postsData : posts})
})

var server = app.listen(8081, function(){
    console.log('Application running on port --> 8081');
})