const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log('request made')
  // console.log(req.method)
  // console.log(req.url)

  res.setHeader("Content-Type", "text/html");

  let path = "./views";

  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200
      break;
    default:
      path += "/404.html";
      res.statusCode = 404
      break;
  }
//sending back to browser

fs.readFile((path), (err,data)=>{
    if(err){
        console.log(err)
        res.end()
    }else{
        res.write(data)
        res.end()
    }
})
  //  fs.readFile('./views/index.html', (err, data) =>{
  // if(err){
  //   console.log(err)
  //   res.end()
  // } else {
  //   res.write(data)
  //   res.end()
  // }
});

// res.write('<h3>Shaking my head </h3>')
// res.write('<h2>Shaking my body </h2>')
// res.write('<h1>Shaking my foot </h1>')
// res.end()
// })

const port = 3000;
server.listen(port, "localhost", () => {
  console.log(`Listening request on the port 8000 ${port}`);
});
