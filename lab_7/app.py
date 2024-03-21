from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import pyttsx3

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/textToSpeech')
def speech():
    text = request.args.get('text')

    if not text:
        return jsonify({'error': 'No text provided'}), 400

    engine = pyttsx3.init()
    engine.say(text)
    engine.runAndWait()
    return jsonify({'success': True, 'message': 'Speech synthesis completed'})

if __name__ == '__main__':
    app.run()
