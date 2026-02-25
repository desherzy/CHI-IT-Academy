'use client';

import { useEffect, createContext } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext(null);

export default function SocketProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const socket = io('http://localhost:3000');

        socket.on('connect', () => {
            console.log('Connected to Socket.IO server');
        });

        return () => { socket.disconnect(); };
    }, []);

    return <>{children}</>;
};

