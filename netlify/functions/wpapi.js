import { express } from "express";
import { cors }  from'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
app.use(cors())


console.log("listening...")
app.listen(8888);
