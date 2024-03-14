const express = require('express');
const multer = require('multer');
const { analyzeInvoice } = require('./mlService');

const app = express();
const port = process.env.PORT || 5000;

// Multer middleware for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Endpoint for processing uploaded invoice
app.post('/api/processInvoice', upload.single('file'), async (req, res) => {
    try {
        const invoiceData = await analyzeInvoice(req.file.path);
        res.json(invoiceData);
    } catch (error) {
        console.error('Error processing invoice:', error);
        res.status(500).json({ error: 'An error occurred while processing the invoice.' });
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
