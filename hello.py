from flask import Flask, render_template

app = Flask(__name__)

@app.route('/index.html')
def home():
    return render_template('index.html')

@app.route('/debug')
def debug():
	return render_template('base2.html')

@app.route('/')
@app.route('/intro')
def intro():
	return render_template('intro.html')

@app.route('/contract')
def contract():
	return render_template('contract.html')

# @app.route('/upload')
# def post():
#     return render_template('upload.html')

@app.route('/upload')
def upload():
	return render_template('upload2.html')

@app.errorhandler(404)
def page_not_found(error):
    return render_template('index.html'), 404

if __name__ == '__main__':
    app.run(debug=True)