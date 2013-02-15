(function( $ ){
	// DEFAULT VARIABLES
	var columnizeOpts = {
		debug: false,
		width: 210,
		height: 300
	};

	var methods = {
		// GET COLUMNS (INT)
		getColumns : function( args ) {
			if(args === undefined) args = {};
			if(args.width != undefined) columnizeOpts.width = args.width;
			if(args.height != undefined) columnizeOpts.height = args.height;
			columnizeOpts.debug = true;
			
			return methods.columnize.apply(this);
		},
		
		// DEFAULT COLUMNIZE
		columnize : function( args ) {
			var $this_arr = $(this), nCols = 0, totalH;
			if(args === undefined) args = {};
			if(args.width != undefined) columnizeOpts.width = args.width;
			if(args.height != undefined) columnizeOpts.height = args.height;

			var actualCol = 0;
			$this_arr.each(function() {
				actualCol = 0;
				var $self = $(this);
				
				if(!columnizeOpts.debug) {
					nCols = methods.getColumns.apply($self);
					columnizeOpts.debug = false;
				}
			
				var style = "height:"+columnizeOpts.height+"px; width:"+columnizeOpts.width+"px;",
					everyP = $self.find('p'),
					divCont =   $("<div></div>").hide().append(everyP),
					divTmp =    $("<div></div>").attr("id", "flowColumnTmp"),
					divTmpPar = $("<div></div>").attr("id", "flowColumnTmpPar");
				$(divCont).add(divTmp).add(divTmpPar).addClass("flowColumn").attr("style", style);
				$('body').append(divCont, divTmp, divTmpPar);
				$self.html("");
				
				for(var i=0 ; i<nCols ; i++)
					$self.append($("<div></div>").addClass("flowColumn c"+i).attr("style", style));
				
				totalH = 0;
				$('#flowColumnTmp').show();
				$(divCont).add(divTmpPar).show();
				divCont.find('p').each(function() {
					var thisH = $(this).height() + parseInt($(this).css('paddingTop')) + parseInt($(this).css('paddingBottom'));
					totalH += thisH;
					if(totalH > columnizeOpts.height) {
						var ps = splitP($(this), (columnizeOpts.height - (totalH - thisH)));
						var testElem = $('#flowColumnTmp').html(ps[1]).find("p:first");
						totalH = testElem.height() + parseInt(testElem.css('paddingTop')) + parseInt(testElem.css('paddingBottom'));
						
						if(!columnizeOpts.debug) for(var i=0 ; i<=1 ; i++) $self.find('.c'+(actualCol+i)).append( ps[i] );
						actualCol ++;
					} else {
						$self.find('.c'+actualCol).append($(this));
					}
				});
				
				$("#flowColumnTmp, #flowColumnTmpPar").add(divCont).remove();
				if(columnizeOpts.debug) $self.html(everyP);
			});
			
			if(columnizeOpts.debug) columnizeOpts.debug = false;
			return actualCol+1;
		}
	};

	$.fn.columnize = function( method ) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.columnize.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.columnize' );
		}
	};
  
	// SPLIT A PARAGRAPH IN TWO
	function splitP(p, sizeLeft){
		var words = p.html().split(" "), p1 = "", p2 = "", classe = "", firstText = "";
		$("#flowColumnTmpPar, #flowColumnTmpParP").html("");
		
		if(p.attr("class") != undefined)
			classe = " class='"+p.attr("class")+"'";
		
		$('#flowColumnTmpPar').append( $("<p "+classe+" id='flowColumnTmpParP'></p>") );
		
		while(words.length > 0) {
			$('#flowColumnTmpParP').append(words[0] + " ");
			
			if($('#flowColumnTmpParP').height()+1 >= sizeLeft) {
				p1 = $('#flowColumnTmpParP').html();
				$('#flowColumnTmpParP').html("");
				while(words.length > 0) {
					$('#flowColumnTmpParP').append(words[0] + " ");
					words.shift();
				}
				p2 = $('#flowColumnTmpParP').html();
			} else {
				firstText += words[0] + " ";
				words.shift();
			}
		}
		
		return new Array("<p"+classe+">"+firstText+"</p>", "<p"+classe+">"+p2+"</p>");
	}
})( jQuery );
