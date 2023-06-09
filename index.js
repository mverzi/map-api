const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let ponies = {
    'twilight sparkle': {
        'name' : 'Twilight Sparkle',
        'type': 'Unicorn, Alicorn',
        'residence': 'Ponyville, Canterlot',
        'imgUrl': 'https://static.wikia.nocookie.net/mlp/images/b/bc/Princess_Twilight_Sparkle_ID_S4E26.png/revision/latest/scale-to-width-down/225?cb=20220306181401',
    },
    'applejack': {
        'name' : 'Applejack',
        'type': 'Earth Pony',
        'residence': 'Ponyville',
        'imgUrl': 'https://static.wikia.nocookie.net/mlp/images/d/d8/Applejack_S01E13_cropped.png/revision/latest/scale-to-width-down/225?cb=20130419182236',
    },
    'fluttershy': {
        'name' : 'Fluttershy',
        'type': 'Pegasus',
        'residence': 'Ponyville',
        'imgUrl': 'https://static.wikia.nocookie.net/mlp/images/d/d6/Fluttershy_ID_S1E17.png/revision/latest/scale-to-width-down/225?cb=20190410214903',
    },
    'rarity': {
        'name' : 'Rarity',
        'type': 'Unicorn',
        'residence': 'Ponyville',
        'imgUrl': 'https://static.wikia.nocookie.net/mlp/images/d/d1/Rarity_standing_S1E19_CROPPED.png/revision/latest/scale-to-width-down/225?cb=20130418142043',
    },
    'pinkie pie': {
        'type': 'Earth Pony',
        'residence': 'Ponyville',
        'imgUrl': 'https://static.wikia.nocookie.net/mlp/images/b/b2/Pinkie_Pie_ID_S4E11.png/revision/latest/scale-to-width-down/225?cb=20190410214815',
    },
    'rainbow dash': {
        'name' : 'Rainbow Dash',
        'type': 'Pegasus',
        'residence': 'Cloudsdale',
        'imgUrl': 'https://static.wikia.nocookie.net/mlp/images/4/4b/Rainbow_Dash_Wonderbolt_fantasy_cropped_S1E3.png/revision/latest/scale-to-width-down/225?cb=20210206044556',
    },
    'unknown': {
        'name' : 'unknown',
        'type': 'unknown',
        'residence': 'unknown'
    }
    // 'name': {
    //     'type': ,
    //     'residence': ,
    //     'imgUrl': ,
    // },
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const ponyName = request.params.name.toLowerCase()
    if(ponies[ponyName]){
        response.json(ponies[ponyName])
    }else{
        response.json(ponies['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
