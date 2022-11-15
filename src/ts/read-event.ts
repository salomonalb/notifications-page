import counter from "./counter";
import readAll from "./read-all";

export default function addReadEvents() {
    const notifs = document.querySelectorAll("[data-read]");
    
    notifs.forEach( notifEl => {
        notifEl.addEventListener('click', ()=> {
            notifEl.attributes[1].value = "true";
            counter()
        })
    })

    notifs.forEach( notifEl => {
        notifEl.addEventListener('focus', ()=> {
            notifEl.attributes[1].value = "true";
            counter()
        })
    })

    const button = document.querySelector("#button") as HTMLButtonElement;
    button.addEventListener('click', () => {
        readAll()
        counter()
    })

}