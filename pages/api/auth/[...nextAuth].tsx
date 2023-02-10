// import { NextAuthOptions } from "next-auth"
// import GoogleProvider from "next-auth/providers/google"
// import CredentialsProvider from "next-auth/providers/credentials";
// import NextAuth from "next-auth";
// import { User } from "next-auth";
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcryptjs'
// import getConfig from 'next/config'
// import { NextApiRequest, NextApiResponse } from 'next'

// import {
//     createUser,
//     deleteUser,
//     getAllUsers,
//     getUserByName,
//     updateUser,
// } from '../../../prisma/user'
// import { threadId } from "worker_threads";

// export const authOptions: NextAuthOptions = {
//     providers: [
//         // GoogleProvider({
//         //     clientId: process.env.GOOGLE_CLIENT_ID || "",
//         //     clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
//         // }),
//         CredentialsProvider({
//             // The name to display on the sign in form (e.g. "Sign in with...")
//             name: "Credentials",
//             // `credentials` is used to generate a form on the sign in page.
//             // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//             // e.g. domain, username, password, 2FA token, etc.
//             // You can pass any HTML attribute to the <input> tag through the object.
//             credentials: {
//                 nickName: {
//                     label: "NickName",
//                     type: "text",
//                     placeholder: "jsmith",
//                 },
//                 password: {
//                     label: "Password",
//                     type: "password",
//                 },
//             },
//             async authorize(credentials, req) {
//                 return { id: "12", firstName: "test", surName: "test", nickName: "test" }
//                 // const { nickName, password } = credentials || {}
//                 // if (nickName && password) {
//                 //     const user = (await getUserByName({ nickName }))[0]
//                 //     // validate
//                 //     if (!user || !bcrypt.compareSync(password, user.password)) {
//                 //         throw new Error("wrong_password")
//                 //     }
//                 //     const JWT_SECRET = process.env.JWT_SECRET || ""
//                 //     // create a jwt token that is valid for 7 days
//                 //     // const token = jwt.sign({ sub: user.id }, JWT_SECRET, {
//                 //     //     expiresIn: '7d',
//                 //     // })

//                 //     // return basic user details and token
//                 //     return {
//                 //         id: user.id,
//                 //         firstName: user.firstName,
//                 //         surName: user.surName,
//                 //         nickName: user.nickName,
//                 //         // token,
//                 //     }
//                 // } else {
//                 //     throw new Error("Wrong dtoIn")
//                 // }
//             },
//         }),
//     ],
//     secret: process.env.JWT_SECRET,
//     callbacks: {
//         async jwt({ token, user }) {
//             return { ...token, ...user };
//         },
//         async session({ session, token, user }) {
//             // Send properties to the client, like an access_token from a provider.
//             session.user = token;

//             return session;
//         },
//     },

//     pages: {
//         signIn: "/game-menu",
//         error: "/game-menu",
//     },
// }

import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            authorize(credentials, req) {
                console.log("credentials", credentials)
                return {
                    id: "1234",
                    name: "John Doe",
                    email: "john@gmail.com",
                    role: "admin",
                };
            }
        })
    ],
    pages: {
        signIn: "/auth/signIn",
        error: '/auth/error',
        // error: '/auth/error',
        // signOut: '/auth/signout'
    },
    callbacks: {
        jwt(params) {
            // update token
            // if (params.user?.role) {
            //     params.token.role = params.user.role;
            // }
            // return final_token
            return params.token;
        },
    },
};

export default NextAuth(authOptions);