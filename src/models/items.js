const { conn } = require('../config/conn');

const getItems = async () => {
    try {
        const[rows] = await conn.query('SELECT * FROM items;');
        return rows;
    }   catch(error) {
        throw error;
    }   finally {
        conn.releaseConnection();
    }
}

module.exports = {
    getItems
}