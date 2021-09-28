import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
import {applyMiddleware, compose, createStore} from "redux"
import {rootReducer} from "./redux/reducers/root.reducer"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import {App} from "./App"

import "antd/dist/antd.css"
import "./css/main.scss"

const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"))
reportWebVitals()
