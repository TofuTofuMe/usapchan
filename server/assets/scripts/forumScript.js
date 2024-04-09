fetchTableData('ForumPosts').then(() => {
    setupTable('ForumPosts', '#forum-posts-table-body').then(() => {
        setupSelectorOptions('postSelect', 'ForumPosts', 'postId');
        handleSelectorChange(
            'postSelect',
            ['approved', 'poster', 'title', 'content'],
            'postId',
            'updatePost',
            'dropPost'
        );

        const postSelect = document.getElementById('postSelect');
        const approvalSelect = document.getElementById('approved');
        const approveButton = document.getElementById('approvePost');
        const dropButton = document.getElementById('dropPost');

        postSelect.addEventListener('change', () => {
            if (postSelect.value == 'new') {
                approvalSelect.disabled = true;
                approvalSelect.value = 'false';
                approveButton.disabled = true;
                approveButton.innerHTML = 'Approve';
                dropButton.disabled = true;
            } else {
                approvalSelect.disabled = false;
                approveButton.disabled = false;
                if (approvalSelect.value == 'true') {
                    approveButton.innerHTML = 'Unapprove';
                    approveButton.classList.replace('bg-black', 'bg-red-900');
                    approveButton.classList.replace(
                        'hover:bg-gray-300',
                        'hover:bg-red-600'
                    );
                    approveButton.setAttribute(
                        'formaction',
                        `post/${postSelect.value}/unapprove_post`
                    );
                } else {
                    approveButton.innerHTML = 'Approve';
                    approveButton.classList.replace('bg-red-900', 'bg-black');
                    approveButton.classList.replace(
                        'hover:bg-red-600',
                        'hover:bg-red-300'
                    );
                    approveButton.setAttribute(
                        'formaction',
                        `post/${postSelect.value}/approve_post`
                    );
                }

                dropButton.disabled = false;
                dropButton.setAttribute(
                    'formaction',
                    `post/${postSelect.value}/drop_post`
                );
            }
        });
    });
});

window.onerror = () => {
    return true;
};
