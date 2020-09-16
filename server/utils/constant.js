 const { resolve, parse } = require('path')


const PROJECT_ROOT = resolve(__dirname, '../../');
const PROJECT_NAME = parse(PROJECT_ROOT).name;

module.exports= {
    PROJECT_ROOT,
    PROJECT_NAME
}
