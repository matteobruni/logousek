import React, { useState, useEffect, useCallback, useContext } from 'react'
import { Button, Form, Col, Row, Select } from 'antd';
import type { Moment } from 'moment';
import axios from "axios";
import { ThemeContext } from 'styled-components';
import {
  LineChart, XAxis, Tooltip, CartesianGrid, Line,
  ResponsiveContainer
} from 'recharts'

import activityConf, { ActivityType } from '@constants/activity-confs/activity-conf'
import RouteWrapper from '@components/route-wrapper';

import ScoreListItem from './score-list-item';
import * as S from "./styled"
import { useTranslateFunctions } from '@hooks/useTranslateFunctions';

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

function AdminPages() {
  const { tAdmin } = useTranslateFunctions()
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
  }, [filter, form])

  useEffect(() => {
    if (selectUser) {
      onFilterReset()
    }
  }, [onFilterReset, selectUser])

  const handleFormSubmit = () => {
    const formValues: FormType = form.getFieldsValue()
    const [from, to] = formValues.dateRange || []
    filter({
      from: from ? getStartOfDay(from.toDate().toISOString()) : undefined,
      to: to ? getEndOfDay(to.toDate().toISOString()) : undefined,
      activityTypes: formValues.activityTypes
    })
  }

  return (<Col span={12}>
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
            data={scoreList}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="points" stroke={themeData?.colors?.primary} yAxisId={0} />
          </LineChart></ResponsiveContainer>}
      </Col>
      <Col span={24}>
        <ScoreListItem scoreList={scoreList} />
      </Col>
    </Row>
  </Col>
  )
}

export default AdminPages