"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'borrow_box',
    password: '240930',
    port: 5432,
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const res = yield client.query('SELECT NOW() AS now');
        console.log('✅ Database connected at:', res.rows[0].now);
    }
    catch (err) {
        console.error('❌ DB connection failed:', err);
    }
    finally {
        yield client.end();
    }
}))();
