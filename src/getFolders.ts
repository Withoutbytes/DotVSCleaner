import fs from "fs";
import path from "path";
import os from "os";

const homeFolder = os.homedir();

let projectsFolder = path.resolve(homeFolder + "\\source\\repos"); // Change to your folder here

const FindAllDotVSFolders = (projectsFolder: string) => {
	let directories = fs.readdirSync(projectsFolder);
	let dotVSFolders: Array<string> = [];
	for (const dir of directories) {
		let absolutePath = path.join(projectsFolder, dir);
		if (fs.lstatSync(absolutePath).isDirectory()) {
			if (absolutePath.endsWith(".vs")) dotVSFolders.push(absolutePath);
			dotVSFolders.push(...FindAllDotVSFolders(absolutePath));
			if (dotVSFolders.length > 0) console.log(dotVSFolders);
		}
	}
	return dotVSFolders;
};

let folders = FindAllDotVSFolders(projectsFolder);

console.log({
	folders,
});

fs.writeFileSync("outPut.json", JSON.stringify(folders), { encoding: "utf-8" });
console.log("Listed all folders done :)");
