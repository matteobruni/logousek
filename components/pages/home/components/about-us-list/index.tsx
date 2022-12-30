import React from 'react'
import Authors from '../authors'
import FadeIn from '@components/animations/fade-in'
import AUTHORS_CONF from 'constants/authors-conf'
import * as S from "./styled"

const AboutUsList: React.FC = () => {
  return (
    <S.WelcomePageAboutus>
      {AUTHORS_CONF.map((author) => (
        <FadeIn
          key={`welcome-page-author-${author.key}`}>
          <Authors
            picture={undefined}
            role={author.role}
            name={author.name}
            technicalName={author.key}
            aboutAuthor={author.aboutAuthor}
          />
        </FadeIn>
      ))}
    </S.WelcomePageAboutus>
  )
}

export default AboutUsList
