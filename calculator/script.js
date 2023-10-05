const res = document.getElementById("res");
function main(data) {
  if (data == "erase") {
    res.innerText = "";
  } else if (data == "enter") {
    res.innerText = eval(res.innerText);
  } else {
    res.innerText = res.innerText + data;
  }
}
