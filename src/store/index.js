const store = Vuex.createStore({
    // ステート
    state: () => {
        return {
            count: 0
        }
    },
    // ミューテーション
    mutations: () => {
        increment: (state, amount) => {
            state.count += amount
        }
    },
    // ゲッター
    getters: {

    },
    // アクション
    actions: {
        
    }
})