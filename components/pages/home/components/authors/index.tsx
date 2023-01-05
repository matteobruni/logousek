import React from 'react'
import Label from '@components/label'
import * as S from "./styled"

interface RoleItem { color: string, name: string }

interface AuthorsType { name: string, picture: any, technicalName: string, role: RoleItem[], aboutAuthor: string }

const Authors: React.FC<AuthorsType> = ({ name, technicalName, role, aboutAuthor }) => {
  return (
    <S.AuthorWrapper>
      <S.AuthorContainer>
        <S.PictureWrapper>
          <S.Picture />
        </S.PictureWrapper>
        <S.Authorinfo>
          <h4>{name}</h4>
          <S.LabelsWrapper>{role.map((roleItem, index) => <Label key={`author-role-${technicalName}-${index}`} color={roleItem.color}>{roleItem.name}</Label>)}</S.LabelsWrapper>
          <p>{aboutAuthor}</p>
        </S.Authorinfo>
      </S.AuthorContainer>
    </S.AuthorWrapper>
  )
}

export default Authors
