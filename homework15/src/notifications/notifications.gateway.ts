import { WebSocketGateway, WebSocketServer, OnGatewayInit } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
    cors: { origin: '*' },
})
export class NotificationsGateway implements OnGatewayInit {
    @WebSocketServer()
    server!: Server;

    afterInit(server: Server) {
        console.log('WebSocket Gateway initialized');
    };

    sendNotification(event: string, data: any) {
        this.server.emit(event, data);
    }
};

