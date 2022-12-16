const body = document.querySelector('body')
const btnBgColorYellow = document.querySelector('.themes ul li:nth-child(1)')
const btnBgColorDefault = document.querySelector('.themes ul li:nth-child(2)')
const btnBgColorGreen = document.querySelector(".themes ul li:nth-child(3)")

function createGame(team1, hour, team2) {
  return `
    <li>
        <img src="./assets/icon-${team1}.svg" alt="Bandeira do ${team1}" title="${team1}">
        <strong>${hour}</strong>      
        <img src="./assets/icon-${team2}.svg" alt="Bandeira da ${team2}" title="${team2}">
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>

      <ul>
      ${games}
      </ul>

    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11", 
    "quinta",
     createGame("brazil", "16:00", "serbia")) +
  createCard(
    "28/11",
    "segunda",
    createGame("brazil", "13:00", "switzerland")
  ) +
  createCard(
    "02/12", 
    "sexta", 
    createGame("cameroon", "16:00", "brazil"))

//=================================================
window.addEventListener('load', () => {
  btnBgColorDefault.classList.add('active')
})

btnBgColorDefault.addEventListener('click', () => {
  body.className = ''
  body.classList.add('default')

  btnBgColorYellow.className = ""
  btnBgColorGreen.className = ""
  btnBgColorDefault.classList.add('active')
})

btnBgColorYellow.addEventListener("click", () => {
  body.className = ""
  body.classList.add("yellow")

  btnBgColorDefault.className = ""
  btnBgColorGreen.className = ""
  btnBgColorYellow.classList.add("active")
})

btnBgColorGreen.addEventListener("click", () => {
  body.className = ''
  body.classList.add("green")

  btnBgColorYellow.className = ""
  btnBgColorDefault.className = ""
  btnBgColorGreen.classList.add("active")
})