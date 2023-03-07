import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet } from './wallet.interface';

@Injectable()
export class WalletService {
  constructor(@InjectModel('Wallet') private readonly walletModel: Model<Wallet>) {}

  async findAll(): Promise<Wallet[]> {
    return await this.walletModel.find().exec();
  }

  async findOne(id: string): Promise<Wallet> {
    return await this.walletModel.findById(id).exec();
  }

  async create(user: Wallet): Promise<Wallet> {
    const newUser = new this.walletModel(user);
    return await newUser.save();
  }
}
