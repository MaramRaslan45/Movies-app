

const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join( 'build', 'index.html');
const port = process.env.PORT || 3000;
app.use(express.static(path.join( 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath));
 });
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });
