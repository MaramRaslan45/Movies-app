

const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, 'build', 'index.html');
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });
