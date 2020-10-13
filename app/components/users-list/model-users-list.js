export default class ModelUsersList{
    link = 'https://randomuser.me/api/?results=1000';
    users = [];

    loadUsers(handleLoad){
        const lsUsers = localStorage.getItem('users');

        if(lsUsers){
            this.users = JSON.parse(lsUsers);
            handleLoad(this.users);
        }else{
            fetch(this.link)
            .then(req => req.json())
            .then(reqData => {
                this.users = reqData.results;
                
                localStorage.setItem('users', JSON.stringify(this.users));

                handleLoad(this.users);
            });
        }
        
    }

    getUser(uuid){
        return this.users.find(user => user.login.uuid == uuid);
    }
    
}