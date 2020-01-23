"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const yargs = require("yargs");
//Como executar
//node save-file.js -f=hello2.txt -c="Hello 2"
const argv = yargs
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv;
fs.writeFile(argv.filename, argv.content, (error) => {
    if (error)
        throw error;
    console.log(`Arquivo ${argv.filename} foi salvo com sucesso.`);
});
//# sourceMappingURL=save-file.js.map