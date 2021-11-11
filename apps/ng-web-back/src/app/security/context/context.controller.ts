import { Controller, Get } from '@nestjs/common';

const contextResponse = `
{
    "Header": {
        "CorrelationId": "8000376e-0000-a700-b63f-84710c7967bb"
    },
    "Content": {
        "Context": {
            "OwnerName": "Chara",
            "UserName": "AdminDacia",
            "CompanyName": "dacia",
            "IsAdmin": false
        }
    }
}
`;

@Controller('security')
export class ContextController {
  @Get('context')
  getContext() {
    return contextResponse;
  }
}
