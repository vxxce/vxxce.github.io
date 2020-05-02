const title = document.querySelector("h1.title")
const main = document.querySelector("main")

let titleX, titleY = 10
let [r, g, b] = [200, 180, 170]
let score = 0
let titleSize = 2
let titleBorder = 0.5

const randomizeEm = n => {
  if (score > 800) {
    main.textContent = "YOU WIN"
    main.style.textAlign = "center"
    main.style.fontSize = "18rem"
    main.style.fontWeight = 700
    main.style.fontFamily = "Helvetica, Open Sans, Arial, sans-serif"
    main.style.color = "#ffff00"
    titleSize += 0.2
    titleX -= 5
    titleY -= 5
    titleBorder += 0.1
    if (score > 1200) {
      window.addEventListener("mousemove", e => e.stopPropagation(), true)
      return
    }
  }
  titleSize += 0.015
  title.style.fontSize = titleSize.toString() + "rem"
  titleBorder += 0.0015
  title.style.borderBottom = `${titleBorder.toString() + "rem"} solid rgb(231, 222, 210)`
  title.style.transform = `translate(${titleX.toString() + "px"}, ${titleY.toString() + "px"})`
  title.style.color = `rgb(${r}, ${g}, ${b})`
  titleX += Math.round(Math.random())
    ? Math.round(Math.random() * 9 + n)
    : -Math.round(Math.random() * 8 + n)
  titleY += Math.round(Math.random())
    ? Math.round(Math.random() * 8 + n)
    : -Math.round(Math.random() * 6 + n)
  if (!score % 5) {
    titleX -= 15
    titleY -= 18
  }
  if (!score % 50) {
    titleX -= 20
    titleY -= 20
  }
  r += Math.round(Math.random())
    ? Math.round(Math.random() * 5)
    : -Math.round(Math.random() * 5)
  g += Math.round(Math.random())
    ? Math.round(Math.random() * 5)
    : -Math.round(Math.random() * 5)
  b += Math.round(Math.random())
    ? Math.round(Math.random() * 5)
    : -Math.round(Math.random() * 5)
  score++
}

document.addEventListener("mousemove", () => randomizeEm(1))
document.addEventListener("click", () => randomizeEm(20))
document.addEventListener("scroll", () => randomizeEm(20))
