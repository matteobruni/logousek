import React from 'react'
import Sidebar from '../../side-bar'
import * as S from "./styled"
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts'
import UserSearch from './user-search'
import { Col, Row } from 'antd';

function AdminPages({ data }: { data: any }) {
  console.log("data", data)

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
        <Row gutter={32}>
          <Col span={12}>
            <UserSearch />
          </Col>
          <Col span={12}>
            <LineChart
              width={400}
              height={400}
              data={[{ uv: 1, pv: 2 }, { uv: 2, pv: 2 }, { uv: 3, pv: 2 }, { uv: 4, pv: 2 }, { uv: 5, pv: 3 }, { uv: 5, pv: 7 }]}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <Tooltip />
              <CartesianGrid stroke="#f5f5f5" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
              <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
            </LineChart>
          </Col>
        </Row>
      </S.Container>
    </S.WelcomeRowWrapper>
  )
}

export default AdminPages