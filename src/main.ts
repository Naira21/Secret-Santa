import { App } from './app';
import { DbConnection } from './infrastructure/mariaDB/database';

async function main(): Promise<void> {
  const app = new App(new DbConnection());

  await app.runServer();
}

main();
