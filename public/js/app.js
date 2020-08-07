console.log("client side JS file loaded");




const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#mesg-1')
const message2 = document.querySelector('#mesg-2')

message1.textContent = ""

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = search.value

    fetch(`/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
        if (data.error) {
            console.log(data.error);
        } else {
            console.log(data);
            }
        })
    })
})