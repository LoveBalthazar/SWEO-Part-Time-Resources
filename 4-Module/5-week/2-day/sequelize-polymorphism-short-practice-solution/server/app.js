// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Express using json - DO NOT MODIFY
app.use(express.json());

// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 8000;
app.listen(port, () => console.log('Server is listening on port', port));
