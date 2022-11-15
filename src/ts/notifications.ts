import * as imgs from './images';

export interface CustomNotification {
    userName: string,
    userAvatar: string,
    userAction: string,
    notifTarget: string,
    notifDate: string,
    notifRead: boolean,
    notifType: string
}

const notifications: CustomNotification[] = [
    {
        userName: "Mark Webber",
        userAvatar: imgs.avatarMark,
        userAction: "reacted to your recent post",
        notifTarget: "My first tournament today!",
        notifDate: "1m ago",
        notifRead: false,
        notifType: "reaction"
    },
    {
        userName: "Angela Gray",
        userAvatar: imgs.avatarAngela,
        userAction: "followed you",
        notifTarget: "",
        notifDate: "5m ago",
        notifRead: false,
        notifType: "follow"
    },
    {
        userName: "Jacob Thompson",
        userAvatar: imgs.avatarJacob,
        userAction: "has joined your group",
        notifTarget: "Chess Club",
        notifDate: "1 day ago",
        notifRead: false,
        notifType: "joined"
    },
    {
        userName: "Rizky Hassanuddin",
        userAvatar: imgs.avatarRizky,
        userAction: "sent you a private message",
        notifTarget: "Hello, thnaks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
        notifDate: "5 days ago",
        notifRead: true,
        notifType: "message"
    },
    {
        userName: "Kimberly Smith",
        userAvatar: imgs.avatarKimberly,
        userAction: "commented on your picture",
        notifTarget: imgs.imgChess,
        notifDate: "1 week ago ago",
        notifRead: true,
        notifType: "comment"
    },
    {
        userName: "Nathan Peterson",
        userAvatar: imgs.avatarNathan,
        userAction: "reacted to your recent post",
        notifTarget: "5 end-game strategies to increase your win rate",
        notifDate: "2 weeks ago",
        notifRead: true,
        notifType: "reaction"
    },
    {
        userName: "Anna Kim",
        userAvatar: imgs.avatarAnna,
        userAction: "left the group",
        notifTarget: "Chess Club",
        notifDate: "2 weeks ago",
        notifRead: true,
        notifType: "left"
    }
]

export default notifications;