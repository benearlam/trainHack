var app = (function(){
	var self = this;
	
	function play(){
		document.getElementById('bingo').volume+=1;
		document.getElementById('bingo').play();		
	}
	self.init = function(){
		$("#play").click(play);
	};
	
	return self;
})();

$(app.init);