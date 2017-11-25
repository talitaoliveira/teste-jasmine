var todo = {
  //items: ["Tomar banho", "Arrumar o quarto"],
  items: [],
  finalizados: 0,
  addItem: function(novoItem){

  	if( novoItem.length > 0 ){
  		this.items.push(novoItem);
  		return true;	
  	}

    return false;

  },
  completeItem: function(item){

  	var itemsAtuais = this.items;

  	if( itemsAtuais.indexOf(item) == -1 ){
  		return false;
  	}

  	if( todo.items.pop(item) ){
  		return true;	
  	}

  	return false;
  	

    
  },
  listaItems: function (){

    if( this.items.length <= 0 ){
    	return false;
    }

    return this.items;

  }
}

/*todo.listaItems();

var form = document.querySelector("#form-add");

form.addEventListener("submit",function(event){
  event.preventDefault();
  var item = document.querySelector("#item").value;
  todo.addItem(item);
  document.querySelector("#item").value = "";
});

document.querySelector("#lista ol").addEventListener("click", function(event){
  var li = event.target;
  todo.completeItem(li);

});
*/