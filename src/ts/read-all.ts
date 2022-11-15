export default function readAll(): void {

    const unreadNotifs = document.querySelectorAll("[data-read='false']");
    
    unreadNotifs.forEach( notifEl => {
        notifEl.attributes[1].value = "true";
    })

}