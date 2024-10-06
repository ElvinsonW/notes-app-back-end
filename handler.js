const { nanoid } = require('nanoid');
const notes = require('./notes.js')

const addNoteHandler = (req,h) => {
    const { title, tags, body } = req.payload;

    const id = nanoid(16); // buat generate 16 char unik 
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title,tags,body, id, createdAt, updatedAt
    }

    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if(isSuccess){
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: {
                noteId: id
            },
        });
        response.code(201);
        return response
    }

    const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
    });
    response.code(500);
    return response;
};

const getAllNotesHandler = () => ({
    status: 'success',
    data: {
        notes,
    }
});

const getNoteByIdHandler = (req,h) => {
    const { id } = req.params;
    const note = notes.find((note) => note.id === id);
    if(note !== undefined){
        return {
            status: 'success',
            data: {
                note
            }
        };
    }
    const response = h.response({
        status: 'failed',
        message: 'Catatan Tidak Ditemukan'
    });
    response.code(404);
    return response;
};



const editNoteByIdHandler = (req,h) => {
    const { id } = req.params;
    const { title, tags, body } = req.payload;
    const updatedAt = new Date().toISOString();

    const index = notes.findIndex((n) => n.id === id);

    if(index !== -1){
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt,
        };
        
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil di rubah'
        });
        response.code(200);
        return response
    }

    const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan'
    });
    response.code(404);
    return response
}

const deleteNoteByIdHandler = (req,h) => {
    const { id } = req.params;
    const index = notes.findIndex((n) => n.id === id);
    if(index !== -1){
        notes.splice(index,1);
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: {
                notes,
            }
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan'
    });
    response.code(404);
    return response;
}

module.exports = { 
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler, 
    editNoteByIdHandler,
    deleteNoteByIdHandler 
};