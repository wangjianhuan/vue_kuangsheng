//导入vue
import Vue from 'vue';
import Router from 'vue-router';
//导入组件
import Main from "../views/Main";
import Login from "../views/Login";
import List from "../views/user/List"
import Profile from "../views/user/Profile"
//使用
Vue.use(Router);
//导出
export default new Router({
    routes: [
        {
            //登录页
            path: '/main',
            component: Main,
            children:[
                {
                    path: '/user/profile',
                    component: Profile
                },
                {
                    path: '/user/list',
                    component: List
                }
            ]
        },
        //首页
        {
            path: '/login',
            component: Login
        }
    ]

})
