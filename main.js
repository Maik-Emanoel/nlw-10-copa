const body = document.querySelector('body')
const themes = document.querySelectorAll('.themes ul li')

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
for (const theme of themes) {
  theme.addEventListener('click', (e) => {
    body.className = ""

    if(e.target == themes[0]) {
      theme.classList.add('active')
      body.classList.add('yellow')
    } else {
      themes[0].className = ""
      body.classList.remove("yellow")
    }
    if (e.target == themes[1]) {
      theme.classList.add("active")
      body.classList.add("default")
    } else {
      themes[1].className = ""
      body.classList.remove("default")
    }
    if (e.target == themes[2]) {
      theme.classList.add("active")
      body.classList.add("green")
    } else {
      themes[2].className = ""
      body.classList.remove("green")
    }
  })
}