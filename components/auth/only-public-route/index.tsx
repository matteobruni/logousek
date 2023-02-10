import Router from "next/router";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";

type PrivateRouteProps = {
    children: React.ReactNode
}

const OnlyPublicRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { status } = useSession();

    console.log("status", status)
    useEffect(() => {
        console.log("status", status)
        if (status === "authenticated") {
            console.log("isAuthenticated")
            Router.replace("/game-menu");
        }
    }, [status]);

    if (status === "unauthenticated") {
        return (
            <>{children}</>
        );
    }
    return <div>loading</div>
}

export default OnlyPublicRoute
