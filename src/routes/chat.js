const express = require('express');
const messageStore = require('../utils/messageStore');
const router = express.Router();

router.get('/messages', (req, res) => {
  res.json(messageStore.getMessages());
});

router.post('/messages', (req, res) => {
  const { message } = req.body;
  messageStore.addMessage(message);
  res.status(201).send({ success: true });
});

module.exports = router;

