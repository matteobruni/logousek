import bcrypt from 'bcryptjs'

import {
    getUserByName,
} from '../../../prisma/user'

import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {
                nickName: {
                    label: "NickName",
                    type: "text",
                    placeholder: "jsmith",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                const { nickName, password } = credentials || {}
                if (nickName && password) {
                    const user = (await getUserByName({ nickName }))[0]
                    if (!user || !bcrypt.compareSync(password, user.password)) {
                        throw new Error("wrong_password")
                    }

                    return {
                        id: user.id,
                        name: `${user.firstName} ${user.surName}`,
                    }
                } else {
                    throw new Error("Wrong dtoIn")
                }
            }
        })
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: "/auth/signIn",
        error: '/auth/error',
    },
    callbacks: {
        jwt(params) {
            return params.token;
        },
        async session({ session, token }) {
            const updatedUser: User = { ...session.user, id: token?.sub || "" }

            return { ...session, user: updatedUser }
        },
    },
};

export default NextAuth(authOptions);