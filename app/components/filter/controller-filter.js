import ModelFilter from "./model-filter.js";
import ViewFilter from "./view-filter.js";

export default class ControllerFilter{
    constructor({ subscribe, events, notify }){
        this.model = new ModelFilter();
        this.view = new ViewFilter(this.handleFilterClick);
       
        this.events = events;
        this.notify = notify;

        subscribe(events.LOAD_USERS, this.handleLoadUsers);
        console.log('contoller filter is subscribed');
    }

    handleFilterClick = ev => {
        const filterBy = ev.target.dataset.age;

        const filteredArr = this.model.filter(filterBy);
        console.log(filteredArr);

        this.notify(this.events.FILTER_AGE, filteredArr);

        this.view.renderCount(filteredArr.length);
    }

    handleLoadUsers = users => {
        this.model.data = users;
    }

}