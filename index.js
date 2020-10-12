// const data = {
//     users : []
// };//!MODEL

//Загружаю пользователей
// function loadUsers(){//!MODEL
//     fetch('https://randomuser.me/api/?results=1000')
//         .then(req => req.json())
//         .then(reqData => {
//             console.log(reqData);
//             data.users = reqData.results;
//             renderUsers(reqData.results);
//         });
}
//рендерю загруженых пользователей на экран
//!VIEW
// function renderUsers(data){//array of objects 
//     const usersList = document.querySelector('.users-list');

//     usersList.innerHTML = data.map(({ picture, name, gender, nat, dob, login }) => `<div class="card" style="width: 18rem;">
//     <img src="${ picture.large }" class="card-img-top">
//     <div class="card-body">
//       <h5 class="card-title">${ name.first } ${ name.last }</h5>
//       <p class="card-text">${ gender } ${ nat } ${ dob.age }</p>
//       <a href="#" class="btn btn-primary" data-user-id="${ login.uuid }">Add to team</a>
//     </div>
//   </div>`).join(' ');
// }

//Фильтрую пользователей
//!MODEL
// const filterParams = {
//     all         : _ => true,
//     young       : age => age >= 18 && age <= 44,
//     average     : age => age >= 45 && age <= 59,
//     senile      : age => age >= 60 && age <= 74,
//     older       : age => age >= 75 && age < 90,
//     longevity   : age => age >= 90
// };

// //!MODEL
// function filterUsers(){
//     //!VIEW
//     // const filterAge = document.querySelector('.btns-filter-age');
//     // const filterCount = document.querySelector('.filter-count');

//     filterAge.addEventListener('click', ev => {
//         console.log(ev);    
//         const filterBy = ev.target.dataset.age;
//         console.log(filterBy);

//         //!MODEL
//         const filteredArr = data.users.filter(user => filterParams[filterBy](user.dob.age));
//         //!VIEW
//         filterCount.innerText = filteredArr.length;
        
//         renderUsers(filteredArr);
//     });
// }

//Сортирую пользователей

//Добавить пользователя в команду
function addUser(){
    //!VIEW
    const usersList = document.querySelector('.users-list');
    const dreamTeamList = document.querySelector('.dream-team');

    //!VIEW
    usersList.addEventListener('click', ev => {
        const uuid = ev.target.dataset.userId;
        console.log(uuid);
        if(uuid){
            //!MODEL
            const { picture, name } = data.users.find(user => user.login.uuid == uuid);
            //!VIEW
            dreamTeamList.innerHTML += `<div class="card mb-3" style="max-width: 240px;">
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
    });
}



//!CONTROLLER
loadUsers();//init load and render
filterUsers();//init filter
addUser();