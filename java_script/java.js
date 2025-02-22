let hours = document.getElementById("horas")
let minutes = document.getElementById("minutos")
let seconds = document.getElementById("segundos")

setInterval(() => {
  let date = new Date()

  hours.innerText = date.getHours().toString().padStart(2, "0")
  minutes.innerText = date.getMinutes().toString().padStart(2, "0")
  seconds.innerText = date.getSeconds().toString().padStart(2, "0")
}, 1000)

