const AddBasicPrompts = manager => {
  manager.addDocument('en', 'Hi', 'chat.greet');
  manager.addDocument('en', 'Hey', 'chat.greet');
  manager.addDocument('en', 'Hello', 'chat.greet');
  manager.addDocument('en', 'What are you?', 'chat.ask.usapchan');
};

const AddBasicReplies = manager => {
  manager.addAnswer('en', 'chat.greet', 'Hello!');
  manager.addAnswer('en', 'chat.greet', 'Hi!');
  manager.addAnswer(
    'en',
    'chat.ask.usapchan',
    'I am Usapchan, a chat assistant for all your inquiries!',
  );
};

const AddBasicChatData = manager => {
  AddBasicPrompts(manager);
  AddBasicReplies(manager);
};

export default AddBasicChatData;
