const keytar = require('keytar');

keytar.findCredentials('FooBar').then(console.log);