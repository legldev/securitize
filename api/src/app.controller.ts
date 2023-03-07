import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('wallet/balance')
  async getBalance(@Query('address') address: string) {
    const response = await this.appService.getBalance( address );
    return response;
  }

  @Get('wallet/timestamp')
  async getWalletAge(@Query('address') address: string) {
    const response = await this.appService.getAccountCreationTimestamp( address );
    return response;
  }
}
