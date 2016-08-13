# Synopsis
The goal is to use Ajax to load JSON from the following [API](https://api.github.com/users/jisaacks/orgs);
Once the data is loaded, build a replica copy of the image below...
![alt text](https://tiy-learn-content.s3.amazonaws.com/26e2d15a-Screen%20Shot%202016-03-14%20at%2011.45.58%20PM.png)

# Sample Code 
``` javascript

var url = 'https://api.github.com/users/jisaacks/orgs';

$.ajax(url).then(function(data){
	data.forEach(function({avatar_url, login}){
		$('#wrapper').append(`
			<div class="divvy">
			<img class="avatar" src="${avatar_url}">
			<div class="login">${login}</div>
			</div>
			`);
	});
});
```
# Deployed Code
[Check It Out Here!](http://tiy-2016q1-eh_cosmo-ajax_github_orgs.surge.sh/)
