const {NlpManager} = require('node-nlp');
const corpus = require('./corpusHandler');

const fs = require('fs');

const modelPath = __dirname + '/collegeData.nlp';

const nlpManager = new NlpManager({
    languages: ['en'],
    forceNER: false,
    modelFileName: modelPath,
});

const initNlp = async () => {
    try {
        if (fs.existsSync(modelPath)) {
            console.log('Pretrained model exists, loading...');
            nlpManager.load(modelPath);
        } else {
            console.log('Found no pretrained model, training...');
            await trainNlp();
        }
        console.log('Model loaded!');
    } catch (error) {
        console.error('Error initialising NLP model: ', error.message);
    }
};

const trainNlp = async () => {
    try {
        console.log('Feeding data...');
        await corpus.addDatabaseCorpus(nlpManager);
        await corpus.addFaculty(nlpManager);
        console.log('Training nlpManager from loaded data...');
        await nlpManager.train();

        await nlpManager.save(modelPath);
        console.log('NLP model trained!');
    } catch (error) {
        console.error('Error training NLP: ', error.message);
    }
};

const processText = async (text) => {
    try {
        const outputText = await nlpManager.process('en', text);

        return outputText;
    } catch (error) {
        console.error('Error processing text: ', error.message);
    }
};

module.exports = {
    initNlp,
    trainNlp,
    processText,
};
