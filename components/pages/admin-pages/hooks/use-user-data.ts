import React, { useState, useEffect } from "react"
import axios from "axios"

const headers = {
    'Content-Type': 'application/json',
};

const useUserData = () => {
    const [users, setUsers] = useState([]);
    const [state, setState] = useState<"loading" | "ready" | "error">("loading");

    useEffect(() => {
        setState("loading")
        const getData = async () => {
            const res = await axios.get('/api/user');
            console.log("res", res.data)
            setUsers(res.data)
            setState("ready")
        }
        getData()
    }, [])

    return { users, state }
}


export default useUserData