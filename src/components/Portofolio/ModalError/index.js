// == Import
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { numberImg, toggleModalError } from '../../../action/modalBox';
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import "./styles.css";

// == Import Img

// == Composant
function ModalError() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleError = useSelector((state) => state.modalBox.toggleModalError);
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
      dispatch(toggleModalError());
    }, 10000);
  }, []);

  return (
    <div className="modal-error">
      {toggleError ? (''
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
          <div className="modal-blur" />
          <div className="modal">
            <h1 className="modal-error_title">404</h1>
            <p>Oups</p>
            <Link to="/">
              <button
                className="modal_button"
                onClick={() => dispatch(toggleModalError())}
                type="button"
                >
                Retour à l'accueil
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

// == Export
export default ModalError;
