require(
	['tmpl','model','view','controller'],
	function(){
		$(function(){
			var firstToDoList = ['Learn JavaScript','Learn Angular','Lern Vanilla.js'];
			var model = new Model(firstToDoList);
			var view = new View(model);
			var controller = new Controller(model, view);
	});	
});