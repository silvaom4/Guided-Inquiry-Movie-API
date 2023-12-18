const path = require('path')
const express = require('express')
const hbs = require('hbs')
const movie = require('./utils.js/movie')
// const forecast = require('./utils.js/similar')
const similar = require('./utils.js/similar')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Movie App',
        name: 'Osc'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Movies',
        name: 'Osc',
    })
})

app.get('/movies', (req,res) => {
    // res.render('movies', {
    //     title: 'Movies Page',
    //     name: 'Osc'
    // })
    if(!req.query.movie) {
        return res.send({
           error: 'You must provide a movie name!'
        })
    } else {
        movie(req.query.movie, (error, data) => {
            if(error){
                return res.send({error});
            }
            // console.log('error', error);
            console.log('Data', data);
            

            
            similar(data.id, (error, similarData) => {
                if (error){
                    return res.send({error});
                }
                res.send({
                    data,
                    similarData,
                })
            })
        })
    }
    
})

  // console.log('error', error);  
                // console.log('data', data);  
                // console.log(data.title);
                // console.log(data.overview);
                // console.log(data.id);
                // console.log(similarData);
app.get('*', (req, res) => {
    res.render('404', {
        title: '404: Oopsie - cannot find. Try again :)',
        name: 'Osc',
        errorMessage: 'Page no found'
    })
})





app.listen(6060, () => {
    console.log('Listening oon port 6060');
})
