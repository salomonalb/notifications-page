import * as imgs from './images';

interface CustomNotification {
    userName: string,
    userAvatar: string,
    userAction: string,
    notifContent: string,
    notifDate: string,
    notifRead: boolean
}

const notifications: CustomNotification[] = [
    {
        userName: "Mark Webber",
        userAvatar: imgs.avatarMark,
        userAction: "reacted to your recent post",
        notifContent: "My first tournament today!",
        notifDate: "1m ago",
        notifRead: false
    },
    {
        userName: "Angela Gray",
        userAvatar: imgs.avatarAngela,
        userAction: "followed you",
        notifContent: "",
        notifDate: "5m ago",
        notifRead: false,
    },
    {
        userName: "Jacob Thompson",
        userAvatar: imgs.avatarJacob,
        userAction: "has joined your group",
        notifContent: "Chess Club",
        notifDate: "1 day ago",
        notifRead: false,
    },
    {
        userName: "Rizky Hassanuddin",
        userAvatar: imgs.avatarRizky,
        userAction: "sent you a private message",
        notifContent: "Hello, thnaks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
        notifDate: "5 days ago",
        notifRead: true,
    },
    {
        userName: "Kimberly Smith",
        userAvatar: imgs.avatarKimberly,
        userAction: "commented on your picture",
        notifContent: imgs.imgChess,
        notifDate: "1 week ago ago",
        notifRead: true,
    },
    {
        userName: "Nathan Peterson",
        userAvatar: imgs.avatarNathan,
        userAction: "reacted to your recent post",
        notifContent: "5 end-game strategies to increase your win rate",
        notifDate: "2 weeks ago",
        notifRead: true,
    },
    {
        userName: "Anna Kim",
        userAvatar: imgs.avatarAnna,
        userAction: "left the group",
        notifContent: "Chess Club",
        notifDate: "2 weeks ago",
        notifRead: true,
    }
]

export default notifications;