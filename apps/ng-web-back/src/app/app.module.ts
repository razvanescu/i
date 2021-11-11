import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActiveDirectoryService } from './active-directory/active-directory.service';
import { ActiveDirectoryController } from './active-directory/active-directory.controller';
import { ContextController } from './security/context/context.controller';

@Module({
  imports: [],
  controllers: [AppController, ActiveDirectoryController, ContextController],
  providers: [AppService, ActiveDirectoryService],
})
export class AppModule {}
