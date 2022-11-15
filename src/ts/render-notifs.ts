import { CustomNotification } from "./notifications";

export default function renderNotifs(notifications: CustomNotification[]): void {

    const notifsContainer = document.querySelector("#notifs-container") as HTMLElement;

    notifications.forEach(notification => {
        
        const article = document.createElement('article'); 
        article.setAttribute('class', 'notif');
        article.dataset.read = String(notification.notifRead);

        const imageContainer = document.createElement('figure');
        imageContainer.setAttribute('class', 'notif__image-container');
        article.appendChild(imageContainer);

        const img = document.createElement('img');
        img.setAttribute('class', 'notif__avatar');
        img.src = notification.userAvatar;
        img.alt = notification.userName;
        imageContainer.appendChild(img);

        const textContainer = document.createElement('div');
        textContainer.setAttribute('class', 'notif__text-container');
        article.appendChild(textContainer);

        const notifText = document.createElement('p');
        notifText.setAttribute('class', 'notif__text');
        textContainer.appendChild(notifText);

        const userName = document.createElement('a');
        userName.href = '#';
        userName.setAttribute('class', 'notif__username');
        userName.textContent = notification.userName;
        notifText.appendChild(userName);

        const userAction = document.createElement('span');
        userAction.setAttribute('class', 'notif__useraction');
        userAction.textContent = notification.userAction;
        notifText.appendChild(userAction);

        if (notification.notifType === "joined" || notification.notifType === "left" ) {

            const notifTarget = document.createElement('a');
            notifTarget.setAttribute('class', 'notif__target');
            notifTarget.textContent = notification.notifTarget;
            notifTarget.classList.add('--group');
            notifText.appendChild(notifTarget);

        } else if (notification.notifType === "reaction") {

            const notifTarget = document.createElement('a');
            notifTarget.setAttribute('class', 'notif__target');
            notifTarget.textContent = notification.notifTarget;
            notifText.appendChild(notifTarget);

        }

        const date = document.createElement('time');
        date.setAttribute('class', 'notif__date');
        date.textContent = notification.notifDate;
        textContainer.appendChild(date);

        if (notification.notifType === "message") {

            const message = document.createElement('p');
            message.setAttribute('class', 'notif__p-message');
            message.textContent = notification.notifTarget;
            textContainer.appendChild(message);

        }

        if (notification.notifType === "comment") {

            const imageContainer2 = document.createElement('figure');
            imageContainer2.setAttribute('class', 'notif__image-container');
            article.appendChild(imageContainer2);
    
            const img2 = document.createElement('img');
            img2.setAttribute('class', 'notif__image');
            img2.src = notification.notifTarget;
            img2.alt = '';
            imageContainer2.appendChild(img2);
        }

        notifsContainer.appendChild(article);
    })

}