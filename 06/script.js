const btnLogin = document.querySelector(".btn-login");
const form =  document.querySelector("form");


btnLogin.addEventListener ("click", (event) => { // O btnLogin vai ouvir eventos "addEventListener" chamado click e eu posso passar esse evento para uma função.
    event.preventDefault();

    const fields = [...document.querySelectorAll('.input-block input')]  
    fields.forEach(field => {
        if (field.value == "") form.classList.add('validate-error')
    })

    const formError = document.querySelector(".validate-error")
    if (formError) {
        formError.addEventListener ('animationend', (event) => {
            if (event.animation == "nono") {
                formError.classList.remove('validate-error')
            }
        })
    } else {
        form.classList.add('form-hide');   
    }
});
//Essa parte de comando diz que quando minha animação começar, irei passar um evento chamado down (olhar no CSS) porém no meu corpo buddy eu quero que minha barra de rolagem suma, ou seja, aciono o overflow="hidden".
form.addEventListener ("animationstart", event  => {
    if(event.animationName == "down") {
        document.querySelector("body").style.overflow = "hidden"
    }
})
// Eu estou adicionando um evento chamado animationend e passando uma função para que meu formulário desapareça ao clicar em login.
form.addEventListener("animationend", (event) => {
    if (event.animationName == "down")
    form.style.display = 'none';
    document.querySelector("body").style.overflow = "none" // Este comando permite que minha rolagem volte quando atualizar a página.                
})