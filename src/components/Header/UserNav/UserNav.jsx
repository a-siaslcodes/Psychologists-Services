import css from "./UserNav.module.css";
import { useSelector } from "react-redux";
import { SelectUserName } from "../../../redux/auth/selectors";
import icons from "../../../assets/icons/icons.svg";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../../redux/auth/operations";

function UserNav() {
  const userName = useSelector(SelectUserName);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <div className={css.userNav}>
      <span className={css.iconBox}>
        <svg className={css.icon} width={24} height={24}>
          <use href={`${icons}#icon-user`}></use>
        </svg>
      </span>
      <p className={css.userName}> {userName}</p>
      <button className={css.logOutBtn} onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
}

export default UserNav;
