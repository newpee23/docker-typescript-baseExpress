import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';

import fs from 'fs';
import path from 'path';

const app = express();
app.use(bodyParser.json({limit:'20mb'})); // จำกัดขนาดข้อมูลที่ยิงมาจากหน้าบ้าน
const routesPath: string = path.join(__dirname, './routes'); // กำหนดพาธเต็มของไดเรกทอรี routes

// Route กำหนด path ของ routes อัตโนมัติ
fs.readdirSync(routesPath).map((r: string) => app.use('/api', require(path.join(routesPath, r))));

app.listen(4000, () => console.log(`listening on port : 4000`));
