import os
from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
import requests

load_dotenv()

google_api_key = os.getenv('API_KEY')

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/translate')
def translate():
    text = request.args.get('text')
    target_language = request.args.get('target')
    api_key = google_api_key
    url = "https://translation.googleapis.com/language/translate/v2"
    data = {
        'q': text,
        'target': target_language,
        'format': 'text'
    }
    response = requests.post(url, params={'key': api_key}, json=data)
    if response.status_code == 200:
        translation = response.json().get('data', {}).get('translations', [{}])[0].get('translatedText', '')
        return jsonify({'source': text, 'translation': translation})
    else:
        return jsonify({'error': 'Failed to translate text', 'status_code': response.status_code}), 500

if __name__ == '__main__':
    app.run()
