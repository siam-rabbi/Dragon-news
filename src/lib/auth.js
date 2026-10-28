import dns from 'node:dns'


dns.setServers([
  '8.8.8.8', // Google Primary DNS
  '8.8.4.4'  // Google Secondary DNS
]);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db();

export const auth = betterAuth({

    
  database: mongodbAdapter(db, {
    client,
  }),
    emailAndPassword: { 
    enabled: true, 
  }, 

   socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },

});




