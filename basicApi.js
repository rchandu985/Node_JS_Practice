const http = require('http');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (req.method==="GET"){
        if (parsedUrl.pathname === '/home' || parsedUrl.pathname==='/') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({"message":'welcome to Home'}));
        }
        // Handle route '/route2'
        else if (parsedUrl.pathname === '/users') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({"message":'welcome to users'}));
        }
        // Handle other routes
        else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({"message":'url not found'}));
        }
    }

    else if (req.method==="POST"){
    
        let data = '';

            // Accumulate the data chunks as they come in
        req.on('data', chunk => {data += chunk;});

        req.on("end",()=>
            {
                let post_data=JSON.parse(data)
                res.writeHead(200, { 'Content-Type': 'application/json' });

                res.end(JSON.stringify(post_data));
            }
        )
    }
}
);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
