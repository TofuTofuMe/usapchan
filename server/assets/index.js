async function fetchTableData(tableId) {
    return new Promise((resolve, reject) => {
        switch (tableId) {
            case 'Courses':
                request = new Request('/college/list_courses', {method: 'GET'});
                break;
            case 'Faculties':
                request = new Request('/college/list_faculties', {
                    method: 'GET',
                });
                break;
            case 'Schedules':
                request = new Request('/college/list_schedules', {
                    method: 'GET',
                });
                break;
            case 'Corpus':
                request = new Request('/chat/list_corpus', {
                    method: 'GET',
                });
                break;
            default:
                reject(new Error('Invalid table ID given'));
                break;
        }
        fetch(request)
            .then((response) => response.json())
            .then((responseData) => {
                resolve(responseData);
            })
            .catch((error) => {
                console.error('Error fetching data table: ', error);
                reject(error);
            });
    });
}

async function setupTable(tableId, tableBodyId) {
    try {
        const responseData = await fetchTableData(tableId);
        const tableBody = document.querySelector(tableBodyId);
        var dataRow = 0;

        if (responseData.length === 0) {
            responseData.push({
                blankmsg: NaN,
            });
        }

        responseData.forEach((entry) => {
            const tableRow = document.createElement('tr');
            for (const data in entry) {
                const tableData = document.createElement('td');
                tableData.setAttribute('id', `${data}-${dataRow}`);
                tableData.textContent = entry[data];
                tableRow.appendChild(tableData);
            }
            tableRow.setAttribute('id', `entry-${dataRow}`);
            tableBody.appendChild(tableRow);
            dataRow++;
        });
    } catch (error) {
        console.error('Error setting up table: ', error);
    }
}

async function setupSelectorOptions(selectorId, tableId, tableColumn) {
    try {
        const selector = document.getElementById(selectorId);
        const responseData = await fetchTableData(tableId);

        responseData.forEach((entry) => {
            var option = new Option(entry[tableColumn], entry[tableColumn]);
            selector.add(option);
        });
    } catch (error) {
        console.error('Error setting up selector: ', error);
    }
}

function handleSelectorChange(
    selectorId,
    formFieldIds,
    referenceFieldId,
    submitButtonId,
    dropButtonId
) {
    try {
        const selector = document.getElementById(selectorId);
        const referenceField = document.getElementById(referenceFieldId);
        const submitButton = document.getElementById(submitButtonId);
        const dropButton = document.getElementById(dropButtonId);

        selector.addEventListener('change', () => {
            formFieldIds.forEach((fieldId) => {
                const formField = document.getElementById(fieldId);

                if (selector.value === 'new') {
                    formField.value = '';
                } else {
                    formField.value = document.getElementById(
                        `${fieldId}-${selector.selectedIndex - 1}`
                    ).innerHTML;
                }
            });

            if (selector.value !== 'new') {
                submitButton.textContent = 'Update';
                referenceField.readOnly = true;
                dropButton.disabled = false;
            } else {
                submitButton.textContent = 'Submit';
                referenceField.readOnly = false;
                dropButton.disabled = true;
            }
        });
    } catch (error) {
        console.error('Error handling selector: ', error);
    }
}

function setFormAction(
    selectorId,
    resetButtonId,
    submitButtonId,
    dropButtonId,
    formId,
    addUrl,
    updateUrl
) {
    const selector = document.getElementById(selectorId);
    const resetButton = document.getElementById(resetButtonId);
    const submitButton = document.getElementById(submitButtonId);
    const dropButton = document.getElementById(dropButtonId);
    const form = document.getElementById(formId);

    selector.addEventListener(
        'change',
        () => {
            switch (selector.value) {
                case 'new':
                    form.action = addUrl;
                    break;
                default:
                    form.action = updateUrl;
                    break;
            }
        },
        {once: false}
    );
    resetButton.addEventListener('click', () => {
        selector.value = 'new';
        form.action = addUrl;
        submitButton.textContent = 'Submit';
        dropButton.disabled = true;
    });
}

function setupChat(chatBoxId, sendButtonId, replyBoxId) {
    try {
        const chatBox = document.getElementById(chatBoxId);
        const sendButton = document.getElementById(sendButtonId);
        const replyBox = document.getElementById(replyBoxId);

        sendButton.addEventListener('click', () => {
            fetch('/chat/send_chat', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({message: chatBox.value}),
            })
                .then((res) => res.json())
                .then((res) => {
                    replyBox.value = res.answer ? res.answer : 'No answer';
                });
        });
    } catch (error) {
        console.error('Error setting up chat behaviour: ', error.message);
    }
}
