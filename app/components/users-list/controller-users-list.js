import ModelUsersList from "./model-users-list.js";
import ViewUsersList from "./view-users-list.js";

export default class ControllerUsersList{
    constructor({ notify, events, subscribe }){
        this.model = new ModelUsersList();
        this.view = new ViewUsersList(this.handleAddToTeam);

        this.notify = notify;
        this.events = events;

        this.model.loadUsers(this.handleLoadUsers);

        subscribe(events.FILTER_AGE, this.handleFilter);
    }

    handleLoadUsers = users => {
        this.notify(this.events.LOAD_USERS, users);
        console.log('contoller userslist is notified');
        this.view.render(users);
    }

    handleFilter = users => {
        this.view.render(users);
    }

    handleAddToTeam = ev => {
        const uuid = ev.target.dataset.userId;
        console.log(uuid);
        if(uuid){
            const user = this.model.getUser(uuid);

            this.notify(this.events.ADD_MEMBER, user);
        }
    }
}