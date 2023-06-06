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
            try {
                const res = await axios.get('/api/user/list');
                if (res.status === 200) {
                    setUsers(res.data)
                    setState("ready")
                } else {
                    //vypsat error
                }
            } catch (err) {
                //vypsat error
            }
        }
        getData()
    }, [])

    return { users, state }
}


export default useUserData