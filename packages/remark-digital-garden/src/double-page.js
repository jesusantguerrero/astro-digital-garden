import fs from 'fs';
import path from 'path';
import { remark } from "remark";
import { unified,  } from "unified";
import { reporter } from 'vfile-reporter'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import remarkDigitalGarden from './index.js'

const buffer = fs.readFileSync(path.resolve('src/example.md'))

remark()
.use(remarkDigitalGarden, {
    
})
.process(buffer)
.then(file => {
  console.error(reporter(file));
});