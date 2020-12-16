"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const homeFolder = os_1.default.homedir();
let projectsFolder = path_1.default.resolve(homeFolder + "\\source\\repos"); // Change to your folder here
const FindAllDotVSFolders = (projectsFolder) => {
    let directories = fs_1.default.readdirSync(projectsFolder);
    let dotVSFolders = [];
    for (const dir of directories) {
        let absolutePath = path_1.default.join(projectsFolder, dir);
        if (fs_1.default.lstatSync(absolutePath).isDirectory()) {
            if (absolutePath.endsWith(".vs"))
                dotVSFolders.push(absolutePath);
            dotVSFolders.push(...FindAllDotVSFolders(absolutePath));
            if (dotVSFolders.length > 0)
                console.log(dotVSFolders);
        }
    }
    return dotVSFolders;
};
let folders = FindAllDotVSFolders(projectsFolder);
console.log({
    folders,
});
fs_1.default.writeFileSync("outPut.json", JSON.stringify(folders), { encoding: "utf-8" });
console.log("Listed all folders done :)");
