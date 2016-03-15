// // Javascript Entry Point

import $ from 'jquery';
// import { login, avatar } from './template';

var url = 'https://api.github.com/users/jisaacks/orgs';

$.ajax(url).then(function(data){
	data.forEach(function({avatar_url, login}){
		$('#wrapper').append(`
			<div class="divvy">
			<img class="avatar" src="${avatar_url}">
			<div class="login">${login}</div>
			</div>
			`);
		console.log('work dude');
	});
});



// data.forEach(function(inputInfo) {
// 	$.ajax('.wrapper').append(avatar);
// 	$.ajax('.wrapper').append(login);
// });

