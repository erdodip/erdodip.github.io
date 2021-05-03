// Write the clicked character on lcd
function write_on_lcd(key) {
  // Delete zero if only zero there
  let content = document.querySelector(".calculator-lcd").innerHTML
  console.log(content, typeof(content))
  // Refactor: for easier read, better way?
  // Need `===` because 0. == 0 is equal
  // Need `"0"`, without quotation mark, zero is always there
  content === "0" ? (key == "." ? content += key : content = key) : content += key
  // Develop: allow only one `.` in a number

  document.querySelector(".calculator-lcd").innerHTML = content
}

// Solve the calculation
function solve() {
  let result = eval(document.querySelector(".calculator-lcd").innerHTML)
  clear_lcd()
  write_on_lcd(result)
}

// Clear lcd
function clear_lcd() {
  document.querySelector(".calculator-lcd").innerHTML = 0
}