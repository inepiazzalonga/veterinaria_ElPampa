const nombre = document.querySelector(`#name`).value
const mail = document.querySelector(`#email`).value
const text = document.querySelector(`#textArea`).value
const enviar = document.querySelector(`#enviar`)
const form = document.querySelector(`.form`)



function validarForm() {
    if (nombre === "" || mail === "" || text === "") {
        const error = document.createElement(`p`)
        error.innerText=("Por favor rellena todos los campos")
        form.append(error)
        setTimeout(()=>{
            error.remove()
        }, 3000)
    } else if (nombre.value > 0 || mail.value > 0 || text.value > 0){
        const enviado = document.createElement(`p`)
        enviado.innerText=("Mensaje enviado, en breve nos pondremos en contacto")
        form.append(enviado)
    }
}

enviar.addEventListener("click", validarForm)