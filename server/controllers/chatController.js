const nlpHandler = require('../utils/nlpHandler');
const {Corpus} = require('../utils/sqlHandler');

exports.trainNlp = async (req, res) => {
    try {
        await nlpHandler.trainNlp();

        res.status(200).end();
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error training NLP',
            error: error.message,
        });
    }
};

exports.addCorpus = async (req, res) => {
    try {
        const {lang, intent, query, answer} = req.body;

        await Corpus.create({
            lang,
            intent,
            query,
            answer,
        });
        res.status(201).redirect('/chat/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error adding answer',
            error: error.message,
        });
    }
};

exports.getCorpus = async (req, res) => {
    try {
        const corpora = await Corpus.findAll({
            attributes: [
                ['id', 'corpusId'],
                'lang',
                'intent',
                'query',
                'answer',
            ],
        });
        res.status(200).send(corpora);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching corpus',
            error: error.message,
        });
    }
};

exports.updateCorpus = async (req, res) => {
    try {
        const {corpusId, lang, intent, query, answer} = req.body;

        await Corpus.update(
            {lang: lang, intent: intent, query: query, answer: answer},
            {where: {id: corpusId}}
        );
        res.status(200).redirect('/chat/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating corpus',
            error: error.message,
        });
    }
};

exports.sendChat = async (req, res) => {
    try {
        const {message} = req.body;
        const reply = await nlpHandler.processText(message);

        res.status(200).json(reply);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error sending chat',
            error: error.message,
        });
    }
};

exports.dropCorpus = async (req, res) => {
    try {
        const {corpusId, lang, intent, query, answer} = req.body;

        const corpus = await Corpus.findOne({
            where: {
                id: corpusId,
                lang: lang,
                intent: intent,
                query: query,
                answer: answer,
            },
        });
        if (!corpus) {
            return res.status(400).json({
                success: false,
                message: 'Corpus not found',
            });
        }
        await corpus.destroy();
        res.status(200).redirect('/chat/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error dropping corpus',
            error: error.message,
        });
    }
};
