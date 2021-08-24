//Cadastrar Aluno
$(document).on("click", "#cadastrar", function(){
  let parametros = {
    "nome":$("#nome").val(),
    "curso":$("#curso").val()
  };

  $.ajax({
    type:"post",
    url:"https://jussimarleal.com.br/exemplo_api/pessoa",
    data: parametros,
    success: function(data){
      alert(data);
      $("#nome").val("");
      $("#curso").val("");
    },
    error: function(){
      alert("Erro ao cadastrar: "+data);
    }
  });
});

//Buscar ID do Aluno
$(document).on("click", "#buscar", function(){
  $.ajax({
    type:"get",
    dataType:"json",
    url:"https://jussimarleal.com.br/exemplo_api/pessoa/"+$("#id").val(),
    success: function(data){
      $("#nome").val(data.nome);
      $("#curso").val(data.curso);
    },
    error: function(){
      alert("Erro ao cadastrar: "+data);
    }
  });
});

//Alterar Registro de Aluno
$(document).on("click", "#alterar", function(){
  let parametros = {
    "nome":$("#nome").val(),
    "curso":$("#curso").val()
  };

  $.ajax({
    type:"put",
    url:"https://jussimarleal.com.br/exemplo_api/pessoa/"+$("#id").val(),
    data: parametros,
    success: function(data){
      alert(data);
      $("#nome").val("");
      $("#curso").val("");
    },
    error: function(){
      alert("Erro ao cadastrar: "+data);
    }
  });
});

//Deletar Registro de Aluno
$(document).on("click", "#deletar", function(){
  $.ajax({
    type:"delete",
    url:"https://jussimarleal.com.br/exemplo_api/pessoa/"+$("#id").val(),
    success: function(data){
      alert(data);
      $("#nome").val("");
      $("#curso").val("");
    },
    error: function(){
      alert("Erro ao cadastrar: "+data);
    }
  });
});