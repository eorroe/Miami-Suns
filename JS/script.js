function outputData(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'data.json');
	xhr.onreadystatechange  = function() {
		if(this.readystate == 4){
			for(var headline of this.response.headlines){
				var temp = headlineTemp.content.cloneNode(true);
				temp.querySelector('span').innerText = headline.date;
				var link = temp.querySelector('a');
				link.href = headline.url;
				link.innerText = headline.text;
				document.querySelector('.headlines').appendChild(temp);
			}
			for(var article of this.response.articles){
				var temp = articleTemp.content.cloneNode(true);
				var link = temp.querySelector('.article-link');
				link.href = article.url;
				link.innerText = article.title;
				temp.querySelector('.article-img').src = article.img;
				temp.querySelector('.article-text').innerText = article.text;
				document.querySelector('.articles').appendChild(temp);
			}
		}
	}
	xhr.send();
}
outputData();

var $ = (function(){
	$ = function(selector){ return new MyQuery(selector); };

	var MyQuery = function(selector){
		var nodes   = document.querySelectorAll(selector);
		this.each   = Array.prototype.forEach.bind(nodes);
		this.map    = Array.prototype.map.bind(nodes);
		var len = this.length = nodes.length;
		for(var i = 0; i < len; i++) this[i] = nodes[i];
	};

	$.fn = MyQuery.prototype = {
		addClass: function(classes){
			this.each(function(el){
				classes.forEach(function(className){
					el.classList.add(className);
				});
			});
			return this;
		},
		removeClass: function(classes){
			this.each(function(el){
				classes.forEach(function(className){
					el.classList.remove(className);
				});
			});
			return this;
		},
		addAttribute: function(newAttrib, value){
			this.each(function(el){
				el.setAttribute(newAttrib, value);
			});
			return this;
		},
		removeAttribute: function(attrib, value){
			this.each(function(el){
				el.removeAttribute(attrib);
			});
			return this;
		},
		remove: function(){
			this.each(function(el){
				el.remove();
			});
			return this;
		},
		on: function(type, callback){
			this.each(function(el){
				el.addEventListener(type, callback);
			});
			return this;
		},
		append: function(elem){
			this.each(function(el){
				el.appendChild(elem);
			});
			return this;
		},
		css: function(prop, value){
			this.each(function(el){
				el.style[prop] = value;
			});
			return this;
		}
	}
	return $;
})();