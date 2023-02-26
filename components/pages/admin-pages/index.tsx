import React, { useState, useEffect } from 'react'
import Sidebar from '../../side-bar'
import * as S from "./styled"
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts'
import UserSearch from './user-search'
import { Col, Row } from 'antd';
import axios from "axios";
import { Select } from 'antd';
import activityConf, { ActivityType } from 'constants/activity-conf'

function AdminPages({ data }: { data: any }) {
  const [selectUser, setSelectUser] = useState<string | undefined>();
  const [scoreList, setScoreList] = useState<string | undefined>();
  const [selectedFilter, setSelectedFilter] = useState<string[]>([])
  const [activities] = useState(
    activityConf.reduce((result: { value: string, label: string }[], activities: ActivityType) => {
      return [...result, ...activities.games.map(game => ({ value: game.name, label: game.title }))]
    }, []
    )
  );

  const onUserSelect = (userId: string) => {
    setSelectUser(userId);
  }

  useEffect(() => {
    if (selectUser) {
      const getData = async () => {
        const res = await axios.get('/api/activity/get-score', { params: { userId: selectUser } });
        console.log("res56", res)
        setScoreList(res?.data?.data)
      }
      getData()
    }
  }, [selectUser])

  const getChartDate = () => {
    return Array.isArray(scoreList) ? scoreList.filter((scoreItem => {
      return Array.isArray(selectedFilter) && selectedFilter.length ? selectedFilter.includes(scoreItem.activityType) : true
    })).map(scoreItem => ({ points: scoreItem.points })) : []
  }

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
            <UserSearch onUserSelect={onUserSelect} selectUser={selectUser} />
          </Col>
          <Col span={12}>
            <Select
              mode="multiple"
              showArrow
              style={{ width: '100%' }}
              options={activities}
              onChange={setSelectedFilter}
            />
            {Array.isArray(scoreList) && <LineChart
              width={400}
              height={400}
              // data={scoreList.map(scoreItem => ({ points: scoreItem.points }))}
              data={getChartDate()}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <Tooltip />
              <CartesianGrid stroke="#f5f5f5" />
              <Line type="monotone" dataKey="points" stroke="#ff7300" yAxisId={0} />
              {/* <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
            </LineChart>}

          </Col>
        </Row>
      </S.Container>
    </S.WelcomeRowWrapper>
  )
}

export default AdminPages