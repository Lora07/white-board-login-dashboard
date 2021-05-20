
import '../../App.css';
// import React from "react";
import AppBar from '../AppBar';
import Wes from '../wes'
import Books from '../Books'
import bookData from "../../API BOOK";

import SignInOutContainer from "../Login&Register/index";
import React, { Fragment, useState, useEffect } from "react";
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Login from "../login/index";
import Register from "../register/index";
import Dashboard from "../Dashboard/index";
import Admin from "../admin/index";
import Lecturer from "../admin/lecturer";
import librarian from "../admin/libarian";
import unit from "../admin/unit";
import Student from "../admin/student";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
toast.configure();

//book dashboard
// function App() {
//         const bookComponent = bookData.map(
//         item => {
//             return (
//
//                 <Books key={item.id}
//                        name={item.name}
//                        imgUrl={item.imgUrl}
//                        title ={item.title}
//                        author = {item.author}
//                        price = {item.Price}
//                        quantity = {item.Quantity}
//
//                 />
//             )
//         })
//   return (
//
//     <div className="App">
//         <div>
//             <AppBar/>
//         </div>
//         <div>
//             <Books/>
//             {/*{bookComponent}*/}
//         </div>
//         {/*<AppBar/>*/}
//         {/*<Wes/>*/}
//     </div>
//
//   );
// }


function App() {
    const [isAuthenticated, setIsAutenticated] = useState(true);
    const setAuth = (boolean) => {
        setIsAutenticated(boolean);
    }

    async function isAuth(){
        try{
            const  response = await fetch(
                "http://localhost:3001/is-verify",
                {
                    method : "GET",
                    headers : {token: localStorage.token}
                }
            )
            const parseRes = await response.json();
            console.log(parseRes);
            parseRes === true ? setIsAutenticated(true) : setIsAutenticated(false)
        }catch (e) {
            console.log(e)

        }
    }

    useEffect(()=>{
        isAuth()
    })
  return (
      <Fragment>
          <Router>
              <div>
                  <Switch>
                      <Route exact path="/" render={props =>
                          !isAuthenticated ?
                              (<SignInOutContainer {...props} setAuth={setAuth}/>) : (<Redirect to="/dashboard"/>)
                      }/>
                      <Route exact path="/login" render={props =>
                          !isAuthenticated ?
                              (<Login {...props} setAuth={setAuth}/>) : (<Redirect to="/dashboard"/>)
                      }/>
                      <Route exact path="/register" render={props =>
                          !isAuthenticated ?
                              (<Register {...props} setAuth={setAuth}/>) : (<Redirect to="/login"/>)
                      }/>
                      <Route exact path="/dashboard" render={props =>
                          isAuthenticated ?
                              (<Dashboard {...props} setAuth={setAuth}/>) : (<Redirect to="/"/>)
                      }/>
                      <Route exact path="/admin" render={props =>
                          isAuthenticated ?
                              (<Admin {...props} setAuth={setAuth}/>) : (<Redirect to="/"/>)
                      }/>
                      <Route exact path="/lecturer" render={props =>
                          isAuthenticated ?
                              (<Lecturer {...props} setAuth={setAuth}/>) : (<Redirect to="/"/>)
                      }/>
                      <Route exact path="/student" render={props =>
                          isAuthenticated ?
                              (<Student {...props} setAuth={setAuth}/>) : (<Redirect to="/"/>)
                      }/>
                      <Route exact path="/librarian" render={props =>
                          isAuthenticated ?
                              (<librarian {...props} setAuth={setAuth}/>) : (<Redirect to="/"/>)
                      }/>
                      <Route exact path="/unit" render={props =>
                          isAuthenticated ?
                              (<unit {...props} setAuth={setAuth}/>) : (<Redirect to="/"/>)
                      }/>

                  </Switch>
              </div>
          </Router>
      </Fragment>

  );
}

// export default App;

export default App;
