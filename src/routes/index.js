//layouts
import { HeaderOnly } from "~/components/Layout";

//pages
import Home from "~/page/Home";
import Following from "~/page/Following";
import Profile from "~/page/Profile";
import Upload from "~/page/Upload";
import Search from "~/page/Search";

//không cần đăng nhập vẫn vào được
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/Following', component: Following},
    { path: '/:nickname', component: Profile},
    { path: '/upload', component: Upload, layout: HeaderOnly},
    { path: '/search', component: Search, layout: null},
];

//cần đăng nhập để vào
const privateRouters = [

];

export { publicRoutes, privateRouters };