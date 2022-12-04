import React, { useState, useContext } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import styled from "styled-components";
import img from "./../../public/images/02.svg";
import ModalContext from "../../contexts/modal-context";
import ItemList from "../item-list";

function GameMenuCard({ gameInfo }) {
  const [isDiffSiteShown, setIsDiffSiteShown] = useState(false);
  const router = useRouter();
  const modalContext = useContext(ModalContext);

  const redirectToActivity = (difficultyId) => {
    const addictionQuery = difficultyId ? {difficulty: difficultyId} : {}
    modalContext.closeModal()
    router.push({
      pathname: "/activity",
      query: { activityName: gameInfo.name, ...addictionQuery },
    });
  };

  const showDiffSide = (e) => {
    e.stopPropagation();
    if (!isDiffSiteShown) {
      setIsDiffSiteShown(true);
    }
  };

  const showMainSide = (e) => {
    e.stopPropagation();
    setIsDiffSiteShown(false);
  };

  const showDifficultyModal = () => {
    Array.isArray(gameInfo.difficulty) && gameInfo.difficulty.length
      ? modalContext.showModal({
          content: <ItemList items={gameInfo.difficulty} onItemClick={redirectToActivity}/>,
          header: "Vyberte obtížnost",
        })
      : redirectToActivity();
  };

  return (
    <CardWrapper>
      <InnedCard className="innerCard" isDiffSiteShown={isDiffSiteShown}>
        <MainSide onClick={showDifficultyModal}>
          <a className={styles.informIcon} onClick={showDiffSide}>
            <i className={`${styles.nav_icon} material-icons`}>inform</i>
          </a>
          <Image
            className={`rounded-md`}
            width={300}
            height={300}
            layout="responsive"
            src={img}
            alt="img"
          />
          <p className={styles.description}>{gameInfo.title}</p>
        </MainSide>
        <DifficultySide>
          <Navbar>
            <a className={styles.informIcon} onClick={showMainSide}>
              <i className={`${styles.nav_icon} material-icons`}>reply</i>
            </a>
          </Navbar>
          <p className={styles.description}>{gameInfo.title}</p>
          <p>
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </DifficultySide>
      </InnedCard>
    </CardWrapper>
  );
}

export default GameMenuCard;

const CardWrapper = styled.article`
  background-color: transparent;
  width: 12rem;
  height: 15rem;
  perspective: 1000px;
  margin: 1.5rem;

  @media only screen and (max-width: 1280px) {
    margin: 0.7rem;
  }

  @media only screen and (max-width: 720px) {
    margin: 0.7rem;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;

const InnedCard = styled.div`
  position: relative;
  width: 100%;
  height: 15rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ isDiffSiteShown }) =>
    isDiffSiteShown ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const MainSide = styled.div`
  cursor: pointer;
  display: flex;
  height: 100%;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.2);
  flex-direction: column;
  position: absolute;
  border-radius: 1rem;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #fff;
  color: black;

  img {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`;

const DifficultySide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.2);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #fff;
  color: white;
  transform: rotateY(180deg);
`;

const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
