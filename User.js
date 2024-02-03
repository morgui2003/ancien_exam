class User {
    #theUser;
    static compteur = 0;
    constructor(person) {
        this.title = person.title;
        this.firstName = person.firstName;
        this.lastName = person.lastName;
        this.city = person.city;
        this.country = person.country;
        this.age = person.age;
        this.email = person.email;
        this.photo = person.photo;

        this.#theUser = this.generateUser();
        this.#theUser.addEventListener("click", (event) => {
            this.togglePresence(event.currentTarget);
        });

    }

    generateUser() {
        const containerPerson = document.createElement("div");
        containerPerson.classList.add("user");
        containerPerson.dataset.present = false;

        const childHTML = `
    <img src="${this.photo}">
        <div class="user--info">
            <h1>${this.title} ${this.firstName} ${this.lastName}</h1>
            <p>${this.age} years old</p>
            <p>${this.city}, ${this.country}</p>
        </div>
        <a href="mailto:${this.email}">
            <span class="mail">✉️</span>
        </a>`

        containerPerson.insertAdjacentHTML("afterbegin", childHTML);
        return containerPerson;

    }

    render() {
        const main = document.querySelector("main");
        main.appendChild(this.#theUser);
    }

    togglePresence(div) {
        if (div.dataset.present === "false") {
            div.dataset.present = "true";
            User.compteur++;
        } else {
            div.dataset.present = "false";
            User.compteur--
        };
        document.querySelector(".counter").textContent = `${User.compteur}/20 people are here`;

    }

}

export default User;