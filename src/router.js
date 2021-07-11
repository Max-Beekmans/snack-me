import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home';
import Prices from '@/components/Prices';
import Contact from '@/components/Contact';
import Login from '@/components/Login';
import Dashboard from '@/components/Dashboard';
import AddItem from '@/components/AddItem';

Vue.use(VueRouter);

export default function(store) {
    let guard = function (to, from, next) {
        if (store.getters.signedUser)
            next();
        next({ path: '/' });
    }

    return new VueRouter({
        mode: "history",
        base: __dirname,
        routes: [
            { path: '/', component: Home },
            { path: '/prices', component: Prices},
            { path: '/contact', component: Contact},
            { path: '/login', component: Login},
            {
                path: '/dashboard',
                component: Dashboard,
                beforeEnter: guard
            },
            {
                path: '/addItem',
                component: AddItem,
                beforeEnter: guard
            }
        ]
    });
}