function dodajTekst() {
    const textInput = document.getElementById('textInput').value;
    const importanceSelect = document.getElementById('importanceSelect').value;
    const outputDiv = document.getElementById('output');

    const newTextElement = document.createElement('div');
    newTextElement.textContent = textInput;
    newTextElement.classList.add('text-item');

    const colors = {
        vazno: 'red',
        solidno: 'orange',
        nevazno: 'green'
    };

    newTextElement.style.color = colors[importanceSelect] || 'black';
    newTextElement.setAttribute('data-importance', importanceSelect);

    newTextElement.onclick = () => outputDiv.removeChild(newTextElement);

    const importances = ['vazno', 'solidno', 'nevazno'];
    let inserted = false;

    for (let child of outputDiv.children) {
        if (importances.indexOf(importanceSelect) < importances.indexOf(child.getAttribute('data-importance'))) {
            outputDiv.insertBefore(newTextElement, child);
            inserted = true;
            break;
        }
    }

    if (!inserted) {
        outputDiv.appendChild(newTextElement);
    }

    document.getElementById('textInput').value = '';
}

