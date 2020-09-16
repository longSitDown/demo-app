import { resolve, parse } from 'path'

const PROJECT_ROOT = resolve(__dirname, '../../');
const PROJECT_NAME = parse(PROJECT_ROOT).name;

export {
    PROJECT_ROOT,
    PROJECT_NAME
}
