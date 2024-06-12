const express = require('express');
const mercatorio = require('./api/mercatorio');

const app = express();
const port = 3000;

app.use('/api/mercatorio', mercatorio);

app.listen(port, () => {
    console.log(`JMerc API Wrapper listening at http://localhost:${port}`);
});
