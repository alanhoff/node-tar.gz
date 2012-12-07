# node-tar.gz main class
#
# @version 0.0.1
# @author Alan Hoffmeister <alan@cranic.com.br>
# @date 2012-12-06 10:22 AM GTM - 3:00

targz = require './targz'
program = require 'commander'

program
    .version('0.0.1')
    .option('-c, --compress', 'Compress folder to archive')
    .option('-x, --extract', 'Extract archive to folder')
    .option('-l, --level [n]', 'Compression level from 0-9. Default 6.', parseInt)
    .option('-m, --memory [n]', 'Memory allocation level from 1-9. Default 6.', parseInt)
    .option('-n, --noproprietary', 'Remove proprietary headers.')

program.on '--help', ->
    console.log '  Examples:'
    console.log ''
    console.log '    Default compression'  
    console.log '    $ targz -c /folder/to/compres /path/to/archive.tar.gz'
    console.log '' 
    console.log '    Extracting some archive'
    console.log '    $ targz -x /path/to/archive.tar.gz /destination/folder'
    console.log ''
    console.log '    Maximum compression'  
    console.log '    $ targz -l 9 -m 9 -c /folder/to/compres /path/to/archive.tar.gz'
    console.log ''

program.parse process.argv

if program.level
    level = program.level
else
    level = 6

if program.memory
    memLevel = program.memory
else
    memLevel = 6

if program.noproprietary
    proprietary = false
else
    proprietary = true

if program.compress
    console.log 'Compressing...'
    compress = new targz(level, memLevel, proprietary).compress program.args[0], program.args[1], ->
        console.log 'Done!'
else if program.extract
    console.log 'Extracting...'
    compress = new targz().extract program.args[0], program.args[1], ->
        console.log 'Done!'