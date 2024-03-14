document.getElementById('translateBtn').addEventListener('click', function () {
    const text = document.getElementById('originalTxt').value;
    const targetLanguage = document.getElementById('language').value;
    fetch(`/translate?text=${encodeURIComponent(text)}&target=${encodeURIComponent(targetLanguage)}`)
        .then(response => response.json())
        .then(data => {
            if (data.translation) {
                document.getElementById('result').textContent = data.translation;
            } else {
                alert('Translation failed: ' + data.error);
            }
        })
        .catch(error => console.error('Error translating text:', error));
});