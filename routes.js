const { 
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler, 
    editNoteByIdHandler,
    deleteNoteByIdHandler 
} = require('./handler.js')

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
        options: {
          cors: {
            origin: ['*'],
          },
        },
      },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        method: 'PUT', // untuk ngedit
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
        options: {
            cors: {
                origin: ['*']
            }
        }
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
        options: {
            cors: {
                origin: ['*']
            }
        }
    }
];

module.exports = routes;