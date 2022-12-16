from flask import Flask,jsonify,request

app = Flask(__name__)

@app.route('/')
def index():
    data = {
        "Modules": 15,
        "Subject" : "Data orihgdpote and Algorithms"
    }
    return jsonify(data)
    