module.exports = function() {
    var js = './js/';
    var css = './css/';
    var config = {
        venderJs:[
            js + 'jquery-1.11.2.min.js',
            js + 'bootstrap.min.js'
        ],
        appJs: [
            js + 'app.js'
        ],
        allCss: [
            css + '*.css',
            '!' + css + '*.min.css',
            '!' + css + '*.css.map'
        ],
        minCss: css + 'all.min.css',
        minJs: js + 'all.js',
        js: js,
        css: css
    };
    return config;
};
