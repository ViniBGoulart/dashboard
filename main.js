const url = "http://localhost:5500/api/"

function getUsers() {
    axios.get(url)
        .then(res => {
            apiResult.textContent = JSON.stringify(res.data)
        })
        .catch(e => console.error(e))
}

function getUser(id) {
    axios.get(`${url}${id}`)
        .then(res => {
            const data = res.data
            userId.textContent = data.id
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(e => console.log(e))
}

function addUser(newUser) {
    axios.post(url, newUser)
        .then(res => {
            apiAlert.textContent = res.data
        })
        .catch(e => console.log(e))
}

function updateUser(id, updateUser) {
    axios.put(`${url}${id}`, updateUser)
        .then(res => {
            apiAlert.textContent = res.data
        })
        .catch(e => console.error(e))
}

function deleteUser(id) {
    axios.delete(`${url}${id}`)
    .then(res => {
        apiAlert.textContent = res.data
    })
    .catch(e => console.error(e))
}

const newUser = {
    name: "Vinicius Blazius Goulart",
    city: "Tubarao",
    avatar: "https://picsum.photos/200/300"
}

const updatedUser = {
    name: "Cleber Medeiros Goulart",
    city: "Jaguaruna",
    avatar: "https://picsum.photos/200/300"
}

getUsers()
getUser(3)
// addUser(newUser)
// updateUser(3, updatedUser)
// deleteUser(3)