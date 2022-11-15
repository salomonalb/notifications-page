export default function counter(): void {

    const counter = document.querySelector("#counter") as HTMLElement;
    const unreadNotifs = document.querySelectorAll("[data-read='false']");
    
    counter.textContent = String(unreadNotifs.length);

}