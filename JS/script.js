fetch('data.json').then(function(response) {
	response.json().then(function(json) {
		outputData(json);
	});
});

//ES6 Arrow functions
// fetch('data.json').then(r => r.json().then(j => outputData(j)));

function outputData(data){
	for(var headline of data.headlines){
		var temp       = headlineTemp.content.cloneNode(true);
		var link       = temp.querySelector('a');
		link.href      = headline.url;
		link.textContent = headline.text;
		temp.querySelector('span').textContent = headline.date;
		document.querySelector('.headlines').appendChild(temp);
	}
	//ES6
	// for(let {url, text, date} of data.headlines) {
	// 	var temp         = headlineTemp.content.cloneNode(true);
	// 	var link         = temp.querySelector('a');
	// 	link.href        = url;
	// 	link.textContent = text;
	// 	temp.querySelector('span').textContent = date;
	// 	document.querySelector('.headlines').appendChild(temp);
	// }
	for(var article of data.articles){
		var temp  = articleTemp.content.cloneNode(true);
		var link  = temp.querySelector('.article-link');
		link.href = article.url;
		link.textContent = article.title;
		temp.querySelector('.article-img').src = article.img;
		temp.querySelector('.article-text').textContent = article.text;
		document.querySelector('.articles').appendChild(temp);
	}
	//ES6
	// for(let {url, img, text} of data.articles) {
	// 	var temp  = articleTemp.content.cloneNode(true);
	// 	var link  = temp.querySelector('.article-link');
	// 	link.href = url;
	// 	link.textContent = title;
	// 	temp.querySelector('.article-img').src = img;
	// 	temp.querySelector('.article-text').textContent = text;
	// 	document.querySelector('.articles').appendChild(temp);
	// }
}
