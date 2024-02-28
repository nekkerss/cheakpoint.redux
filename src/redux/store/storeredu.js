import{ createStore}from'redux'


import rootredu from '../reducers/rootredu'


const store=createStore(
    rootredu,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


export default store