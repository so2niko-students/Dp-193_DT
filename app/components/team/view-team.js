export default class ViewTeam{
    dreamTeamList = document.querySelector('.dream-team');
    
    constructor(){

    }

    renderTeam(team){
        this.dreamTeamList.innerHTML = team.map(this.renderMember).join(' ');
    }

    renderMember({ picture, name }){
        return `<div class="card mb-3" style="max-width: 240px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${ picture.thumbnail }" class="card-img">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h6 class="card-title">${ name.first } ${ name.last }</h6>
            </div>
          </div>
        </div>
      </div>`;
    }
}