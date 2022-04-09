import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    getHello(): object {
        return {
            name: 'Blog DDD example API',
            documentation: '/documentation',
            version: '1.0',
            timestamp: new Date().toISOString(),
        };
    }
}
