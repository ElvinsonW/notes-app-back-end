
const Hapi = require('@hapi/hapi');
const routes = require('./routes.js')
const notes = require('./notes.js')

// link http://notesapp-v1.dicodingacademy.com/notes/

const init = async () =>{
    const server = Hapi.server({
        port: 5000,
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

// ssh -i "note-api-webserver.pem" ubuntu@ec2-18-138-58-131.ap-southeast-1.compute.amazonaws.com

// command biar kita ngebatesion permission si pem biar bisa dipake buat hubungin aplikasi kita ke server
/**
$path = "note-api-webserver.pem"
# Reset to remove explicit permissions
icacls.exe $path /reset
# Give current user explicit read-permission
icacls.exe $path /GRANT:R "$($env:USERNAME):(R)"
# Disable inheritance and remove inherited permissions
icacls.exe $path /inheritance:r 
*/

/**
Command di terminal
git add. digunakan untuk memasukkan semua berkas ke stash, terkecuali berkas node_modules dan notes-api-webserver.pem.
git commit -m “initial commit” digunakan untuk menyimpan perubahan pada local repository. Setiap perubahan pada sistem git dapat ditelusuri berdasarkan commit history.
 */


// ngehubungin github sama lokal
// git remote add origin <remote repository URL> => untuk hubungin
// git push origin master => untuk masukin filenya ke github

// Masukin project kita ke EC2 Instance
// ssh -i "note-api-webserver.pem" ubuntu@ec2-18-138-58-131.ap-southeast-1.compute.amazonaws.com
// sudo apt-get install git
// git clone <repository_name>
// cd notes-app-back-end

// pasang nvm (node js) di sini
// curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
// nvm install <versi nodejs>
// cd notes-app-back-end
// npm install.


