import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS to allow requests from frontend
  app.enableCors({
    origin: 'http://localhost:3000', // Allow only frontend requests
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies if needed
  });

  await app.listen(3001);
}
bootstrap();
