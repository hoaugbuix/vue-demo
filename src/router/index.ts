import { createRouter, createWebHistory } from 'vue-router';
import Home from "../page/Home.vue"
import Dashboard from "../page/Dashboard.vue"
import NewDashboard from "../page/Dashboard/new.vue"
import listUser from "../page/Dashboard/listUser.vue"
const routes = [
    { path: '/', component: Home },
    {
        path: '/dashboard', component: Dashboard, children: [
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'new',
                component: NewDashboard,
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: '',
                index: true,
                component: listUser,
            },
        ],
    },
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
export default router