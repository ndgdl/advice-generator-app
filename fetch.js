const fetchApi = () => {
  const apiUrl = "https://api.adviceslip.com/advice"

  fetch(apiUrl).then(response => response.json())
    .then((data) => {
      document.getElementById("advice-content").innerHTML = data.slip.advice;
      document.getElementById("advice-id").innerHTML = data.slip.id;
    })
}

window.addEventListener('load', function() {
  fetchApi();
  const button = this.document.getElementById("shuffle");
  button.addEventListener('click', function() {
    const dice = document.getElementById("dice");

    fetchApi();
    dice.classList.add("spin");
    this.classList.add("disabled");
    setTimeout(() => {
      dice.classList.remove("spin");
      this.classList.remove("disabled");
    }, 1000);
  })
})
