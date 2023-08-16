const { render } = require('ejs');
const express = require('express');
const morgan = require('morgan')

const app = express();

//listen to request
app.listen(3000);

//setview engine
app.set('view engine', 'ejs')




const students = [
    {
        name:'Ken',
        surname:'Mathew',
        age: '54'
    },

    {
        name:'Ben',
        surname:'Hunter',
        age: '23'
    },

    {
        name:'Gavin',
        surname: 'Yoto',
        age: '22'
    },
]



//middleware
// app.use((req, res, next)=>{
//     console.log('hostname', req.hostname)
//     console.log('url', req.path)
//     console.log('Method', req.method)
//     next()
// })
app.use(morgan('dev'))

//middleware for static files
app.use(express.static('public'))



app.get('/', (req,res) => {
    // res.sendFile('./views/index.html', {root:__dirname})
    res.render('index', {students, title:'Home'})
})

app.get('/about', (req, res) =>{
    //  res.status(200).sendFile('./views/about.html',{root:__dirname})
    res.render('about', {title: 'About'})
})

// redirect
// app.get('/about-us', (req,res) => {
//     res.redirect('about')
// })

app.use((req, re)=>{
    // res.status(404).sendFile('./views/404.html', {root:__dirname})
res.status(404).render('404',{title: '404'})

})