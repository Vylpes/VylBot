import fs from "fs";
import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Token: ", token => {
    if (token.length == 0) process.exit(1);

    rl.question("Prefix: ", prefix => {
        if (prefix.length == 0) process.exit(1);

        fs.writeFileSync("./config.json", JSON.stringify({
            token: token,
            prefix: prefix
        }));
        console.log("Saved to config.json");
        process.exit(0);
    });
});