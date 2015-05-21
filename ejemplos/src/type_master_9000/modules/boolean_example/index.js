var colour = require('colour');

//colour.mode = 'browser';

var print = function( key, data, isBad ){
    isBad = isBad || false;
    var msg = '';
    msg = '\t' + key + ' >> ' + data;
    if ( isBad ){
        console.log( msg.underline.magenta );

    }else{
        console.log( msg.green );
    }
}

module.exports.run = function (){

    var a = new Boolean( false );
    var b = new String( "" );
    var resul = Boolean( a && b );

    console.log( '-----------------------------------'.cyan );
    console.log( 'ejemplo: Falsy???'.cyan.bold );
    console.log( '-----------------------------------'.cyan );
    print( 'a = new Boolean( false )', a );
    print( 'b = new String( "" )', b );
    print( 'Boolean( a && b )', resul, true );

    var z = [];
    var x = {};
    var y = function(){};
    var resul2 = Boolean( z && x && y );
    
    console.log( '-----------------------------------'.cyan );
    console.log( 'ejemplo: Truthy'.cyan.bold );
    console.log( '-----------------------------------'.cyan );
    print( '[]', a );
    print( '{}', b );
    print( 'function(){}', y );
    print( 'Boolean( z && x && y )', resul2, true );

}