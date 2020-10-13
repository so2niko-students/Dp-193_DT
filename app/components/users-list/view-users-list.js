export default class ViewUsersList{
    usersList = document.querySelector('.users-list');

    constructor(handleAddToTeam){
        this.usersList.addEventListener('click', handleAddToTeam);
    }
    render(data){
        this.usersList.innerHTML = data.map(this.renderCard).join(' ');
    }

    renderCard({ picture, name, gender, nat, dob, login }){
        return `<div class="card" style="width: 18rem;">
        <img src="${ picture.large }" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${ name.first } ${ name.last }</h5>
          <p class="card-text">${ gender } ${ nat } ${ dob.age }</p>
          <a href="#" class="btn btn-primary" data-user-id="${ login.uuid }">Add to team</a>
        </div>
      </div>`;
    }
}