# **node-tar.gz**
Native gzip compression and decompression utility for Node.js.

### **Installation**

    npm install tar.gz

### **Usage**

At the moment this package can only compress a folder and everything that
is inside it. To compress something is easy:

    var targz = require('tar.gz');
    var compress = new targz().compress('/path/to/compress', '/path/to/store.tar.gz', function(err){
        if(err)
            console.log(err);

        console.log('The compression has ended!');
    });

With the same easy you can extract a gziped file:

    var targz = require('tar.gz');
    var compress = new targz().extract('/path/to/stored.tar.gz', '/path/to/extract', function(err){
        if(err)
            console.log(err);

        console.log('The extraction has ended!');
    });

You can pass some configuration parameters to the constructor before compress:

    var targz = require('tar.gz');
    var compress = new targz({
        level : 6 //the compression level from 0-9, default: 6
        memLevel : 6 //the memory allocation level from 1-9, default: 6
        proprietary : false //to include or not proprietary headers, default: true
    });

### **TODO**

 * Vows.js tests
 * Single file compression
 * Add more todos...


### **License (MIT)**

Copyright (C) 2012 Cranic Tecnologia e Informática LTDA

Permission is hereby granted, free of charge, to any person obtaining 
a copy of this software and associated documentation files 
(the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, 
publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be 
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS 
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.