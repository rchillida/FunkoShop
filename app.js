const express = require('express');
const app = express();
const PORT = 3001;

app.get('/home', (req, res) => res.send('Server corriendo desde express al home'));
app.get('/', (req, res) => res.send('pong'));

app.listen(PORT, () => console.log(`Escucho el puerto ${PORT}`));