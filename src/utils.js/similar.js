
const request = require('request');

// grown ups
// const movieID = 38365


// no country for old 
// const movieID = 6977
// //reservoir dogs
// const movieID = 710198
// //despicable me 
// const movieID = 519182

const similar = (movieID, callback) => {

    
  
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/'+ movieID +'/similar?language=en-US&page=1',
      json: true,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGZlNzNjODBmM2NjYjBjZTQ5YjIwOGZhYzY2ZmNmOSIsInN1YiI6IjY1N2IwZTU4N2VjZDI4MDEwMWQzMmI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YNAJDltMR82KB53JO7CfPLetscISMaevK3m3j9zHZ_4'
      }
    };

    request(options, function (error, response, body) {
      
      if (error) {
        callback('Unable connect to similar movies', undefined)
      } else if (!body.results.length) {
        callback('Unable to find similar movies. Please check spelling.',undefined);

      } else {
        let arr = []
        const similar = body.results
        for(let i = 0; i < similar.length; i++) {
            arr.push(similar[i].title)
        }
        console.log('RECOMMENDED MOVIES');
        console.log(arr);
        callback(undefined, arr)
        
      }
    
        
    //   console.log(body.results[0].title);
    //   console.log(body.results);
    //   console.log(body.results.title);
     
    });



}

// forecast(movieID, (error, data) => {
//   console.log('error', error);  
//   console.log('data', data);  
// })




module.exports = similar




// ------- this code woorks and gets yoou similar movies back 


// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/movie/'+ movieID +'/similar?language=en-US&page=1',
//   json: true,
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGZlNzNjODBmM2NjYjBjZTQ5YjIwOGZhYzY2ZmNmOSIsInN1YiI6IjY1N2IwZTU4N2VjZDI4MDEwMWQzMmI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YNAJDltMR82KB53JO7CfPLetscISMaevK3m3j9zHZ_4'
//   }
// };

// request(options, function (error, response, body) {
//   if (error) {
//     console.log('Unable to connect to movie services ');
//   } else if (!body.results.length){
//     console.log('Unable to find similar movies. Please check spelling.');
//   } else {
//     let arr = []
//     const similar = body.results
//     for(let i = 0; i < similar.length; i++) {
//         arr.push(similar[i].title)
//     }
//     console.log(arr);
//   }
  
  
    
//   console.log(body.results[0].title);
  // console.log(body.results);
//   console.log(body.results.title);
    
// });



// ------ this code works and will give you the titles of similar movies 