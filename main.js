// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heartSelector = document.querySelectorAll('.like-glyph')
// heartSelector.addEventListener('click', likeButton);

function likeButton(e) {
    const heart = e.target
    mimicServerCall()
    .then(() => {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = 'activated-heart'
      } else if (heart.innerText === FULL_HEART) {
        heart.innerText = EMPTY_HEART;
        heart.className = '';
      }
    })
    .catch(() => {
      document.querySelector('#modal').classList.remove('hidden')
      setTimeout(addHidden(), 3000)
    })
};

for (const glyph of heartSelector) {
  glyph.addEventListener('click', likeButton)
};

function addHidden() {
  const errorMessage = document.querySelector('#modal')
  errorMessage.classList.add('hidden')
};


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
