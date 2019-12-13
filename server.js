const http = require('http');

const port       =          process.env.PORT         || 3000;
const statusCode = parseInt(process.env.STATUS_CODE  || process.argv[2])
const content    =          process.env.CONTENT      || process.argv[3]

if(!statusCode) throw Error("statuscode not set")
if(!content)    throw Error("content not set")

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = statusCode;
    res.end(`${statusCode} ${content}`);
});

server.listen(port, () => {
  console.log(`Server running at on port ${port}`);
});