

$( document ).ready( function(){
	$( ' li.q' ).on( 'click', function(){
		$( this ).next().slideToggle( 500 );

		var img = $( this ).children( 'img' );
		//remove the 'rotate'class except the active
		$( 'img' ).not( img ).removeClass( 'rotate' );

		img.toggleClass( 'rotate' );

	} );

} );
