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
        
    var nulls = null + null,
        booleans = false + true,
        undefs = undefined + false;

    // const SIMBOLO = Symbol();

    // imprimiendo valores
    console.log( '-----------------------------------'.cyan );
    console.log( 'ejemplo: ToNumber'.cyan.bold );
    console.log( '-----------------------------------'.cyan );
    print( 'null + null'           , nulls );
    print( 'false + true'          , booleans );
    print( 'undefined + false'     , undefs, true );
}