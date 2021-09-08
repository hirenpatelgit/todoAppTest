import Dashboard from '../controller/dashboard';
import AddTodo from '../controller/addTodo';

import { SCREEN_ADD_TODO, SCREEN_DASHBOARD } from './screenName';

const RouteList = [
    {
        title: 'Home',
        isShowHeader: false,
        component: Dashboard,
        name: SCREEN_DASHBOARD
    },
    {
        title: 'Add Todo',
        isShowHeader: true,
        component: AddTodo,
        name: SCREEN_ADD_TODO
    },
]

export {
    RouteList
}
