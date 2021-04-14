// Defining text characters for the empty and full hearts for you to use later.

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


let errorh1 = document.getElementById('modal')
errorh1.className = 'hidden'

const heartType = {
  '♥': '♡',
  '♡': '♥'
}

const changeColor = {
  "like-glyph": "activated-heart",
  "activated-heart": "like-glyph"
}

const allemojis = document.querySelectorAll('.like-glyph')

function callbacks(e) {
  const targetEmoji = e.target
  console.log(e.target.className);


  mimicServerCall()
    .then(function () {
      targetEmoji.innerHTML = heartType[targetEmoji.innerHTML]
      targetEmoji.className=changeColor[targetEmoji.className]
    })
    .catch(function(error){
      console.log(error);
      let errorh1 = document.getElementById('modal')
      errorh1.className = '';
      errorh1.innerText = error;
      setTimeout(() => {
        errorh1.className = "hidden"
      }, 5000);
    })
}

for (const herts of allemojis) {
  herts.addEventListener('click', callbacks)
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
