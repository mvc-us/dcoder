from flask import Flask, render_template

@app.route('/')
@app.route('/index.html')
@app.route('/analytics')
def dashboard():
    return render_template('index.html')

@app.errorhandler(404)
def page_not_found(error):
    return render_template('login.html'), 404

if __name__ == '__main__':
    app.run()