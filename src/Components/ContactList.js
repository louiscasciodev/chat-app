import React from "react";
import Contact from "./Contact";
// An array of objects
const users = [
    {
        name: "Levi Watson",
        avatar: "https://randomuser.me/api/portraits/men/63.jpg",
        online: "true"
    },
    {
        name: "Martha Henderson",
        avatar: "https://randomuser.me/api/portraits/women/91.jpg",
        online: "true"
    }, {
        name: "Ramona Silva",
        avatar: "https://randomuser.me/api/portraits/women/70.jpg",
        online: "true"
    }, {
        name: "Fred Perry",
        avatar: "https://randomuser.me/api/portraits/men/58.jpg",
        online: "true"
    }, {
        name: "Joel Mccoy",
        avatar: "https://randomuser.me/api/portraits/men/72.jpg",
        online: "false"
    }, {
        name: "Oscar Wood",
        avatar: "https://randomuser.me/api/portraits/men/79.jpg",
        online: "false"
    },
];

const ContactList = () => (
    <div>
        {users.map(user => {
        return (<Contact name={user.name} avatar={user.avatar} online={user.online} />)
        })}
    </div>

);

export default ContactList;