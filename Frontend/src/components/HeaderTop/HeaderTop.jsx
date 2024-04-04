
import "./HeaderTop.css";
import { useNavigate, Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { logoutAPI } from "../../redux/auth/login/actionsLogin";

export const Headertop = () => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("username"));
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAPI());
    navigate("/");
    // console.log("first")
  };
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/CQTJNYW/logo.png" alt="logo" border="0"></a>

  return (
    <div>
      <div className="headcaring">
        <img
          src="https://i.ibb.co/CQTJNYW/logo.png"
          alt=""
          onClick={()=>navigate("/myHome")}
        />
        <div className="lscaring">
          {data ? (
            <h4 className="headloging">Hi, {data}</h4>
          ) : (
            <h4>Hi there!</h4>
          )}
          <h5>Help</h5>|<h5>Settings</h5>|
          <h5
            onClick={() => {
              localStorage.removeItem("");
              handleLogout()
            }}
          >
            Log Out
          </h5>
          |<h6>Follow Us: </h6>
          <Link target="_blank" href="https://www.facebook.com/myfitnesspal">
            <h2 style={{ color: "blue" }}>
              <FaFacebook />
            </h2>
          </Link>
          <Link target="_blank" href="https://twitter.com/myfitnesspal">
            <h2 style={{ color: "blue" }}>
              <BsTwitter />
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Headertop;
