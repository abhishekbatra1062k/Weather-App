const request=require('request')

// // After Object Destructuring
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=8ff76380ce293845930aeffee18fbba8&query='+ latitude +','+ longitude +'&units=f'
    request({url, json: true},(error,{body: data})=>{
        if(error){
            callback('Unable To Connect To Weather Services!',undefined)
        }else if(data.error){
            callback('Unable to Find Location!',undefined)
        }else{
            callback(undefined,data.current.weather_descriptions[0]+'. It is currently '+data.current.temperature+' degrees out. It feels like '+data.current.feelslike+' degrees out.')
        }
    })
}

// // Before Object Destructuring
// const forecast=(latitude,longitude,callback)=>{
//     const url='http://api.weatherstack.com/current?access_key=8ff76380ce293845930aeffee18fbba8&query='+ latitude +','+ longitude +'&units=f'
//     request({url: url, json: true},(error,response)=>{
//         if(error){
//             callback('Unable To Connect To Weather Services!',undefined)
//         }else if(response.body.error){
//             callback('Unable to Find Location!',undefined)
//         }else{
//             callback(undefined,response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degrees out. It feels like '+response.body.current.feelslike+' degrees out.')
//         }
//     })
// }

module.exports=forecast



// // Earlier Used

// const url='http://api.weatherstack.com/current?access_key=8ff76380ce293845930aeffee18fbba8&query=37.8267,-122.4233&units=f'

// request({url: url, json:true},(error,response)=>{
//     if(error){
//         console.log(chalk.red.inverse('Unable to connect to Weather Services!'))
//     }else if(response.body.error){
//         console.log(chalk.red.inverse('Unable to find Location!'))
//     }else{
//         // const data=JSON.parse(response.body)
//         // console.log(response.body.current)
//         console.log(response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degrees out. It feels like '+response.body.current.feelslike+' degrees out.')
//     }
// })