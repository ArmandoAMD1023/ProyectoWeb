import { login, logout } from "./OpenEditores/auth.js";

const buttonLogin = document.querySelectorAll(".button-login");

buttonLogin.forEach(button => {
    button.addEventListener("click", async e => {
        try {
            await login();
        } catch (error) {
            console.error(error);
        }
    });
});
