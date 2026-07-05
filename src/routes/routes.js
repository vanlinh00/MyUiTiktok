

import config from '../config';
import Home from '../pages/Home';
import Live from '../pages/Live';
import UserInfo from '../pages/Profile'; // 1. Import your new page component
const publicRoutes = [
 { path: config.routes.home, component: Home },
 { path: config.routes.userInfo, component: UserInfo }, // Add it to the array
    { path: config.routes.live, component: Live },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
