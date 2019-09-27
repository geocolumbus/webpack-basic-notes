module.exports = {
    entry: ['./src/js/index.js'],
    target: 'node',
    mode: 'production',
    output: {
        path: `${process.cwd()}/bin`,
        filename: 'app.js'
    }
}
