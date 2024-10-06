"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = __importDefault(require("zod"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
const sunInput = zod_1.default.object({
    a: zod_1.default.number(),
    b: zod_1.default.number()
});
//@ts-ignore
exports.app.post("/sum", (req, res) => {
    var _a;
    const parsedResponse = sunInput.safeParse(req.body);
    if (!parsedResponse.success) {
        return res.status(404).json({
            message: "Inavlid Input"
        });
    }
    const ans = parsedResponse.data.a + ((_a = parsedResponse.data) === null || _a === void 0 ? void 0 : _a.b);
    res.json({
        ans
    });
});
