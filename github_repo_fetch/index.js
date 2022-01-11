import FetchWrapper from './fetch-wrapper.js'

const API = new FetchWrapper('https://api.github.com')
const form = document.querySelector("#repos-form");
const username = document.querySelector("#github-username");
const list = document.querySelector("#repos-list");


const getRepos = (username) => {
    API.get(`/users/${username}/repos`).then(data => {
        console.log(data[0].full_name) //Gets an object back with 29 keys
        console.log(data[0].description) //null because empty
        list.innerHTML = "";
        data.forEach(repo => {
            console.log(repo.full_name);
            console.log(repo.description)
            const $li = document.createElement("li");
            const $h2 = document.createElement("h2");
            $h2.textContent = repo.full_name;
            const $p = document.createElement("p");
            $p.textContent = repo.description
            $li.appendChild($h2);
            $li.appendChild($p);
            list.insertAdjacentElement("beforeend", $li);
        })
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const githubName = username.value;
    getRepos(githubName);
})
