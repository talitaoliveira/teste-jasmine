describe("TodoList", function(){

	it("listar tarefa", function(){

		expect(todo.listaItems()).toBeFalsy();
		
	});

	describe("Adicionando Tarefa", function(){

		it("Deve adicionar uma tarefa", function(){

			expect(todo.addItem("teste todo")).toBeTruthy();
			
		});

		it("deve verificar se a lista contem items (pois foi inserido uma tarefa antes)", function(){
			todo.addItem("teste todo");
			expect(todo.listaItems()).toBeTruthy();
			
		});

		describe("Completando Tarefa", function(){

			beforeEach(function() {
				todo.addItem("teste todo");
			});
			
			
			it("completar tarefa", function(){
				
				expect(todo.completeItem("teste todo")).toBeTruthy();
				
			});

	
		});

	});

	


});