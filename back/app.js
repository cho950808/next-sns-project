const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.end("hello node");

  if(req.method === 'GET') {
    if(req.url = )
  } else if (req.method === 'POST') {

  } else if (req.method === 'DELETE') {

  }
});
server.listen(3050, () => {
 console.log('서버 실행 중') 
});
