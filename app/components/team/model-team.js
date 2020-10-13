export default class ModelTeam{
    team = [];

    constructor(){
        const lsTeam = localStorage.getItem('team');

        if(lsTeam){
            this.team = JSON.parse(lsTeam);
        }
    }

    addMember(user){
        this.team.push(user);

        localStorage.setItem('team', JSON.stringify(this.team));
    }

    getTeam(){
        return this.team;
    }
}