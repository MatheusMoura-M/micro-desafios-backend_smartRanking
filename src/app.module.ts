import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DesafiosModule } from './desafios/desafios.module';
import { PartidasModule } from './partidas/partidas.module';
import { ProxyRMQModule } from './proxyrmq/proxyrmq.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://desafios_sr:mtnSPemW9M44onZC@microdesafiocluster.7dmvffw.mongodb.net/srDesafiosBackend?retryWrites=true&w=majority&appName=microDesafioCluster',
    ),
    DesafiosModule,
    PartidasModule,
    ProxyRMQModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
