'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var RestfulNightGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Have you been dreaming of a good nights sleep? Restful Night will help you sleep easy.'
    ));
  },

  writing: function(){
    this.dest.mkdir('app');

    this.src.copy('_package.json', 'package.json');
    this.src.copy('_bower.json', 'bower.json');
    this.src.copy('_app.js', 'app.js');

    this.src.copy('editorconfig', '.editorconfig');
    this.src.copy('jshintrc', '.jshintrc');
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = RestfulNightGenerator;
