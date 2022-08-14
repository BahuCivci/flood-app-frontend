import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import App from "./App"
import store from "./app/store"
import "antd/dist/antd.min.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

// // import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//      <Router>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </Router>
//   </React.StrictMode>
// );

// // reportWebVitals();