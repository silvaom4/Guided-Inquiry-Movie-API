// const request = require('request')

// const keyAPI = '9dfe73c80f3ccb0ce49b208fac66fcf9'

// const tokenAPI = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGZlNzNjODBmM2NjYjBjZTQ5YjIwOGZhYzY2ZmNmOSIsInN1YiI6IjY1N2IwZTU4N2VjZDI4MDEwMWQzMmI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YNAJDltMR82KB53JO7CfPLetscISMaevK3m3j9zHZ_4


// const express = require('express')
// const fetch = require('node-fetch');
// const app = express()
const geocode = require('./src/utils.js/movie')
const forecast = require('./src/utils.js/similar')
const movieName = process.argv[2]


if (!movieName) {
    console.log('Please provide a movie name');
} else {

    geocode(movieName, (error, data) => {
        if(error){
            return console.log(error);
        }
    
        forecast(data.id, (error, similarData) => {
            if (error){
                return console.log(error);
            }
            console.log(data.title);
            console.log(data.overview);
            // console.log(data.id);
            
            console.log(similarData);
    
        })
    
        // console.log(data);
    })

   
}














// fetch('https://api.themoviedb.org/3/search/movie?query=grown%20ups&include_adult=false&language=en-US&page=1').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     })
// })


// app.get('', (req,res) => {
//     // res.send('Hello Wrld')


   

// const url = 'https://api.themoviedb.org/3/search/movie?query=grown%20ups&include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGZlNzNjODBmM2NjYjBjZTQ5YjIwOGZhYzY2ZmNmOSIsInN1YiI6IjY1N2IwZTU4N2VjZDI4MDEwMWQzMmI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YNAJDltMR82KB53JO7CfPLetscISMaevK3m3j9zHZ_4'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));



    
// })


// --- closer 
// fetch('https://api.themoviedb.org/3/search/movie?query=grown+ups&api_key=9dfe73c80f3ccb0ce49b208fac66fcf9').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     })
// })



// app.listen(5050, () => {
//     console.log('Listening oon port 5050');
// })

//  - - - - - - - - - - - - - - - - - - - - - -- - 

// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/search/movie?query=grown%20ups&include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGZlNzNjODBmM2NjYjBjZTQ5YjIwOGZhYzY2ZmNmOSIsInN1YiI6IjY1N2IwZTU4N2VjZDI4MDEwMWQzMmI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YNAJDltMR82KB53JO7CfPLetscISMaevK3m3j9zHZ_4'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));




// const msgOne = document.getElementById('msg-1')
// const msgTw0 = document.getElementById('msg-2')

// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/authentication';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGZlNzNjODBmM2NjYjBjZTQ5YjIwOGZhYzY2ZmNmOSIsInN1YiI6IjY1N2IwZTU4N2VjZDI4MDEwMWQzMmI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YNAJDltMR82KB53JO7CfPLetscISMaevK3m3j9zHZ_4'
//   }
// };

//     fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));














// //curl --request GET \
// // --url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=9dfe73c80f3ccb0ce49b208fac66fcf9'

// fetch('https://api.themoviedb.org/3/movie/343611?api_key=9dfe73c80f3ccb0ce49b208fac66fcf9').then((response) => {
//     response.json().then((data) => {
//       console.log(data);
//     })
// })

// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGZlNzNjODBmM2NjYjBjZTQ5YjIwOGZhYzY2ZmNmOSIsInN1YiI6IjY1N2IwZTU4N2VjZDI4MDEwMWQzMmI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YNAJDltMR82KB53JO7CfPLetscISMaevK3m3j9zHZ_4'
//   }
// };
// app.get('/', () => {
//     fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));


// })


// app.listen(6060, () => {
//     console.log('Listening on port 6060');
// })

// fetch('https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=API_KEY' + keyAPI).then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     })
// })

// const test = fetch('https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=' + keyAPI).then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//         // return data
//         // console.log('testingingingingi');

//     })
// })
// async function logMovies() {
//     const response = await fetch('https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=' + keyAPI);
//     const movies = await response.json();
//     console.log(movies);
//   }

// const url = 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=' + keyAPI 

// app.get( {url: url, json: true}, (error, body) => {
//     res.send('hello world')
    
    
// })

// app.get('', (req, res) => {
//     console.log('hello world');
//     // res.send('hello world')
// })



