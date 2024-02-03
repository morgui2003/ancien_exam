import User from "./User.js";
const tableauUser = [];

const apiUrl = `https://randomuser.me/api/?results=20`;

const getPeople = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const cleandData = clean(data.results);
        console.log(cleandData);
        cleandData.forEach((person) => {
            tableauUser.push(new User(person));
        });
        renderUsers();

    }
    catch (error) {
        console.log("Error !!")
    }
}

function clean(data) {
    return data.map(person => {
        return {
            title: person.name.title,
            firstName: person.name.first,
            lastName: person.name.last,
            city: person.location.city,
            country: person.location.country,
            age: person.dob.age,
            email: person.email,
            photo: person.picture.large
        };
    });
};

function renderUsers() {
    tableauUser.forEach((person) => {
        person.render();
    });
}

document.querySelector("#sort--name").addEventListener("click", () => {
    tableauUser.sort((a, b) => {
        if (a.lastName < b.lastName) {
            return -1
        } else if (a.lastName > b.lastName) {
            return 1
        };

        return 0;
    });
    document.querySelector("#sort--age").classList.remove("selected");
    document.querySelector("#sort--name").classList.add("selected");
    renderUsers();
})

document.querySelector("#sort--age").addEventListener("click", () => {
    tableauUser.sort((a, b) => {
        return a.age - b.age;
    });
    document.querySelector("#sort--name").classList.remove("selected");
    document.querySelector("#sort--age").classList.add("selected");
    renderUsers();
})
getPeople();


