const http = require('http');
const url=require("url")
const PORT = 3000;



const server = http.createServer((req, res) => {
    //getting query params
    
    let current_path=req.url

    console.log(current_path)

    let params=url.parse(current_path,true)
    console.log(params.search)

    // to dict

    let dict=params.query
    console.log(dict.name)


    res.write("success")
    res.end()
    


}
);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
