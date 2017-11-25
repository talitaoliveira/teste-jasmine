var todo = {
  items: ["Tomar banho", "Arrumar o quarto"],
  finalizados: 0,
  addItem: function(novoItem){

    this.items.push(novoItem);

    console.log(this.items);

    var li = document.createElement("li");
    li.setAttribute("class", "collection-item");
    li.innerHTML = novoItem;

    var lista = document.querySelector("#lista ol");
    console.log(lista);
    lista.appendChild(li);

    return true;

  },
  completeItem: function(item){

    if( item && !item.classList.contains("active") ){
      console.log("DONE");
      item.classList.toggle("active");
      return true;
    }

    return false;
    
  },
  listaItems: function (){
    if( this.items.length > 0 ){
      this.items.forEach(function(item){

        var li = document.createElement("li");
        li.setAttribute("class", "collection-item");
        li.innerHTML = item;

        var lista = document.querySelector("#lista ol");
        lista.appendChild(li);

      });

      return true;
    }
  }
}

todo.listaItems();

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
