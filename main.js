document.querySelector('#modal').className = 'hidden'

const likeButtons = document.querySelectorAll('.like-glyph')

function myFun() {
    likeButtons.forEach(function(btn) {
        btn.addEventListener('click', function(event) {

            if (event.target.innerHTML == EMPTY_HEART) {
                mimicServerCall("")
                    .then(function(resp) {

                        event.target.innerHTML = FULL_HEART
                        event.target.classList.add('activated-heart')

                    })


                .catch(function(error) {
                    let modal = document.querySelector('#modal')
                    modal.classList.remove('hidden')
                    modal.innerText = "Random server error. Try again."

                    setTimeout(() => {
                        modal.classList.add('hidden')
                    }, 3000);
                })



            } else {
                event.target.innerHTML = EMPTY_HEART
                event.target.classList.remove('activated-heart')
            }
        })
    })

}
myFun()

