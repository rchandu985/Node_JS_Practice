const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    
    // write file

    fs.writeFile("test.txt","Hi",(err,data)=>{})

    //Over Ride File
    fs.appendFile("test.txt","\nWelcome",(error,data)=>{
    })

    
    // read File
    fs.readFile("test.txt",(error,data)=>{
        res.write(data)
        res.end()
    })
    //delete File
    // fs.unlink("test.txt",(error)=>{
    // })
}
);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
