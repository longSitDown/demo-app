 const { resolve, parse } = require('path')


const PROJECT_ROOT = resolve(__dirname, '../../')
const PROJECT_NAME = parse(PROJECT_ROOT).name
const RESOLVE = (...path) => {
    return resolve(PROJECT_ROOT, ...path)
}


module.exports= {
    PROJECT_ROOT,
    PROJECT_NAME,
    RESOLVE
}
