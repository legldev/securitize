import { Controller, Get, Query } from '@nestjs/common';
import axios from 'axios';

@Controller('etherscan')
export class EtherscanController {
  private readonly etherscanUrl = 'https://api.etherscan.io/api';

  @Get('balance')
  async getBalance(@Query('address') address: string, @Query('apikey') apikey: string) {
    const response = await axios.get(this.etherscanUrl, {
      params: {
        module: 'account',
        action: 'balance',
        address,
        apikey,
      },
    });

    return response.data;
  }
}
