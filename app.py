from flask import Flask
import json
from flask_cors import CORS, cross_origin

app = Flask(__name__)  # __name__ est une variable gérée par python
CORS(app)

@app.route('/')  # représente la racine du site
def index():  # le nom n’est pas important pour le système
    return '<p>Hello, World!</p>'

if __name__ == "__main__":  # lance l’application
    app.run(debug=True)
