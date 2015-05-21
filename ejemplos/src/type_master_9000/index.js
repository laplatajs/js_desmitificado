// vars
var type_masters_null,
    type_masters_nan,
    type_masters_cast,
    figlet,
    currentMasterIdx,
    typemasters = [];

// require'd
figlet = require( 'figlet' );
type_masters_null = require( 'null_example' );
type_masters_nan = require( 'nan_example' );
type_masters_cast = require( 'coercion_example' );

// preparation
typemasters.push( type_masters_null );
typemasters.push( type_masters_nan );
typemasters.push( type_masters_cast );

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
    console.log(idx)
    typemasters[ idx ].run();
}

module.exports.next = function (){
    if ( currentMasterIdx >= typemasters.length - 1 ){
        return;
    }
    currentMasterIdx += 1;
}


