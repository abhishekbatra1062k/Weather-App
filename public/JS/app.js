// console.log('Client side JavaScrip File is Loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const message1=document.querySelector('#message1')
const message2=document.querySelector('#message2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value

    message1.textContent='Loading...'
    message2.textContent=''
    
    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                message1.textContent=data.error
            }else{
                message1.textContent=data.Location
                message2.textContent=data.Forecast
            }
        })
    })
})

// weatherForm.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     const location=search.value
//     fetch('http://localhost:3000/weather?address='+location).then((response)=>{
//         response.json().then((data)=>{
//             if(data.error){
//                 console.log(data.error)
//             }else{
//                 console.log(data.Location)
//                 console.log(data.Forecast)
//             }
//         })
//     })
// })
