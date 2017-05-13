const express = require('express')
const app = express()
const session = require('express-session');
const parser = require('body-parser').urlencoded({extended: false})

app.listen(3000, () => console.log('Server started'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(session({ 
    secret: 'keyboard cat', 
    resave: true,
    saveUninitialized: true
}));
app.get('/', (req, res) => {
             req.session.Cart
        if(req.session.Cart === undefined){
            req.session.Cart = []
            ses = req.session.Cart
            res.render('app', {ses})
        }else{
            ses = req.session.Cart
            console.log("SES: ", ses)
            res.render('app', {ses})
        }
    
})


app.post('/them', parser, (req, res) => {
    const {title, link} = req.body
    if(req.session.Cart === undefined){
        req.session.Cart = [{}]
        req.session.Cart.push({title : title, link:link, name: "SOn", id: 10})
        console.log("session: ", JSON.stringify(req.session.Cart))
        res.redirect('/')
    }else{
        req.session.Cart.push({title : title, link:link, name: "SOn", id: 10})
        console.log("session: ", JSON.stringify(req.session.Cart))
        res.redirect('/')
    }
    

})
