import ControllerFilter from './components/filter/controller-filter.js';
import ControllerTeam from './components/team/controller-team.js';
import ControllerUsersList from './components/users-list/controller-users-list.js';
import Publisher from './helper/publisher.js';


const publisher = new Publisher();
const filter = new ControllerFilter(publisher.methods);
const team = new ControllerTeam(publisher.methods);

const usersList = new ControllerUsersList(publisher.methods);