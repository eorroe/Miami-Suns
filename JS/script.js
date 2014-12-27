var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json');
xhr.onreadystatechange  = function() {
	if(this.readyState == 4 && this.status == 200) outputData(JSON.parse(this.response));
}
xhr.send();

function outputData(){
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