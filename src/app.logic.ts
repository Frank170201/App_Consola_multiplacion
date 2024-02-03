import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

const {b:base,l:limit,s:showTable}=yarg

let messageFinal = "";
const headerMesaage = `
================================
Esta es la Tabla del ${base}
================================\n
`;

for (let index = 1; index <=limit; index++) {
  messageFinal += ` ${base} x ${index} = ${base * index}\n`;
}

messageFinal = headerMesaage + messageFinal;

if(showTable){
  console.log(messageFinal);

}

const outPutPath=`outputs`

fs.mkdirSync(outPutPath,{recursive:true})
fs.writeFileSync(`${outPutPath}/tabla${base}.txt`,messageFinal)
console.log(`File was created`)
