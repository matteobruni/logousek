import React, { useContext } from "react";
import Button from "../../button";
import RouteWrapper from "../../../helpers/route-wrapper";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { setNewUser } from "../../../helpers/local-storage-helper";
import ModalContext from "../../../contexts/modal-context";
import LoginModal from "../../login-modal";
import { ThemeContext } from "styled-components";
import Link from "next/link";

const LoginScreen = () => {
  const router = useRouter();
  const modalContext = useContext(ModalContext);
  const themeContext = useContext(ThemeContext);

  const redirectToMenu = (userName) => {
    setNewUser(userName);
    modalContext.closeModal();
    router.push("/game-menu");
  };

  const _loginAsGuess = () => {
    modalContext.showModal({
      content: <LoginModal onFormFilledHandler={redirectToMenu} />,
      header: "Vytváření nového uživatele",
    });
  };

  return (
    <RouteWrapper colorScheme={themeContext?.colors.primary}>
      <div className={styles.loginWrapper}>
        <main className={styles.loginButtonsWrapper}>
          <Button disabled>Přihlásit Facebookem</Button>
          <Button disabled>Přihlásit Google účtem</Button>
          <Button onClick={_loginAsGuess}>Přihlásit Host</Button>
        </main>
        <footer className={styles.footer}>
          <span>Jetště nemáte účet?</span>
          <span>
            <Link href="/register">Registrovat se</Link>
          </span>
        </footer>
      </div>
    </RouteWrapper>
  );
};

export default LoginScreen;
