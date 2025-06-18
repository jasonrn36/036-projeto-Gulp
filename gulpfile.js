function funcaoPadrao(callback) {
    console.log("\n Executando via \x1b[31mGULP\x1b[37m \n");
    callback();
}

function digaOi(callback) {
    console.log("\n\x1b[33m O\x1b[36ml\x1b[33má\x1b[31m \x1b[31mGulp\x1b[34m!! \n");
    callback();
}
exports.default = funcaoPadrao;
exports.digaOi = digaOi;