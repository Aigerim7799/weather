// let url = 'https://randomuser.me/api/?results=50'


// const getAllUsers = async()=>{
//     let req  = await fetch(url)
//     let res = await req.json()
//     console.log(res.results)
//     renderOnePerson(res.results)
// }
// getAllUsers()

// const renderOnePerson =  (arr)=>{
//         arr.forEach(el => {
//         let img = document.createElement('img')
//         let email = document.createElement('p')
//         let phone = document.createElement('p')
//         let name = document.createElement('p')
//         let location = document.createElement('p')
//         let gender =document.createElement('p')
//         img.src = el.picture.medium
//         email.innerHTML = el.email
//         phone.innerHTML = el.cell
//         name.innerHTML = el.name.title
//         location.innerHTML = el.location.country
//         gender.innerHTML = el.gender

//         let div = document.createElement('div')
//         document.body.appendChild(div)
//         div.appendChild(img)
//         div.appendChild(email)
//         div.appendChild(phone)
//         div.appendChild(name)
//         div.appendChild(location)
//         div.appendChild(gender)




//         });
// }


let site='http://api.openweathermap.org/data/2.5/weather?q=';
let api ='&appid=b067377a72c98ae6963cdae2e35408d9'
let output = document.getElementById('output')                             //отправка запроса
const go = (e)=>{
    e.preventDefault()
    let input = document.getElementById('input')
    let url= site + input.value + api
    getOpenWeather(url)
    input.value=''
    
}

const getOpenWeather = async (url)=>{
    let req  = await fetch(url)
    let res = await req.json()          // функция для отправки запроса
    console.log(res)
    renderOpenWeather(res)

}

const renderOpenWeather =  (obj) =>{

    let name = document.createElement('p')
    let clouds =document.createElement('p')
    let country =document.createElement('p')
    let temp =document.createElement('p')
    let wind =document.createElement('p')

    name.innerHTML = obj.name
    clouds.innerHTML = obj.weather[0].main
    country.innerHTML = obj.sys.country
    temp.innerHTML = (obj.main.temp-273.15).toFixed(1) + '°C'
    wind.innerHTML = obj.wind.speed + ' speed'

    let div = document.createElement('div')
    output.appendChild(div)
    div.appendChild(name)
    div.appendChild(country)
    div.appendChild(clouds)
    div.appendChild(temp)
    div.appendChild(wind)
}
