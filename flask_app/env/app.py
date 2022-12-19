from flask import Flask,jsonify,request

app = Flask(__name__)

@app.route('/')
def index():
    data = {
        "Modules": 15,
        # tou tzimakou thn mama
        "Subject" : "Data otidhpote and Algorithms"
    }
    return jsonify(data)
    