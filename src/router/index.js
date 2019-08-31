import {
    Home,
    Classify,
    Mine,
    Shaop,
    Loagin
} from '@pages';
export const Havetabber = [
    {
        path: '/home',
        component: Home,
        name:'首页',
        meta: {
            hewrdehave:true,
            tabberFlag: true
        },
        icon:'../../assets/images/cookbook.png',
        selecticon:'../../assets/images/location-active.png',
    },
    {
        path: '/classify',
        component: Classify,
        name:'分类',
        meta: {
            hewrdehave:true,
            tabberFlag: true
        },
        icon:'../../assets/images/menu.png',
        selecticon:'../../assets/images/more-active.png',
    },
    {
        path: '/mine',
        component: Mine,
        name:'我的',
        meta: {
            tabberFlag: true,
            AuthorRouter:true,
            hewrdehave:true
        },
        icon:'../../assets/images/location.png',
        selecticon:'../../assets/images/location-active.png',
    },
    {
        path: '/shop',
        component: Shaop,
        name:'购物车',
        meta: {
            tabberFlag: false,
            AuthorRouter:true,
            hewrdehave:true
        },
        icon:'../../assets/images/more.png',
        selecticon:'../../assets/images/more-active.png',
    }
    
];

export const Dottabber = [
    {
        path: '/login',
        component: Loagin,
        name:'登录',
        meta: {
            tabberFlag: false,
            hewrdehave:false 
        }
        
    },

]

export const routerConfig = Havetabber.concat(Dottabber)