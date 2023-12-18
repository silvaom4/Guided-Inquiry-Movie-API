console.log('running');

//  form fetch info will go here 


//  event listener {

// fetch info here 
// fetch local host 

// }


// fetch('http://localhost:6060/movies?movie=avatar').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     })
// })


const form = document.querySelector('form')
const input = document.querySelector('input')

const messageOne = document.getElementById('msg-1')
const messageTwo = document.getElementById('msg-2')
const messageThree = document.getElementById('msg-3')
const messageFour = document.getElementById('msg-4')

let ul = document.querySelector('ul')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    messageOne.textContent = 'Loading'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageFour.textContent = ''
    ul.innerHTML = ''
    // console.log('button works');
    let movie = input.value
    // console.log(movie);
    fetch('http://localhost:6060/movies?movie='+ movie).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
        } else {
            console.log(data);
            messageOne.textContent = 'Movie Title: ' + data.data.title
            messageTwo.textContent = 'Movie ID: ' + data.data.id
            messageThree.textContent = 'Movie Overview: ' + data.data.overview
            messageFour.textContent = "Similar Movies: "
            
            data.similarData.forEach(movie => {
            const li = document.createElement('li')
            li.textContent = movie
                ul.appendChild(li)
                
            })
        }
        
    })
})

})


// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let movie = input.value

//     messageOne.textContent = "loading"

//     fetch('http://localhost:6060/movies?movie=' + movie).then((response) => {
//     response.json().then((data) => {
//         console.log('data');
//         if(error) {
//             messageOne.textContent = data.error
//         } else {
//             messageOne.textContent = data.title
//         }

//     })

// })

// })