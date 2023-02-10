import React from "react";
import { useSession } from "next-auth/react";

type PrivateRouteProps = {
    children: React.ReactNode
}

const PublicRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { status } = useSession();

    if (status === "authenticated" || status === "unauthenticated")
        return (
            <>{children}</>
        );

    return <div>loading</div>
}

export default PublicRoute
