import { defineStore } from 'pinia'

const useUser = defineStore('user', {
    state: () => {
        return {
            isLoggedIn: false
        }
    }
})
export default useUser