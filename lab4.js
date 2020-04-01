//  accessing the information from the server using an XMLHTTPRequest (XHR) object.
var requestURL = 'https://github.com/GurinderSingh1/Javascript-Lab4/blob/master/lab4.json';
		/*Create a new XHR object */
		var request = new XMLHttpRequest();
		/* Open a new request using the request() method */
		request.open('GET', requestURL);
		/* Set JavaScript to accept JSON from the server */
		request.responseType = 'json';
		/* Send the request with the send() method */
        request.send();
        /*Add an event handler that listens for the onload event of the JSON file/object */
		request.onload = function() {
            //store the response in plenty of pizza 
                  var weirdObject = request.response;
            //let's check it out in the console 
                  console.log(weirdObject);
            //when the response is ready, invoke pizzaTypes function, passing plentyPizza as the object 
                  Products(weirdObjects);
              };

               /* Parse the JSON in pizzaTypes() */   
    //define a function name pizza types, passing jsonObj as a parameter or placeholder 
		function Products(jsonObj){
			// store the JSON object in a variable, JavaScript provides us with a built in JSON object to work with, complete with methods and properties 
			let Products = jsonObj.Products;
			
			for (let i = 0; i < Products.length; i++) {
				//build HTML elements for the content
				let article = document.createElement('article');
				let h2 = document.createElement('h2');
				let img = document.createElement('img');
				let p1 = document.createElement('p');
				let p2 = document.createElement('p');
				let list = document.createElement('ul');
        //store a reference to the section element in var section 
        let section = document.querySelector('section');
        //set the image src attribute 
				img.setAttribute('src', 'https://jessicagilfillan.github.io/comp1073-week9/assets/' + Products[i].Image);
        //set the image alt attribute 
				img.setAttribute('alt', pizzaTypes[i].name);
        //set the text content of the h2 to name
				h2.textContent = pizzaTypes[i].name;
        //set the text contenxt of the first paragraph 
				p1.textContent = 'Calories: ' +
        pizzaTypes[i].calories;
				p2.textContent = 'Crust: ' + pizzaTypes[i].crust;
				//Build a loop for the ingredients array in the JSON
				let toppings = pizzaTypes[i].toppings;
				for (let j = 0; j < toppings.length; j++) {
					let listItem = document.createElement('li');
					// Set text for each list item
					listItem.textContent = toppings[j];
					list.appendChild(listItem);
				}
				// append each of the above HTML elements to the ARTICLE element, then append the article element to the section
				article.appendChild(img);
				article.appendChild(h2);
				article.appendChild(p1);
				article.appendChild(p2);
				article.appendChild(list);
				section.appendChild(article);
				}
			}