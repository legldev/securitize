import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { calculateWalletAgeInDays } from './helpers';

@Injectable()
export class AppService {
  @Inject(ConfigService)
  public config: ConfigService;

  async getBalance(address: string): Promise<any> {
    const etherscanUrl: string = this.config.get('ETHERSCAN_URL');
    const apikey: string = this.config.get('ETHERSCAN_API_KEY');

    const response = await axios.get(etherscanUrl, {
      params: {
        module: 'account',
        action: 'balance',
        address,
        apikey: apikey,
      },
    });

    return response.data;
  }

  async getExchangeRate(): Promise<any> {
    const etherscanUrl: string = this.config.get('ETHERSCAN_URL');
    const apikey: string = this.config.get('ETHERSCAN_API_KEY');
    
    
    const response = await axios.get(etherscanUrl, {
      params: {
        module: 'stats',
        action: 'ethprice',
        apikey: apikey,
      },
    });

    return response.data;
  }

  async getAccountCreationTimestamp(address: string): Promise<any> {
    const etherscanUrl: string = this.config.get('ETHERSCAN_URL');
    const apikey: string = this.config.get('ETHERSCAN_API_KEY');

    const response = await axios.get(etherscanUrl, {
      params: {
        module: 'account',
        action: 'txlist',
        address,
        sort: "asc",
        apikey: apikey,
      },
    });

    const timestamp = parseInt(response.data.result[0].timeStamp);
    const ageInDays = calculateWalletAgeInDays(timestamp);
    return ageInDays > 365;
    
  }
}