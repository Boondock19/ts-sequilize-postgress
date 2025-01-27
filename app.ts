import dotenv from 'dotenv';
import { Server } from './models/server';

dotenv.config();

/**
 * Archivo principal de la API, encargada de instanciar a la clase Sever para
 * iniciar el servidor.
 */

const server = new Server();

server.listen();
