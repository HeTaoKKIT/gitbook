var $ = require('jquery');
var url = require('url');
var path = require('path');

var state = {};

state.update = function(dom) {
    var $book = $(dom.find('.book'));

    state.$book = $book;
    state.level = $book.data('level');
    state.basePath = $book.data('basepath');

    // If book is multilingual, language of this book
    state.innerlanguage = $book.data('innerlanguage');

    // Date of build
    state.revision = $book.data('revision');

    // Original path of the file
    state.filepath = $book.data('filepath');

    // Title of the chapter
    state.chapterTitle = $book.data('chapter-title');

    // Absolute url to the root of the book (inner book)
    state.root = url.resolve(
        location.protocol+'//'+location.host,
        path.dirname(path.resolve(location.pathname.replace(/\/$/, '/index.html'), state.basePath))
    );

    // Absolute root to the language (for multilingual book)
    state.bookRoot = state.innerlanguage? url.resolve(state.root, '..') : state.root;
};

state.update($);

module.exports = state;
