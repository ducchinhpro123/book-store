import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {publicRoutes} from "./Routes/Routes";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import {useState} from "react";
import {UserContext} from "./components/User/UserContext.jsx";


function App() {
  // store user to use global
  const [currentUser, setCurrentUser] = useState(null)

  return (
      <div>
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
          <Router basename={process.env.NODE_ENV === 'production' ? '/book-store' : '/'}>
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                          <DefaultLayout>
                            <Page/>
                          </DefaultLayout>
                        }
                    />
                );
              })}
            </Routes>
          </Router>
        </UserContext.Provider>

      </div>
  );
}

export default App;
