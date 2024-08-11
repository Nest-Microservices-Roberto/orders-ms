import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, NATS_SERVICE } from 'src/config';

const NatsModuleProviders = [
  ClientsModule.register([
    {
      name: NATS_SERVICE,
      transport: Transport.NATS,
      options: {
        servers: envs.natsServers,
      },
    },
  ]),
];
@Module({
  imports: NatsModuleProviders,
  exports: NatsModuleProviders,
})
export class NatsModule {}
