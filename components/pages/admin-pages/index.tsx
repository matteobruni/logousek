import React from 'react'
import Sidebar from '../../side-bar'
import * as S from "./styled"

function AdminPages() {
  return (
    <S.WelcomeRowWrapper>
      <Sidebar pageNav={[
        {
          name: 'introduction',
          icon: 'cake',
          title: 'Představení',
          onClick: () => { }
        }
      ]} applicationNav={[
        { name: 'introduction', icon: 'cake', title: 'Visual' }
      ]} />
      <S.Container>
        Admin pages
      </S.Container>
    </S.WelcomeRowWrapper>
  )
}

export default AdminPages
