"use strict";
// import "dotenv/config";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// import { drizzle } from "drizzle-orm/node-postgres";
// import { Client } from "pg";
// import * as schema from "./schema"
// export const client = new Client({
//     connectionString: process.env.Database_URL as string,   //get the database url from the environment
// })
// const main = async () => {
//     await client.connect();  //connect to the database
// }
// main();
// const db = drizzle(client, { schema, logger: true })  //create a drizzle instance
// export default db;  //export the drizzle instance
require("dotenv/config");
const neon_http_1 = require("drizzle-orm/neon-http");
const serverless_1 = require("@neondatabase/serverless");
const schema = require("./schema");
exports.client = (0, serverless_1.neon)(process.env.Database_URL);
const db = (0, neon_http_1.drizzle)(exports.client, { schema, logger: true }); //create a drizzle instance
exports.default = db; //export the drizzle instance
