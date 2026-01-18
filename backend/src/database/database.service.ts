import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private readonly logger = new Logger(DatabaseService.name);

  constructor(private readonly dataSource: DataSource) {}

  async onModuleInit() {
    if (this.dataSource.isInitialized) {
      this.logger.log('✅ Database connection established successfully');
    } else {
      this.logger.error('❌ Database connection failed');
    }
  }
}
