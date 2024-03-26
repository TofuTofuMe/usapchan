const nlpHandler = require('../utils/nlpHandler');
const {Corpus, UnhandledCorpus, Suggestion} = require('../utils/sqlHandler');
const {nanoid} = require('nanoid');

exports.trainNlp = async (req, res) => {
    try {
        await nlpHandler.trainNlp();

        res.status(200).json({
            success: true,
            message: 'Successfully trained NLP!',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error training NLP.',
            error: error.message,
        });
    }
};

exports.sendChat = async (req, res) => {
    try {
        const {message} = req.body;
        const reply = await nlpHandler.processText(message);

        const matchedCorpus = await Corpus.findOne({
            where: {
                intent: reply.intent,
            },
        });

        if (matchedCorpus) {
            if (matchedCorpus.intent == 'None') {
                const duplicateQuery = await UnhandledCorpus.findOne({
                    where: {
                        query: message,
                    },
                });

                if (!duplicateQuery) {
                    await UnhandledCorpus.create({
                        query: message,
                    });
                }
            } else {
                await matchedCorpus.increment('queryCount', {by: 1});
            }
        }

        res.status(200).json({success: true, answer: reply.answer});
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error sending chat.',
            error: error.message,
        });
    }
};

exports.getChatSuggestions = async (req, res) => {
    try {
        const suggestions = await Suggestion.findAll({
            attributes: ['id', 'category', 'query'],
        });

        const chatSuggestions = [];

        suggestions.forEach((suggestion) => {
            const category = chatSuggestions.find(
                (item) => item.category === suggestion.category
            );
            const suggestionObj = {};

            if (!category) {
                suggestionObj.category = suggestion.category;
                suggestionObj.options = [suggestion.query];
            } else {
                category.options.push(suggestion.query);
                category.options.sort((a, b) => a.length - b.length);
            }

            if (Object.keys(suggestionObj).length) {
                chatSuggestions.push(suggestionObj);
            }
        });
        chatSuggestions.sort((a, b) => a.category.length - b.category.length);
        res.status(200).send(chatSuggestions);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching suggestions.',
            error: error.message,
        });
    }
};

exports.addCorpus = async (req, res) => {
    try {
        const {lang, intent, query, answer} = req.body;

        await Corpus.create({
            lang,
            intent: intent ? intent : nanoid(10),
            query,
            answer,
        });
        res.status(201).redirect('/chat/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error adding answer.',
            error: error.message,
        });
    }
};

exports.addSuggestion = async (req, res) => {
    try {
        const {category, suggestionQuery} = req.body;

        await Suggestion.create({
            category: category.trim(),
            query: suggestionQuery.trim(),
        });

        res.status(201).redirect('/chat/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error adding suggestion.',
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
                'queryCount',
            ],
        });
        res.status(200).send(corpora);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching corpus.',
            error: error.message,
        });
    }
};

exports.getUnhandledCorpus = async (req, res) => {
    try {
        const corpora = await UnhandledCorpus.findAll({
            attributes: [['id', 'unhandledCorpusId'], 'query'],
        });
        res.status(200).send(corpora);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching unhandled query corpus.',
            error: error.message,
        });
    }
};

exports.getSuggestions = async (req, res) => {
    try {
        const suggestions = await Suggestion.findAll({
            attributes: [
                ['id', 'suggestionId'],
                'category',
                ['query', 'suggestionQuery'],
            ],
        });
        res.status(200).send(suggestions);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching suggestions.',
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
            message: 'Error updating corpus.',
            error: error.message,
        });
    }
};

exports.updateSuggestion = async (req, res) => {
    try {
        const {suggestionId, category, suggestionQuery} = req.body;

        await Suggestion.update(
            {category: category, query: suggestionQuery},
            {where: {id: suggestionId}}
        );
        res.status(200).redirect('/chat/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating suggestion.',
            error: error.message,
        });
    }
};

exports.dropCorpus = async (req, res) => {
    try {
        const {corpusId, lang, intent} = req.body;

        const corpus = await Corpus.findOne({
            where: {
                id: corpusId,
                lang: lang,
                intent: intent,
            },
        });
        if (!corpus) {
            return res.status(400).json({
                success: false,
                message: 'Corpus not found.',
            });
        }
        await corpus.destroy();
        res.status(200).redirect('/chat/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error dropping corpus.',
            error: error.message,
        });
    }
};

exports.dropSuggestion = async (req, res) => {
    try {
        const {suggestionId, category} = req.body;

        const suggestion = await Suggestion.findOne({
            where: {
                id: suggestionId,
                category: category,
            },
        });

        if (!suggestion) {
            return res.status(400).json({
                success: false,
                message: 'Suggestion not found',
            });
        }
        await suggestion.destroy();
        res.status(200).redirect('/chat/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error dropping suggestion.',
            error: error.message,
        });
    }
};
