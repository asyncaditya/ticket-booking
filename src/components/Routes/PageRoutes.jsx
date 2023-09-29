import { Routes, Route } from "react-router";
import routes from "./routes.json";
import Home from "../Home/Home";
import UserSignup from "../Signup/UserSignup";
import OwnerSignup from "../Signup/OwnerSignup";
import UserLogin from "../Login/UserLogin";
import OwnerLogin from "../Login/OwnerLogin";
import SignupLayout from "../Layouts/SignupLayout";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Food from "../Pages/Food/Food";
import Play from "../Pages/Play/Play";
import Movies from "../Pages/Movies/Movies";
import OwnerMovies from "../Movies/OwnerMovies/OwnerMovies";
import UserMovies from "../Movies/UserMovies/UserMovies";
import Seats from "../Seats/Seats";
import Payments from "../Payments/Payments";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.CONTACTUS} element={<ContactUs />} />
        <Route path={routes.FOOD} element={<Food />} />
      </Routes>
    </>
  );
};
export default PageRoutes;
