LCD = document.querySelector(".calculator-lcd")

function check_lcd_value_is_only_zero() {
  return LCD.innerHTML === "0"
}

function set_typed_key_to_lcd_value(key) {
  LCD.innerHTML = key
}

function add_typed_key_to_lcd(key) {
  LCD.innerHTML += key
}

function show_typed_key_on_lcd(key) {
  if (check_lcd_value_is_only_zero()) {
    set_typed_key_to_lcd_value(key)
  } else {
    add_typed_key_to_lcd(key)
  }
}

function show_result_on_lcd(result) {
  set_lcd_value_zero()
  LCD.innerHTML = result
}

function set_lcd_value_zero() {
  LCD.innerHTML = 0
}

function solve_lcd_value() {
  show_result_on_lcd(eval(LCD.innerHTML))
}