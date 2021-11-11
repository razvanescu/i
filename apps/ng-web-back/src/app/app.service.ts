import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to ng-web-back!' };
  }

  getSetting(): { message: string } {
    return { message: 'Welcome to settings!' };
  }
}
