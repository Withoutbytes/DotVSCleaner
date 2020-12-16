"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let folders = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve("outPut.json"), { encoding: "utf8" }));
for (const folder of folders) {
    console.log(`Deleting: ${folder}`);
    fs_1.default.rmdirSync(folder, { recursive: true });
}
console.log("Done deleted all folders :)");
