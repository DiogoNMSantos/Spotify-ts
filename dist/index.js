"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const song_router_1 = __importDefault(require("./router/song.router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env['PORT'];
const BASE_URL = process.env['BASE_URL'];
app.use(express_1.default.json());
app.use('/song', song_router_1.default);
const server = app
    .listen(port, () => {
    console.log(`Server is running on ${BASE_URL}:${port}`);
})
    .on('error', (err) => {
    console.log(err);
});
exports.default = server;
//# sourceMappingURL=index.js.map