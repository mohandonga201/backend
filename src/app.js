const express = require('express');
const chatRoutes = require('./routes/chat');
const app = express();

app.use(express.json());
app.use('/api', chatRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

