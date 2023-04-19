function kiir3() {
  console.log = ("a:", a)
  console.log = ("b:", b)
  console.log = ("c:", c)
}

let div1 = document.createElement("div")
let div2 = document.createElement("div")
let div3 = document.createElement("div")

function kiirDiv3() {
  console.log = ("div1:", div1)
  console.log = ("div2:", div2)
  console.log = ("div3:", div3)
}
div1.innerText = "Ez az első div"
div2.innerText = "Ez a második div"
div3.innerText = "Ez a harmadik div"

let a = 1
let b = 2
let c = a
kiir3()

a = 7
kiir3()
document.body.append(div1, div2, div3)

let tomb = [1, 22, 33, 14, 53]

for (let i = 0; i < tomb.length; i++) {
  console.error(tomb[i])
}

let tomb2 = tomb
