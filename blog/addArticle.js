function addArticle() {
	let c = document.getElementById("content");
	let t = document.getElementById("title");

	let contents = document.getElementById("contents");
	let article = document.createElement("article");
	let p = document.createElement("p");
	let h1 = document.createElement("h1");
	let hr = document.createElement("hr");
	if (c.value != "" && t.value != "") {
		article.className = "contentpost";
		h1.className = "contenttitle";
		p.className = "contenttext";
		hr.className = "separator";
		h1.innerHTML = t.value;
		p.innerHTML = c.value;
		article.appendChild(h1)
		article.appendChild(p);
		contents.prepend(hr);
		contents.prepend(article);

		c.value = "";
		t.value = "";
		setTimeout(function function_name(argument) {
			alert("New post has been added!");
		}, 200);
	}
	else{
		alert("You can't have empty title or contents of the new article");
	}
}