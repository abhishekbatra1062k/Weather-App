const request=require('request')

// // After Object Destructuring
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYWJoaWJhdHJhMzciLCJhIjoiY2tudTk0dDZzMGFxcTJ3bmozb3E2dm5hZyJ9.EtXK52-uulLTtVoOpWrKkQ&limit=1'
    request({url, json: true},(error,{body: data})=>{
        if(error){
            callback('Unale To Connect To Location Services!',undefined)
        }else if(data.features.length===0){
            callback('Unable To Find Location, Try Another Search!',undefined)
        }else{
            callback(undefined,{
                Latitude: data.features[0].center[1],
                Longitude: data.features[0].center[0],
                Location: data.features[0].place_name
            })
        }
    })
}

// // Before Object Destructuring
// const geocode=(address,callback)=>{
//     const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYWJoaWJhdHJhMzciLCJhIjoiY2tudTk0dDZzMGFxcTJ3bmozb3E2dm5hZyJ9.EtXK52-uulLTtVoOpWrKkQ&limit=1'
//     request({url: url, json: true},(error,response)=>{
//         if(error){
//             callback('Unale To Connect To Location Services!',undefined)
//         }else if(response.body.features.length===0){
//             callback('Unable To Find Location, Try Another Search!',undefined)
//         }else{
//             callback(undefined,{
//                 Latitude: response.body.features[0].center[1],
//                 Longitude: response.body.features[0].center[0],
//                 Location: response.body.features[0].place_name
//             })
//         }
//     })
// }

module.exports=geocode


// // Earlier Used

// const geoCodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWJoaWJhdHJhMzciLCJhIjoiY2tudTk0dDZzMGFxcTJ3bmozb3E2dm5hZyJ9.EtXK52-uulLTtVoOpWrKkQ&limit=1'

// request({url: geoCodeURL, json: true},(error,response)=>{
//     if(error){
//         console.log(chalk.red.inverse('Unable to connect to Location Services!'))
//     }else if(response.body.features.length===0){
//         console.log(chalk.red.inverse('Unable to find Location, Try another Search!'))
//     }else{
//         // console.log(response.body.features[0].id)
//         console.log('Latitude: '+response.body.features[0].center[1]+' Longitude: '+response.body.features[0].center[0])
//     }
// })