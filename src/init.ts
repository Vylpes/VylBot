import fs from "fs";
import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Token: ", token => {
    rl.question("Prefix: ", prefix => {
        fs.writeFileSync("./config.json", JSON.stringify({
            token: token,
            prefix: prefix
        }));
        console.log("Saved to config.json");
        process.exit(0);
    });
});