import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {publicRoutes} from "./Routes/Routes";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import {useState} from "react";
import {UserContext} from "./components/User/UserContext.jsx";


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  return (
      <div>
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
          <Router>
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
