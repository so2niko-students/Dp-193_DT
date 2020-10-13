import ModelTeam from "./model-team.js";
import ViewTeam from "./view-team.js";

export default class ControllerTeam{
    constructor({ subscribe, events }){
        this.view = new ViewTeam();
        this.model = new ModelTeam();

        subscribe(events.ADD_MEMBER, this.handleAddMember);

        this.showTeam();
    }

    handleAddMember = user => {
        this.model.addMember(user);

        this.showTeam();
    }

    showTeam(){
        const team = this.model.getTeam();

        this.view.renderTeam(team);
    }
}