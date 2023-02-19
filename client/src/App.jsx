import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import appRoutes from './appRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import client from "./api";
import { setUser } from './store/userSlice';

/*

const login = async (user: LoginUser) => {
  const response = await client.post<any>("/auth/login", user);
  const { data } = response;

  Token.Set(data.token);
  console.log(response.data);

  return response.data;
};

const auth = async () => {
  const token = Token.Get();
  const response = await client.get<any>("auth/auth", {
    headers: { Authorization: token },
  });

  const { data } = response;
  Token.Set(data.token);

  return response.data;
};
*/


function App() {
    const user = useSelector(state => state.appUser.user);
    const dispatch = useDispatch();

    const authUser = () => {
        const token = localStorage.getItem("TOKEN");
        if (token) {
            client.get("auth/auth", {
                headers: { Authorization: `Bearer ${token}` },
            }).then(res => {
                console.log(res.data);
                localStorage.setItem("TOKEN", res.data.token);
                dispatch(setUser(res.data.user))
            }).catch(e => {
                console.log(e);
            })

        }
    }

    useEffect(() => {
        authUser();
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {user ?
                        <>
                            <Route path={appRoutes.home.path} element={appRoutes.home.element} />
                        </>
                        :
                        <>
                            <Route path={appRoutes.login.path} index element={appRoutes.login.element} />
                            <Route path={appRoutes.registration.path} element={appRoutes.registration.element} />
                        </>
                    }

                    <Route path={appRoutes.noPage.path} element={appRoutes.noPage.element} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
