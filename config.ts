import { config } from 'dotenv';
config();

const conf = {
  url: process.env.NEXT_PUBLIC_BASE_API_URL,
}

export default conf;
