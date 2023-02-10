import React from 'react'
import useUserData from '../hooks/use-user-data'
import { Input } from 'antd'
import { Avatar, Button, List, Skeleton } from 'antd'
import { Col, Row } from 'antd'
import { useSession, signIn, signOut } from "next-auth/react"

import user from 'constants/types/user-type'

const { Search } = Input

type UserSearchType = {
    onUserSelect: (userId: string) => void
}

const UserSearch: React.FC<UserSearchType> = ({ onUserSelect }) => {
    const { users, state } = useUserData()

    const onSearch = () => { }
    const onLoadMore = () => { signIn() }


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
                    className="demo-loadmore-list"
                    // loading={initLoading}
                    itemLayout="horizontal"
                    loadMore={loadMore}
                    dataSource={users}
                    renderItem={(item: user) => (
                        <List.Item actions={[<a key="list-loadmore-edit">Smaž</a>]} onClick={() => onUserSelect(item.id)}>
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
