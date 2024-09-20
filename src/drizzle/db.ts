// import "dotenv/config";


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

import Stripe from "stripe";

import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema"
 
export const client =  neon(process.env.Database_URL!)
 
 
 
const db = drizzle(client, { schema, logger: true })  //create a drizzle instance
 
export default db;  //export the drizzle instance

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-06-20',
    typescript: true,
  });