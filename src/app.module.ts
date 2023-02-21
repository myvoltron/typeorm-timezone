import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CONFIG_VALIDATOR } from './app/config/config.validator';
import { MysqlConfigProvider } from './app/mysql/mysql-config.provider';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot(CONFIG_VALIDATOR),
    TypeOrmModule.forRootAsync({
      useClass: MysqlConfigProvider,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
