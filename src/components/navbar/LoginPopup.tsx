import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import "./popup.scss";

interface Props {
  openLogin: boolean;
  openPopup: boolean;
  setOpenPopup: (openPopup: boolean) => void;
  setOpenLogin: (openLogin: boolean) => void;
}
function LoginPopup(props: Props) {
  const { openLogin, setOpenLogin } = props;
  const { setOpenPopup } = props;

  const handleOnSubmit = (event: any) => {
    event.preventDefault().then(() => {
      props.setOpenLogin(true);
    });
  };

  return (
    <Dialog open={openLogin} maxWidth="xl">
      <div className="dialog-box login-box">
        <button className="close-btn"
          onClick={() => {
            setOpenLogin(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h1>Logowanie</h1>
        <p><span>Nie masz jeszcze konta? </span><span className="login-href" onClick={()=> {
          setOpenPopup(true);
          setOpenLogin(false)
        }}>Zarejestruj się.</span> </p>
       
        <input placeholder="Adres email*"></input>
        <input placeholder="Numer telefonu*"></input>
        <button className="register-btn login-btn"
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          Zaloguj
        </button>
      </div>
    </Dialog>
  );
}

export default LoginPopup;
