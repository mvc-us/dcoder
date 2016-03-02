from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/index.html')
def home():
    return render_template('index.html')

@app.route('/post.html')
@app.route('/post')
def post():
    return render_template('post.html')

@app.errorhandler(404)
def page_not_found(error):
    return render_template('login.html'), 404

if __name__ == '__main__':
    app.run()