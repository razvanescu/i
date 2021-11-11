import { Controller, Get } from '@nestjs/common';
import { ActiveDirectoryService } from './active-directory.service';

@Controller('active-directory')
export class ActiveDirectoryController {
  constructor(private readonly adService: ActiveDirectoryService) {}

  @Get('user')
  getUserAd() {
    return this.adService.findUser();
  }

  @Get('authentificate')
  authentificateUser() {
    return this.adService.adAuthentificate();
  }
}
