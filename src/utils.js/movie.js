// const request = require('request')


// http link to pull a movie in the link 
//https://api.themoviedb.org/3/search/movie?query=grown+ups&api_key=9dfe73c80f3ccb0ce49b208fac66fcf9

const request = require('request');

//this can split and join a string by + 
// const string = 'No country for old men'
// const string = 'Despicable Me'
// const string = 'Reservoir Dogs'

// const splitTitle = string.trim().split(' ').join('+')
// console.log(splitTitle);



// const url = 'https://api.themoviedb.org/3/search/movie?query='+ splitTitle +'&api_key=9dfe73c80f3ccb0ce49b208fac66fcf9'

const movie = (movie, callback) => {

    const splitTitle = movie.trim().split(' ').join('+')
    const url = 'https://api.themoviedb.org/3/search/movie?query='+ encodeURIComponent(splitTitle) +'&api_key=9dfe73c80f3ccb0ce49b208fac66fcf9'

    request({url: url, json: true}, (error, response) => {

        if(error){
            callback('Unable to connect to movie services', undefined)
        } else if(response.body.results.length === 0){
            callback('Unable to find movie. Please check spelling.', undefined)
        } else {
            callback(undefined, {

                title: response.body.results[0].title,
                id: response.body.results[0].id,
                overview: response.body.results[0].overview,
                // poster: response.body.results[0].poster_path,

            })
            
        }
        
    })




}




// movie('Balls of fury', (error, data) => {
//     console.log('error', error);
//     console.log('Data', data);
// })


module.exports = movie















// ------- original code that searches for the movie 


//this can split and join a string by + 
// const string = 'No country for old men'
// const string = 'Despicable Me'
// const string = 'Reservoir Dogs'


// const splitTitle = string.trim().split(' ').join('+')
// console.log(splitTitle);



// const url = 'https://api.themoviedb.org/3/search/movie?query='+ splitTitle +'&api_key=9dfe73c80f3ccb0ce49b208fac66fcf9'

// request({url: url, json: true}, (error, response) => {
   
    
//     if(error){
//         console.log('Unable to connect to movie services')
//     } else if(response.body.results.length === 0){
//         console.log('Unable to find movie')
//     } else {

//         const data = response.body

//         const title = data.results[0].title
//         const overview = data.results[0].overview
        
//         // console.log(data);
    
//         console.log(title); 
//         console.log('Overview: ' + overview); 
//     }
    
// })



// ------ - - - - - - - -   























// ----- this works to find the movie title---

// const options = {
//   method: 'GET',
//   json: true,
//   url: 'https://api.themoviedb.org/3/search/movie?query=no%20country%20for%20old%20men&include_adult=false&language=en-US&page=1',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGZlNzNjODBmM2NjYjBjZTQ5YjIwOGZhYzY2ZmNmOSIsInN1YiI6IjY1N2IwZTU4N2VjZDI4MDEwMWQzMmI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YNAJDltMR82KB53JO7CfPLetscISMaevK3m3j9zHZ_4'
//   }
// };

// request(options, function (error, response, body) {
//     // const data = JSON.parse(response.body) - to manually parse 

//     const data = response.body
//     const title = data.results[0].title

//   if (error) throw new Error(error);

// //   console.log(data);
// // console.log(title);

// //   console.log(title); --gives title


// });


// ------^^^^----- this works to find the movie title 


// ------- FETCH VERSION 
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGZlNzNjODBmM2NjYjBjZTQ5YjIwOGZhYzY2ZmNmOSIsInN1YiI6IjY1N2IwZTU4N2VjZDI4MDEwMWQzMmI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YNAJDltMR82KB53JO7CfPLetscISMaevK3m3j9zHZ_4'
//   }
// };

// const forecast = (title, callback) => {
//     const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/search/movie?query='+ encodeURIComponent(title) + '&include_adult=false&language=en-US&page=1';

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
// }