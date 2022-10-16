import React, { useState, useContext, useEffect } from "react";
import { io } from "socket.io-client";

const SocketContext = React.createContext();

export function useSocket() {
    return useContext(SocketContext);
}

export default function SocketProvider({ id, children }) {
    const [socket, setSocket] = useState();

    useEffect(() => {
        let newSocket;
        if (id) {
            newSocket = io("http://localhost:5000", { query: { id } });
            console.log(newSocket);
            setSocket(newSocket);
        }

        return () => {
            if (newSocket) newSocket.close();
        };
    }, [id]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}
