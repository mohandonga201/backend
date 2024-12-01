const messages = [];

const getMessages = () => messages;

const addMessage = (message) => {
  messages.push({ message });
};

module.exports = { getMessages, addMessage };

