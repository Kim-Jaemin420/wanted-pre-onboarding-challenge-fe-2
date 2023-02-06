import { ReactNode, useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context';
import { Signin, Signup, Todos } from './pages';
import { PAGE_ROUTE } from './consts';

const RequiredAuth = ({
  children,
  hasToken,
  to = PAGE_ROUTE.SIGNIN,
}: {
  children: ReactNode;
  hasToken: boolean;
  to: ValueOf<typeof PAGE_ROUTE>;
}) => {
  if (!hasToken) {
    return <Navigate to={to} />;
  }
  return <>{children}</>;
};

function App() {
  const { token } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PAGE_ROUTE.HOME}
          element={
            <RequiredAuth hasToken={!!token} to={PAGE_ROUTE.SIGNIN}>
              <Todos />
            </RequiredAuth>
          }
        />
        <Route
          path={PAGE_ROUTE.SIGNIN}
          element={
            <RequiredAuth hasToken={!token} to={PAGE_ROUTE.HOME}>
              <Signin />
            </RequiredAuth>
          }
        />
        <Route
          path={PAGE_ROUTE.SIGNUP}
          element={
            <RequiredAuth hasToken={!token} to={PAGE_ROUTE.HOME}>
              <Signup />
            </RequiredAuth>
          }
        />
        <Route
          path={PAGE_ROUTE.TODOS}
          element={
            <RequiredAuth hasToken={!!token} to={PAGE_ROUTE.SIGNIN}>
              <Todos />
            </RequiredAuth>
          }
        />
        <Route
          path={PAGE_ROUTE.TODO}
          element={
            <RequiredAuth hasToken={!!token} to={PAGE_ROUTE.SIGNIN}>
              <Todos />
            </RequiredAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
