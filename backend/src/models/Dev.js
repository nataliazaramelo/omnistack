const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    user: {
        type: String,
        required: false,
    },
    bio: String,
    avatar: {
        type: String,
        required: false,
    },

    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    
}, {
    timestamps: true, // preenchido automaticamente pelo mongoose createdAt armazena de forma auto a criação de um registo, updatedAt armazana a data da ultima alteração
});

module.exports = model('Dev', DevSchema);
