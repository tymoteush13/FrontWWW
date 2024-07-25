from flask import Flask, jsonify # type: ignore
from flask_cors import CORS # type: ignore

app = Flask(__name__) #tworzy instancje aplikacji
cors = CORS(app, origins="*")


@app.route("/api/users", methods = ['GET'])

def users():
    return jsonify(
        {
            "users":[
                "arpan",
                "zach",
                "jessie"
            ]
        }
    )


if __name__ == "__main__":
    app.run(debug=True, port=8080)