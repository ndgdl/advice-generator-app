const apiUrl = "https://api.adviceslip.com/advice"

window.addEventListener('load', function() {
  fetch(apiUrl).then(response => response.json())
                .then((data) => {
                  document.getElementById("advice-content").innerHTML = data.slip.advice
                  document.getElementById("advice-id").innerHTML = data.slip.id
                });
})
