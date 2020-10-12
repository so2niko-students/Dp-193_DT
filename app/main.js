import ControllerFilter from './components/filter/controller-filter.js';
import ControllerUsersList from './components/users-list/controller-users-list.js';
import Publisher from './helper/publisher.js';


const publisher = new Publisher();
const usersList = new ControllerUsersList(publisher.methods);
const filter = new ControllerFilter(publisher.methods);