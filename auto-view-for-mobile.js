(function(){
	var viewportEl = document.querySelector('meta[name="viewport"]'),
		minWidth = 320,
		scale = window.screen.width / 320,
		content = 'width=' + minWidth + ', initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=no';
	if(viewportEl){
		viewportEl.setAttribute('content',content);
	}else{
		viewportEl = document.createElement('meta');
        viewportEl.setAttribute('name', 'viewport');
        viewportEl.setAttribute('content', content);
        document.head.appendChild(viewportEl);
	}
})();