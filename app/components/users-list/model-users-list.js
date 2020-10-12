export default class ModelUsersList{
    link = 'https://randomuser.me/api/?results=1000';
    users = [];

    loadUsers(handleLoad){
        fetch(this.link)
            .then(req => req.json())
            .then(reqData => {
                this.users = reqData.results;
                handleLoad(this.users);
            });
    }
    
}