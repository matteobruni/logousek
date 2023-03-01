import React from 'react'
import axios from "axios";
import { Input } from 'antd';
import useUserData from '../hooks/use-user-data'
import { Avatar, Button, List, Skeleton } from 'antd'
import { Col, Row } from 'antd'
import { useSession, signIn, signOut } from "next-auth/react"

import user from 'constants/types/user-type'

const { Search } = Input

type UserSearchType = {
    onUserSelect: (userId: string) => void
    selectUser?: string
}

const UserSearch: React.FC<UserSearchType> = ({ onUserSelect, selectUser }) => {
    const { users, state } = useUserData()

    const onSearch = () => { }
    const onLoadMore = () => { signIn() }

    const deleteUser = () => {
        const callApi = async () => {
            await axios.post('/api/user/delete', { params: { userId: selectUser } });
        }
        callApi()
    }


    const loadMore =
        state !== "loading" ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={onLoadMore}>Načti další</Button>
            </div>
        ) : null;

    return (
        <Row gutter={16}>
            <Col span={24}>
                <Search
                    placeholder="Vyhledejte hráče"
                    size="large"
                    onSearch={onSearch}
                />
            </Col>
            <Col span={24}>
                <List
                    itemLayout="horizontal"
                    loadMore={loadMore}
                    dataSource={users}
                    renderItem={(item: user) => (
                        <List.Item actions={[<a key="list-loadmore-edit" onClick={deleteUser}>Smaž</a>]} onClick={() => onUserSelect(item.id)}>
                            <Skeleton avatar title={false} active loading={false}>
                                <List.Item.Meta
                                    title={<a onClick={() => onUserSelect(item.id)}>{item.nickName}</a>}
                                    description={
                                        <>
                                            <span>Vytvořeno: {item.createdAt ? new Date(item.createdAt).toDateString() : "Neuvedeno"}</span>
                                            <br />
                                            <span>Id uživatele: {item.id}</span>
                                        </>
                                    }
                                />
                            </Skeleton>
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    )
}

export default UserSearch