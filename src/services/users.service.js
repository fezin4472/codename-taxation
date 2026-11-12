import { SAVEONLOCALSTORAGE, SEARCHONLOCALSTORAGE } from "./localstorage.service"

export const saveUser = (user) => {
    const users = SEARCHONLOCALSTORAGE('users') || [];
    if(!user.id){
        user.id = Date.now();
        users.push(user);
    }else{
        const index = users.findIndex((u) => u.id === user.id);
        users[index] = user;
    }

    SAVEONLOCALSTORAGE("users", users);
};

export const searchUsers = () => {
    return SEARCHONLOCALSTORAGE("users") || [];
};