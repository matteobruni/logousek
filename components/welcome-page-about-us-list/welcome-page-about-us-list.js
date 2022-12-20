import React from 'react'
import WelcomePageAuthor from '../welcome-page-author/welcome-page-author'
import FadeIn from '../animations/fade-in'
import styles from './styles.module.css'
const AUTHORS_INFORMATION = [
  {
    key: 'DanKorčák',
    name: 'Dan Korčák',
    role: [{ name: 'Tvorba ilustrací', color: 'blue' }],
    aboutAuthor:
      'it est diam, sed volutpat arcu accumsan eu. Curabitur scelerisque, velit vitae viverra ultricies, augue metus sodales ipsum, vitae mollis turpis nisl a an'
  },
  {
    key: 'VeronikaPouchova',
    name: 'Veronika Pouchová',
    role: [{ name: 'Bussiness analytik', color: 'red' }],
    aboutAuthor:
      'Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec pulvinar, lacus eget porta rhoncus, est massa tempus elit, at tincidunt lectus lectus vel dui'
  },
  {
    key: 'PetrHolcak',
    name: 'Petr Holčák',
    role: [{ name: 'vývojář', color: 'green' }, { name: 'analytik', color: 'orange' }, { name: 'Návrh systému', color: 'black' }],
    aboutAuthor:
      'Onsequat pellentesque justo, ac bibendum nisi imperdiet vehicula. Ut malesuada scelerisque enim, nec bibendum lorem porta posuere. Aenean posuere hendrerit neque, id faucibus lacus tempus vehicula. Fusce quis fringilla elit, non fringilla'
  }
]

function WelcomePageAboutUsList () {
  return (
    <div className={styles.welcomePageAboutus}>
      {AUTHORS_INFORMATION.map((author, index) => (

        <FadeIn
        key={`welcome-page-author-${author.key}`}>
        <WelcomePageAuthor
          picture={author.picture}
          role={author.role}
          name={author.name}
          technicalName={author.key}
          aboutAuthor={author.aboutAuthor}
          even={Boolean(index % 2)}
        />
        </FadeIn>
      ))}
    </div>
  )
}

export default WelcomePageAboutUsList
