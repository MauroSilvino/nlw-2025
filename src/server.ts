import { env } from './../env.ts';
//import { sql } from './db/connection.ts';
import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod';
import { getRoomsRoute } from './http/routes/get-rooms.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

// Register CORS with specific options

app.register(fastifyCors, {
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}); 

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get('/health', () => {
  return { status: 'ok' };
});

app.register(getRoomsRoute)

// Start the server

app.listen({ port: env.PORT }, (err) => {
  if (err) {
    //console.error(err);
    process.exit(1);
  }
  //console.log(`Server is running at ${address}`);
});


