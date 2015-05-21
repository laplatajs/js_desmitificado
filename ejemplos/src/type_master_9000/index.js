// vars
var type_masters_null,
    type_masters_nan,
    type_masters_cast,
    type_masters_tonumber,
    figlet,
    currentMasterIdx,
    typemasters = [];

// require'd
figlet = require( 'figlet' );
type_masters_null = require( './modules/null_example' );
type_masters_nan = require( './modules/nan_example' );
type_masters_cast = require( './modules/coercion_example' );
type_masters_tonumber = require( './modules/tonumber_example' );

// preparation
typemasters.push( type_masters_null );
typemasters.push( type_masters_nan );
typemasters.push( type_masters_cast );
typemasters.push( type_masters_tonumber );

currentMasterIdx = 0;

// intro
figlet.text('Type Master 9000', {
    font: 'Doom',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Type Master 9000');
        return;
    }
    console.log(data);
});

// some action
module.exports.run = function ( idx ){
    idx = ( typeof idx === 'undefined' )? currentMasterIdx : idx;
    if ( idx > typemasters.length ){
        console.log( 'No existe ese ejemplo.' );
        return;
    }
    typemasters[ idx ].run();
}

module.exports.next = function (){
    if ( currentMasterIdx >= typemasters.length - 1 ){
        return;
    }
    currentMasterIdx += 1;
}



