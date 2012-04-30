if (typeof require != 'undefined') {
  var sage = require('..')
    , expect = require('expect.js')
    , fs = require('fs');
}

describe('sage', function(){

  if (fs) describe('package', function(){

    before(function(done){
      var self = this;
      fs.readFile('package.json', function(err, source){
        self.source = source.toString();
        done(err);
      });
    });

    before(function(){
      this.package = JSON.parse(this.source);
    });

    it('should match package.json version', function(){
      expect(sage).to.have.property('version', this.package.version);
    });

  });

});
