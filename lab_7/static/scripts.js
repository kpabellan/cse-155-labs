document.getElementById('speakBtn').addEventListener('click', function () {
    const text = document.getElementById('originalTxt').value;
    fetch(`/textToSpeech?text=${encodeURIComponent(text)}`)
});