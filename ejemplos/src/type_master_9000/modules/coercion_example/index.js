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
    var a = 42;
    var b = a + "";
    var c = String( a );

    console.log( '-----------------------------------'.cyan );
    console.log( 'ejemplo: Coerción'.cyan.bold );
    console.log( '-----------------------------------'.cyan );
    print( 'var a = 42; var b = a + ""; // coercion implicita', typeof b );
    print( 'String( a ); // coercion explicita', typeof c );

}