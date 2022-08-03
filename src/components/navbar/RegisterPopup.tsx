import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import "./popup.scss";

interface Props {
  openPopup: boolean;
  openLogin: boolean;
  setOpenPopup: (openPopup: boolean) => void;
  setOpenLogin: (openLogin: boolean) => void;

}
function Popup(props: Props) {
  const { openPopup, setOpenPopup } = props;
  const { setOpenLogin } = props;

  const handleOnSubmit = (event: any) => {
    event.preventDefault().then(() => {
      props.setOpenPopup(true);
    });
  };

  return (
    <Dialog open={openPopup} maxWidth="xl">
      <div className="dialog-box">
        <button className="close-btn"
          onClick={() => {
            setOpenPopup(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h1>Rejestracja</h1>
        <p><span>Masz już konto? </span><span className="login-href" onClick={()=> {
          setOpenPopup(false);
          setOpenLogin(true)
        }}>Zaloguj się.</span> </p>
        <input placeholder="Imię*"></input>
        <input placeholder="Nazwisko*"></input>
        <input placeholder="Adres email*"></input>
        <input placeholder="Numer telefonu*"></input>
        <p>* pola wymagane.</p>
        <button className="register-btn"
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          Zarejestruj
        </button>
      </div>
    </Dialog>
  );
}

export default Popup;
