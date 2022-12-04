import React, {useContext} from "react";
import Button from "../../button";
import RouteWrapper from "../../../helpers/route-wrapper";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { setNewUser } from "../../../helpers/local-storage-helper";
import ModalContext from "../../../contexts/modal-context";
import LoginModal from "../../login-modal";
import { ThemeContext } from "styled-components";



const LoginScreen = () => {
  const router = useRouter();
  const modalContext = useContext(ModalContext);
  const themeContext = useContext(ThemeContext);
  
  
  const redirectToMenu = (userName) => {
    setNewUser(userName);
    modalContext.closeModal();
    router.push('/game-menu');
  }

  const _loginAsGuess = () => {
    modalContext.showModal({
      content:  (<LoginModal onFormFilledHandler={redirectToMenu} />),
      header: "Vytváření nového uživatele",
    })
  }

  return (
    // <motion.div  animate={{ opacity: 1, y: 0 }}  initial={{ opacity: 0, y: 100}} transition={{duration: 0.8}}>
    <RouteWrapper colorScheme={themeContext?.colors.primary}>
      <section className={styles.sectionWrapper} >
        <Button disabled>Přihlásit Facebookem</Button>
        <Button disabled>Přihlásit Google účtem</Button>
        <Button onClick={_loginAsGuess}>Přihlásit Host</Button>
      </section>
    </RouteWrapper>
    // </motion.div>
  );
};

export default LoginScreen;
