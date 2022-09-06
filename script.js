const name_input = document.getElementById("name_input"),
  card_num_input = document.getElementById("card_num_input"),
  month_input = document.getElementById("month_input"),
  year_input = document.getElementById("year_input"),
  cvc_input = document.getElementById("cvc_input"),
  names = document.getElementById("name"),
  card_num = document.getElementById("card_num"),
  dam = document.getElementById("dam"),
  cvc = document.getElementById("cvc"),
  confirms = document.getElementById("confirm"),
  input = document.querySelectorAll("input"),
  thanks = document.getElementById("thanks"),
  main = document.getElementById("main"),
  thankyou = document.getElementById("thankyou"),
  reset = document.getElementById("reset")

confirms.addEventListener("click", () => {
  if (name_input.value === "") {
    input[0].style.borderColor = "hsl(0, 100%, 66%)"
  }
  if (card_num_input.value === "") {
    input[1].style.borderColor = "hsl(0, 100%, 66%)"
  }
  if (month_input.value === "") {
    input[2].style.borderColor = "hsl(0, 100%, 66%)"
  }
  if (year_input.value === "") {
    input[3].style.borderColor = "hsl(0, 100%, 66%)"
  }
  if (cvc_input.value === "") {
    input[4].style.borderColor = "hsl(0, 100%, 66%)"
  }
  if (name_input.value !== "" && card_num_input.value !== "" && month_input.value !== "" && year_input.value !== "" && cvc_input.value !== "") {
    main.style.opacity = 0
    thanks.style.opacity = 1
    thankyou.innerHTML = "Thank you " + names.innerHTML.split(" ")[0]
  }

  confirms.addEventListener("click", () => {
    names.innerHTML = "Jane Appleseed"
    card_num.innerHTML = "0000 0000 0000 0000"
    dam.innerHTML = "00/00"
    cvc.innerHTML = "000"
    main.style.opacity =  "1"
    thanks.style.opacity = "0"
    name_input.value = ""
    card_num_input.value = ""
    month_input.value = ""
    year_input.value = ""
    cvc_input.value = ""
  })
})
document.addEventListener("change", () => {
  if (name_input.value !== "") {
    input[0].style.borderColor = "hsl(270, 3%, 87%)"
    names.innerHTML = name_input.value;
  }
  if (card_num_input.value !== "") {
    input[1].style.borderColor = "hsl(270, 3%, 87%)"
    card_num.innerHTML = card_num_input.value
  }
  if (month_input.value !== "" && year_input.value !== "") {
    dam.innerHTML = month_input.value + "/" + year_input.value
  }
  if (month_input.value !== "") {
    input[2].style.borderColor = "hsl(270, 3%, 87%)"
  }
  if (year_input.value !== "") {
    input[3].style.borderColor = "hsl(270, 3%, 87%)"
  }
  if (cvc_input.value !== "") {
    input[4].style.borderColor = "hsl(270, 3%, 87%)"
    cvc.innerHTML = cvc_input.value
  }
})

