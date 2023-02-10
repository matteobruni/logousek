import Router from "next/router";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";

type PrivateRouteProps = {
    children: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { status } = useSession();
    console.log("status", status)
    useEffect(() => {
        if (status === "unauthenticated") Router.replace("/login-screen");
    }, [status]);

    if (status === "authenticated")
        return (
            <>{children}</>
        );

    return <div>loading</div>
}

export default PrivateRoute
