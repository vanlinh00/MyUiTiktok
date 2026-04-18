

import config from '../config';
import Home from '../pages/Home';
import UserInfo from '../pages/UserInfo'; // 1. Import your new page component
const publicRoutes = [
 { path: config.routes.home, component: Home },
 { path: config.routes.userInfo, component: UserInfo }, // Add it to the array

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
