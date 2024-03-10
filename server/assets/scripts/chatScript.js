fetchTableData('Corpus').then(() => {
    const answerEditor = new EasyMDE({
        element: document.getElementById('answer'),
        toolbar: [
            'bold',
            'italic',
            'heading',
            'quote',
            'unordered-list',
            'ordered-list',
            'link',
            'image',
            'table',
            'preview',
            'side-by-side',
            'fullscreen',
            'guide',
        ],
        forceSync: true,
    });

    setupTable('Corpus', '#corpus-table-body').then(() => {
        setupTable('UnhandledCorpus', '#unhandled-corpus-table-body');
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

        const answerField = document.getElementById('answer');

        answerField.addEventListener('change', () => {
            answerEditor.value(answerField.value);
        });
    });
});
