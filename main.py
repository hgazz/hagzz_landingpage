import os
from flask import Flask, send_from_directory, abort

app = Flask(__name__)
BASE = os.path.dirname(os.path.abspath(__file__))

@app.route('/')
def index():
    return send_from_directory(BASE, 'index.html')

@app.route('/<path:filename>')
def serve(filename):
    try:
        return send_from_directory(BASE, filename)
    except:
        abort(404)
