function funcaoPadrao(callback) {
    console.log("Executando via \x1b[31mGULP\x1b[37m");
    callback();
}

exports.default = funcaoPadrao;