const http = require('http');
const fs = require("fs");



// const assets = fr.readFileSync('./assets/', 'utf-8')

const server = http.createServer((req, res) => {
  // Your code here
  // const assets = fr.readFileSync('./assets/', 'utf-8')
  const dogAsset = fs.readFileSync('./assets/images/dog.jpg', 'utf-8')
  const cssAsset = fs.readFileSync('./assets/css/application.css', 'utf-8')
  const indexAsset = fs.readFileSync('index.html', 'utf-8')

  // Phase 2
  // HANDLING ROUTES
  if(req.method ==  'GET' & req.url ==='/static/images/dog.jpg' )
  {
    let extSplit = req.url.split('.')
    let urlSplit = req.url.split('/')
    let ext = extSplit[1]

    let finalIndex = urlSplit.length - 1
   
    
    // RESPONSE
    res.statusCode = 200
    if(ext.startsWith('j') || ext.startsWith('png')){
      res.setHeader("Content-Type", `image/${ext}`)
    }
    else{
      res.setHeader("Content-Type", `text/${ext}`)

    res.end( assets + urlSplit[finalIndex])
  }
}
  if(req.method ==  'GET' & req.url ==='/static/css/application.css')
  {
    let extSplit = req.url.split('.')
    let urlSplit = req.url.split('/')
    let ext = extSplit[1]

    let finalIndex = urlSplit.length - 1
    // assets + urlSplit[finalIndex]
    
    // RESPONSE
    res.statusCode = 200
    if(ext.startsWith('j') || ext.startsWith('png')){
      res.setHeader("Content-Type", `image/${ext}`)
    }
    else{
      res.setHeader("Content-Type", `text/${ext}`)
    }

    res.end(urlSplit[finalIndex])
  }

  // Phase 1
  // Responding with HTML
  res.statusCode = 200
  res.setHeader("Content-Type", "plain/html")
  res.end(indexAsset)
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));