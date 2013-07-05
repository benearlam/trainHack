var app = (function(){
	var self = this;
	
	function play(){
		$('#bingo').volume+=1;
		$('#bingo').play();		
	}
	self.init = function(){
		$("#play").click(play);
	};
	
	return self;
})();

$(app.init);