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
        'imgUrl': '',
    },
    'fluttershy': {
        'name' : 'Fluttershy',
        'type': 'Pegasus',
        'residence': 'Ponyville',
        'imgUrl': '',
    },
    'rarity': {
        'name' : 'Rarity',
        'type': 'Unicorn',
        'residence': 'Ponyville',
        'imgUrl': '',
    },
    'pinkie pie': {
        'type': 'Earth Pony',
        'residence': 'Ponyville',
        'imgUrl': '',
    },
    'rainbow dash': {
        'name' : 'Rainbow Dash',
        'type': 'Pegasus',
        'residence': 'Cloudsdale',
        'imgUrl': '',
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
