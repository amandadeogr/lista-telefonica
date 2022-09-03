class Contato { // uma classe com 5 métodos
   constructor() {
     this.arrayContato = []; //array
   }

   //metodo
   lerDados() {
     let contato = {} // variavel contato recebe um objeto vazio
 
     //começamos a preencher esse objeto
     contato.nome = document.getElementById('input-nome').value;
     contato.telefone = document.getElementById('input-telefone').value;
     
     return contato; // o retorno dessa método é utilizado no método adicionar e cadastrar
   }

   //metodo
   filter() { // campo de busca
     const input = document.getElementById("myInput");
     const text = input.value;
     return this.arrayContato.filter(filtrarArray => filtrarArray.nome.includes(text)); //callback
   }
 
   //metodo
   listarTabela() { //cria a tabela e ecobe os itens
     let tbody = document.getElementById('tbody')
     tbody.innerText =''
 
     const nomesDeContatos = this.filter();
     for(const nomeDeContato of nomesDeContatos) {
       let tr = tbody.insertRow()
 
       let td_nome = tr.insertCell()
       let td_telefone = tr.insertCell()
 
       td_nome.innerText = nomeDeContato.nome
       td_telefone.innerText = nomeDeContato.telefone
 
       document.getElementById('input-nome').value = ''
       document.getElementById('input-telefone').value = ''
     }
   }
 
   //medodo
   adicionar(contato) { //acrescenta 
     this.arrayContato.push(contato) //insere no array que está no começo, o return contato, do método lerDados
   }
 
   //metodo
    cadastrar(){
     let nomeDeContato = this.lerDados()
 
     if(nomeDeContato.nome == '' && nomeDeContato.telefone == '') {
       alert('Os campos precisam ser preenchidos.')
     } else {
         this.adicionar(nomeDeContato)
         this.listarTabela()
     }
   }
 }
 
 const contato = new Contato()