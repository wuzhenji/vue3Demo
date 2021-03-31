import { createStore } from 'vuex'
import getters from './getters'
import user from './modules/user'

// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//     const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//     const value = modulesFiles(modulePath)
//     modules[moduleName] = value.default
//     return modules
//   }, {})

export default createStore({
    modules: {
        user
    },
    getters
})