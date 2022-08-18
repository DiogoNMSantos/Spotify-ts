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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const songRoute = (modelFactory) => {
    const router = (0, express_1.Router)();
    router.get('/', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
        const songs = yield modelFactory.create().find().exec();
        return res.status(200).json({ data: songs });
    }));
    router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const songs = yield modelFactory.create().findById(id).exec();
        return res.status(200).json({ data: songs });
    }));
    return router;
};
exports.default = songRoute;
//# sourceMappingURL=song.router.js.map