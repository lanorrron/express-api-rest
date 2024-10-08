"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const account_route_1 = __importDefault(require("./modules/account/routes/account.route"));
const auth_routes_1 = __importDefault(require("./modules/auth/routes/auth.routes"));
const router = express_1.default.Router();
router.use('/accounts', account_route_1.default);
router.use('/auth', auth_routes_1.default);
exports.default = router;
