import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EtherscanController } from './etherscan/etherscan.controller';

@Module({
  imports: [],
  controllers: [AppController, EtherscanController],
  providers: [AppService],
})
export class AppModule {}
