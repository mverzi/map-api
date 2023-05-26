document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const ponyName = document.querySelector('input').value
    try{
        const response = await fetch(`https://localhost:8000/api/${ponyName}`)
        const data = await response.json()
        console.log(data)
        document.querySelector('h2').innerText = data.name
    } catch(error) {
        console.log(error)
    }
}