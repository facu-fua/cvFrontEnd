
//Cambiar tema del sitio
let themebutton = document.querySelector(".theme");
let theme = document.getElementsByTagName("body")[0];

themebutton.onclick = () =>{
    if (theme.classList.contains("light")){
        theme.classList.remove("light");
        theme.classList.add("dark");
    }else{
        theme.classList.remove("dark");
        theme.classList.add("light");
    }
};

//Mensaje por form
let emailForm = document.querySelector(".emailForm");
emailForm.onsubmit = (e) =>{
    e.preventDefault();
    let message = {
        mail: email.value,
        text: emailText.value
    }
    let status = document.querySelector(".status");
    status.innerHTML = `<h3>Mensaje enviado!`;
    console.log(message)
}