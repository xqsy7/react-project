import {
    ShoppingCar,
    Classification,
    Register,
    Login,
    Mine,
    Home
} from "@pages";

export const layoutRoutes = [
    {
        key:"/home",
        path:"/home",
        name:"首页",
        component:Home,
        icon:"\ue60e",
        exact:true,
        meta:{
            requireAuth:false,
            flag:true,
        }
    },
    {
        key:"/classification",
        path:"/classification",
        name:"分类",
        component:Classification,
        icon:"\ue60d",
        exact:true,
        meta:{
            requireAuth:false,
            flag:true,
            headTop:true
        }
    },
    {
        key:"/shoppingCar",
        path:"/shoppingCar",
        name:"购物车",
        component:ShoppingCar,
        icon:"\ue6ab",
        exact:true,
        meta:{
            requireAuth:true,
            flag:true,
            headTop:false
        }
    },
    {
        key:"/mine",
        path:"/mine",
        name:"个人中心",
        component:Mine,
        icon:"\ue7ed",
        exact:true,
        meta:{
            requireAuth:true,
            flag:true,
            headTop:false,
        }
    },
    
    
    
]


export const noLayoutRoutes = [
    {
        key:"/login",
        path:"/login",
        component:Login,
        icon:"",
        exact:true,
        meta:{
            requireAuth:false,
            flag:false
        }
    },
    {
        key:"/register",
        path:"/register",
        component:Register,
        icon:"",
        exact:true,
        meta:{
            requireAuth:false,
            flag:false
        }
    }
]

export const baseConfigRoutes = layoutRoutes.concat(noLayoutRoutes);