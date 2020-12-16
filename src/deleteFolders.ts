import fs from "fs";
import path from "path";

let folders = JSON.parse(fs.readFileSync(path.resolve("outPut.json"), { encoding: "utf8" })) as Array<string>;

for (const folder of folders) {
	console.log(`Deleting: ${folder}`);

	fs.rmdirSync(folder, { recursive: true });
}

console.log("Done deleted all folders :)");
