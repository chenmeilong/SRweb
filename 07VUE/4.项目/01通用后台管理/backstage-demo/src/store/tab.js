import Cookie from "js-cookie"
export default {
    state:{
        isCollapse:false,  //用于控制菜单展开与收起
        tabsList:[
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            },
        ],  //面包屑
        menu:[]
    },
    mutations:{
        //修改菜单展开收起的方法
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        //更新面包屑数据
        selectMenu(state,val){
            if(val.name !== 'home'){
                //如果不存在则添加到面包屑
               if(state.tabsList.findIndex(item=>item.name ===val.name)===-1){
                state.tabsList.push(val)
               }
            }
        },
        //删除面包屑的中指定的数据
        closeTag(state,item){
            const index = state.tabsList.findIndex(obj=>obj.name === item.name)
            state.tabsList.splice(index,1)
        },
        //  设置menu数据
        setMenu(state,val){
            state.menu = val
            Cookie.set('menu',JSON.stringify(val))
        },
        //动态注册路由  不添加这个会出现 xiaoxiao账户能访问到admin的user页面
        addMenu(state,router){    //参数router 其实就是 this.$router 需要修改的routers  需要最后去覆盖他
            if(!Cookie.get('menu')) return
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            //组装动态路由的数据
            const menuArray = []
            menu.forEach(item => {
                if(item.children){
                    item.children = item.children.map(item => {
                        item.component = ()=> import(`@/views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)  //将子菜单放在这里面  为什么要这样？
                }else{
                    item.component = ()=> import(`@/views/${item.url}`)
                    menuArray.push(item)  
                }
            })
            console.log('menuArray:',menuArray)
            //路由的动态添加

            //需要先删除动态路由部分，重新添加
            console.log('删除前:',router.getRoutes())
            // router.removeRoute('home')   //解决什么问题？ 解决删除原路由，载赋值新路由，解决权限问题的bug，但是这样写有问题？？
            //目前不刷新网页有权限bug这里是解决的地方，但是没找到解决的api
            console.log('删除后:',router.getRoutes())

            menuArray.forEach(item=>{
                router.addRoute('Main',item)    //addRoute动态添加路由查看API文档 这里相当于 给 routes中name为Main中的路由中的children添加路由
            })
            console.log('router.getRoutes:',router.getRoutes()) 
        }
        
    }
}