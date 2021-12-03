const saveGrade = grade => {
    fetch("https://api.learnjavascript.online/demo/grades.json", {
            method: "PUT",
            body: JSON.stringify({
                grade
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
};

const form = document.querySelector("#grades-form");
const userGrade = document.querySelector("#user-grade");

form.addEventListener("submit", event => {
    event.preventDefault();
    saveGrade(userGrade.value);
});