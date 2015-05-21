var colour = require('colour');

//colour.mode = 'browser';

var print = function( key, data, isBad ){
    isBad = isBad || false;
    var msg = '';
    msg = '\t' + key + ' >> ' + data;
    if ( isBad ){
        console.log( msg.underline.red );

    }else{
        console.log( msg.green );
    }
}

module.exports.run = function (){

    var a = 2 * "hola"; // NaN

    console.log( '-----------------------------------'.cyan );
    console.log( 'ejemplo: NaN'.cyan.bold );
    console.log( '-----------------------------------'.cyan );
    print( 'a = 2 * “hola”', a );
    print( 'typeof a', typeof a, true );

}