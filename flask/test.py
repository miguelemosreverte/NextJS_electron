from flask import Flask
from flask.ext.cors import CORS, cross_origin
import os
import sys

app = Flask(__name__)


app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/foo": {"origins": "http://localhost:port"}})


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/test_json')
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def test_json():
    output = ""
    script_path = os.path.dirname(os.path.realpath(sys.argv[0]))
    with open(script_path + '/test.json','r') as f: 
        output = f.read()
    return output

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
