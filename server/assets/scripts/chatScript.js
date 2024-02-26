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
            'dropCorpus',
            'corpusForm',
            'add_corpus',
            'add_corpus'
        );
        setupChat('message', 'sendChat', 'response');
    });
});
