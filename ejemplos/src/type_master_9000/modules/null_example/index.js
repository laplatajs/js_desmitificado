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
    var items = [],
        palabra = "palabra",
        numero = 5,
        booleano = true,
        no_definido = undefined,
        objeto = {},
        nulo = null;

    // const SIMBOLO = Symbol();

    // imprimiendo valores
    console.log( '-----------------------------------'.cyan );
    console.log( 'ejemplo: null no es null'.cyan.bold );
    console.log( '-----------------------------------'.cyan );
    print( 'palabra'     , typeof palabra );
    print( 'numero'      , typeof numero );
    print( 'booleano'    , typeof booleano );
    print( 'objeto'      , typeof objeto );
    print( 'no_definido' , typeof no_definido );
    print( 'nulo'        , typeof nulo, true );

}