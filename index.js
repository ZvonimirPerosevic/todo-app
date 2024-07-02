function dodajTekst() {
    var input = document.getElementById('textInput').value;
    var outputDiv = document.getElementById('output');
    var p = document.createElement('li');
    p.textContent = input;
    outputDiv.appendChild(p);
    document.getElementById('textInput').value = '';
}

