const Hapi = require('@hapi/hapi');
const routes = require('./routes.js')
const notes = require('./notes.js')

// link http://notesapp-v1.dicodingacademy.com/notes/

const init = async () =>{
    const server = Hapi.server({
        port: 80,
        host: 'localhost',
        routes: {
          cors: {
            origin: ['*'],
          },
        },
      });

    server.route(routes);
    
    await server.start();
    console.log(`Server sedang berjalan di ${server.info.uri}`);

}

init();


// Ga semua data bisa diambil di luar dari originnya
// Contohnya aja JSON yang cuman bisa diambil pake fetch atau XMLHTTPREquest
// Untuk kita bisa ambil data nya walaupun diluar origin nya, kita bakal pake Cross Origin resource sharing
// kalo ga pake hapi, kita tinggap response.setHeader('Access-Control-Allow-Origin','*)


