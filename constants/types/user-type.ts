type User = {
    id: string
    surName: string
    firstName: string
    nickName: string
    icon?: string
    createdAt?: string
    type?: "ADMIN" | "HOST" | "REGISTRED"
}

export default User;