function dark_theme() {
  // Change theme color of buttons
  document
    .querySelector("#btn_dark")
    .setAttribute("class", "btn btn-sm btn-secondary")
  document
    .querySelector("#btn_light")
    .setAttribute("class", "btn btn-sm btn-dark")

  // Change background color
  document
    .querySelector("body")
    .style.backgroundColor = "#444"

  // Change design on links
  document
    .querySelector("#link_rpg_tools")
    .setAttribute("class", "btn btn-dark")
}

function light_theme() {
  // Change theme color of buttons
  document
    .querySelector("#btn_dark")
    .setAttribute("class", "btn btn-sm btn-outline-dark")
  document
    .querySelector("#btn_light")
    .setAttribute("class", "btn btn-sm btn-secondary")

  // Change background color
  document
    .querySelector("body")
    .style.backgroundColor = "#f8f4e1"

  // Change design on links
  document
    .querySelector("#link_rpg_tools")
    .setAttribute("class", "btn btn-outline-dark")
}

document
  .querySelector("#btn_dark")
  .addEventListener("click", dark_theme)
document
  .querySelector("#btn_light")
  .addEventListener("click", light_theme)
