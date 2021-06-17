const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/',
            name: "home",
            component: Home,
        },
        {
            path: '/about',
            name: "about",
            component: About
        },
    ]
})

router.beforeEach((to, from, next) => {
    console.log(to)
    console.log(from)
    // ユーザー一覧ページへアクセスしたときに/topへリダイレクトされる例
    if (to.path === '/') {
        next('/top')
    } else {
        next()
    }
})