const send = document.getElementById("send");
const input_text = document.getElementById("myInput");
const check_box = document.querySelector(".check");
const main = document.querySelector(".main");
const final = document.querySelector(".final");
send.addEventListener("click", () => {
    const datas = input_text.value;
    if ((datas.includes("@gmail.com")) && (check_box.checked == true)) {
        main.style.display = "none";
        final.style.display = "block";
    }
    else {
        alert("Please enter valid EMAIL And CheckBox");
    }
})
