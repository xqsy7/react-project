import {
    ShoppingCar,
    Classification,
    Register,
    Login,
    Mine,
    Home,
    Search
} from "@pages";

export const layoutRoutes = [
 
//     const proxy = require('http-proxy-middleware')

// module.exports = function(app) {
  // /api 表示代理 路径
  // target 表示目标服务器的地址
//   app.use(
//     proxy('/api', {
// ps://shopapi.smartisan.com',
//       // 跨域时一般都设置      target: 'htt该值 为 true
//       changeOrigin: true,
//       // 重写接口路由
//       pathRewrite: {
//         '^/api': '/mobile' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
//       }
//     })
//   )

    {
        key:"/home",
        path:"/home",
        name:"首页",
        component:Home,
        icon:"\ue60e",
        exact:true,
        meta:{
            requireAuth:false,
            flag:true
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
            flag:true
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
            flag:true
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
            flag:true
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
    },
      {
        key: "/search",
        path: "/search",
        name: "搜索",
        component: Search,
        exact: true,
        meta: {
            requireAuth: false,
            flag:false,
        }
    }
]

export const baseConfigRoutes = layoutRoutes.concat(noLayoutRoutes);