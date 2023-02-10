import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import GlobalStyles from "./styles/global";
import { UserStorage } from "./UserContext";
import { User } from "./components/user/User";
import { ProtectedRoute } from "./components/helper/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="/conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
