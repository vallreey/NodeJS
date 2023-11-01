const http = require('http');

const bilangan = [
    { id: 1, text: 'One' },
    { id: 2, text: 'Two' },
    { id: 3, text: 'Three' },
];

const server = http.createServer((req, res) => {
    const { method, url } = req;
    let body = [];

    req
        .on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();

            let status = 404;
            const response = {
                success: false,
                results: [],
                error: ""
            };

            if (method === 'GET' && url === '/bilangan') {

                status = 200;
                response.success = true;
                response.results = bilangan;

            } else if (method === 'POST' && url === '/bilangan') {
                const { id, text } = JSON.parse(body);

                if (!id || !text) {
                    status = 200;
                    response.error = 'Tolong tambahkan id dan text';
                } else {
                    bilangan.push({ id, text });
                    status = 201;
                    response.success = true;
                    response.results = bilangan;
                }
            }
            //     console.log(body);
            // });
            // res.statusCode = 404;
            // res.setHeader('Content-Type', 'application/json');
            // res.setHeader('X-Powered-By', 'Node.js');

            res.writeHead(status, {
                'Content-Type': 'application/json',
                'X-Powered-By': 'Node.js',
            });

            res.end(JSON.stringify(response));
        });
    });

// const data = JSON.stringify({
//     success: true,
//     error: 'Loh Ndak ada Ta?',
//     data: null,
// });

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));