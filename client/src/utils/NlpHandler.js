import {NlpManager} from 'node-nlp-rn';
import {
  AddBasicChatData,
  AddCollegeProfessors,
} from './nlp_data';

const manager = new NlpManager({languages: ['en'], forceNER: true});

const trainNlp = () => {
  manager.addAnswer('en', 'None', 'Sorry, I do not understand.');
  manager.addAnswer(
    'en',
    'None',
    'Could you try a different question? Try asking me about the College',
  );

  AddBasicChatData(manager);
  AddCollegeProfessors(manager);

  manager.train();
};

const processText = async (textInput, setTextOutput) => {
  const reply = await manager.process('en', textInput);
  setTextOutput(reply.answer);
  return reply;
};

export {trainNlp, processText};
