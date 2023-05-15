import React from 'react'
import Label from '@components/label'
import { P6 } from '@components/typography/paragraph'
import * as S from './styled'

interface RoleItem {
  color: string
  name: string
}

interface AuthorType {
  name: string
  picture: any
  technicalName: string
  role: RoleItem[]
  minimized: boolean
  aboutAuthor: string
}

const Author: React.FC<AuthorType> = ({
  name,
  technicalName,
  role,
  aboutAuthor,
  minimized,
  picture
}) => {
  return (
    <S.AuthorWrapper minimized={minimized}>
      <S.AuthorContainer>
        <S.PictureWrapper>
          <S.Picture src={picture} />
        </S.PictureWrapper>
        <S.Authorinfo>
          <h4>{name}</h4>
          <S.LabelsWrapper>
            {role.map((roleItem, index) => (
              <Label
                key={`author-role-${technicalName}-${index}`}
                color={roleItem.color}
              >
                {roleItem.name}
              </Label>
            ))}
          </S.LabelsWrapper>
          <P6>{aboutAuthor}</P6>
        </S.Authorinfo>
      </S.AuthorContainer>
    </S.AuthorWrapper>
  )
}

export default Author
