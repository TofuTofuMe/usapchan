fetchTableData('Corpus').then(() => {
    setupTable('Corpus', '#chat-table-body').then(() => {
        setupSelectorOptions('corpusSelect', 'Corpus', 'corpusId');
        handleSelectorChange(
            'corpusSelect',
            ['corpusId', 'lang', 'intent', 'query', 'answer'],
            'corpusId',
            'submitCorpus',
            'dropCorpus'
        );
        setFormAction(
            'corpusSelect',
            'resetCorpus',
            'submitCorpus',
            'dropCorpus',
            'chatForm',
            'add_corpus',
            'update_corpus'
        );
        setupChat('message', 'sendChat', 'response');
        setupTraining('trainResult', 'trainNlp');
    });
});
