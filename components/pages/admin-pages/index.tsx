import React, { useState, useEffect, useCallback, useContext } from 'react'
import { Button, Space, Form, Col, Row, Select } from 'antd';
import type { Moment } from 'moment';
import moment from 'moment';
import Sidebar from '../../side-bar'
import * as S from "./styled"
import {
  LineChart, XAxis, Tooltip, CartesianGrid, Line,
  ResponsiveContainer
} from 'recharts'
import UserSearch from './user-search'
import axios from "axios";
import activityConf, { ActivityType } from 'constants/activity-confs/activity-conf'
import { ThemeContext } from 'styled-components';
import ScoreListItem from './score-list-item';

import { getEndOfDay, getStartOfDay } from '@helpers/date-helper'

type FormType = {
  activityTypes?: string[]
  dateRange?: (Moment | undefined)[]
}

export type scoreDataItem = {
  id: string
  isCorrect: boolean
  order: number
  scoreId: string
}

export type ScoreListType = {
  activityType: string,
  createdAt: string,
  difficulty: string,
  id: string,
  points: number,
  userId: string,
  scoreData: scoreDataItem[]
}

const TODAY = new Date().toISOString()

function AdminPages({ data }: { data: any }) {
  const [form] = Form.useForm();
  const [selectUser, setSelectUser] = useState<string | undefined>();
  const [scoreList, setScoreList] = useState<ScoreListType[] | undefined>();
  const themeData = useContext(ThemeContext);
  const [activities] = useState(
    activityConf.reduce((result: { value: string, label: string }[], activities: ActivityType) => {
      return [...result, ...activities.games.map((game) => ({ value: game.name, label: game.title }))]
    }, []
    )
  );
  console.log("scoreList", scoreList)
  const onUserSelect = (userId: string) => {
    setSelectUser(userId);
  }

  const filter = useCallback(({ from, to, activityTypes }: { from?: string, to?: string, activityTypes?: string[] }) => {
    const getData = async () => {
      try {
        const res = await axios.post('/api/activity/get-score', { userId: selectUser, from, to, activityTypes });
        setScoreList(res?.data?.data)
      } catch (error) {
        console.error("error", error)
      }
    }
    getData()
  }, [selectUser])

  const onFilterReset = useCallback(() => {
    form.resetFields()
    filter({ from: TODAY, to: TODAY })
  }, [filter])

  useEffect(() => {
    if (selectUser) {
      onFilterReset()
    }
  }, [onFilterReset, selectUser])

  // const getChartDate = () => {
  //   return Array.isArray(scoreList) ? scoreList.filter((scoreItem => {
  //     return Array.isArray(selectedFilter) && selectedFilter.length ? selectedFilter.includes(scoreItem.activityTypes) : true
  //   })).map(scoreItem => ({ points: scoreItem.points })) : []
  // }

  const handleFormSubmit = () => {
    const formValues: FormType = form.getFieldsValue()
    const [from, to] = formValues.dateRange || []
    filter({
      from: from ? getStartOfDay(from.toDate().toISOString()) : undefined,
      to: to ? getEndOfDay(to.toDate().toISOString()) : undefined,
      activityTypes: formValues.activityTypes
    })
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
        { name: 'introduction', icon: 'cake', title: 'Visual', onClick: () => { } }
      ]} />
      <S.Container>
        <Row style={{ width: "100%" }} gutter={24}>
          <Col span={12}>
            <UserSearch onUserSelect={onUserSelect} selectUser={selectUser} />
          </Col>
          {selectUser && <Col span={12}>
            <Row style={{ gap: "16px" }}>
              <Col span={24}>
                <Form<FormType> form={form}>
                  <Row style={{ gap: "16px" }}>
                    <Col span={24}>
                      <Form.Item name="activityTypes">
                        <Select
                          mode="multiple"
                          showArrow
                          options={activities}
                          style={{ width: '100%' }}
                        />
                      </Form.Item>
                    </Col>

                    <Col span={24}>
                      <Form.Item name="dateRange">
                        <S.StyledRangePicker />
                      </Form.Item>
                    </Col>

                    <S.FilterButtonRow span={24}>
                      <Button type="primary" onClick={handleFormSubmit}>Filtrovat</Button>
                      <Button type="default" onClick={onFilterReset}>Reset</Button>
                    </S.FilterButtonRow>
                  </Row>
                </Form>
              </Col>
              <Col span={24}>
                {Array.isArray(scoreList) && <ResponsiveContainer aspect={1.2}>
                  <LineChart
                    // data={scoreList.map(scoreItem => ({ points: scoreItem.points }))}
                    data={scoreList}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                  >
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey="points" stroke={themeData?.colors?.primary} yAxisId={0} />
                    {/* <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
                  </LineChart></ResponsiveContainer>}
              </Col>
              <Col span={24}>
                <ScoreListItem scoreList={scoreList} />
              </Col>
            </Row>

          </Col>}
        </Row>
      </S.Container >
    </S.WelcomeRowWrapper >
  )
}

export default AdminPages