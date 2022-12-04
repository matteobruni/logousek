import React from "react";
import styles from "./styles.module.css";
import Label from "../label/label"

function WelcomePageAuthor({ name, picture, technicalName, role, aboutAuthor, even }) {
  return (
    <article className={[styles.welcomePageAuthorWrapper].join(" ")}>
      <div className={styles.pictureWrapper} >
      <div className={styles.picture} />
        </div>
      <div className={[styles.authorinfo].join(" ")}>
        <h4>{name}</h4>
        <div className={[styles.labelsWrapper].join(" ")}>{role.map((roleItem,index) => <Label key={`author-role-${technicalName}-${index}`} color={roleItem.color}>{roleItem.name}</Label>)}</div>
        <p>{aboutAuthor}</p>
      </div>
    </article>
  );
}

export default WelcomePageAuthor;
