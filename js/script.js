//cria o banner
function banner(){ 
	var novaDiv = document.createElement('div');//div de fundo com tela escuro
		novaDiv.setAttribute('id', 'banner'); 
	document.body.appendChild(novaDiv); 

	var divCentral = document.createElement('div'); //div central do banner
		divCentral.setAttribute('id', 'divCentral');
		novaDiv.appendChild(divCentral); 
		
	var imagem = document.createElement('img'); // carrega a imagem no banner
		imagem.src ='imagem/banner.jpg';
		divCentral.appendChild(imagem); 	
		
	var botao = document.createElement('button');//cria o botão fechar (X)
		botao.setAttribute('id', 'fechar');
		botao.innerHTML = 'X';
		botao.setAttribute('onclick', 'document.getElementById("banner").style.marginTop = "-5000px";');
		divCentral.appendChild(botao); 
		
	var h1 = document.createElement('h1'); //titulo do banner
		h1.innerHTML = 'Seja bem vindo!'; 
		divCentral.appendChild(h1); 
		
	var paragrafo = document.createElement('p');// descrição do banner
		paragrafo.innerHTML = 'Aprenda com os melhores cursos na comodidade da sua casa. <br> Junte-se a milhões de alunos de todo o Brasil que já estão estudando! <br> Encontre o curso ideal para você. Qualquer tema, nível ou idioma.'; 
		divCentral.appendChild(paragrafo);

	var tagCenter = document.createElement('center');// cria tag center para centralizar o botão (INSCREVA-SE)
		divCentral.appendChild(tagCenter);
		
	var botao2 = document.createElement('button'); //cria o botão (INSCREVA-SE)
		botao2.setAttribute('id', 'inscrever');
		botao2.innerHTML = 'INSCREVA-SE';
		botao2.setAttribute('onclick', '');
		tagCenter.appendChild(botao2);	
}


//Faz a requisição para o arquivo controle.php e exibe os cursos na seção principal
function exibirCursos(valorCurso, valorOpcao){ 
	$.get("controle.php",{curso:valorCurso, opcao:valorOpcao},// envia a solicitação
		function(resposta){			
			$("#principal").html(resposta, setTimeout(msg, 0));// recebe a resposta e exibe na tela principal
		});function msg(){
			limparCaixaTexto();// limpa a caixa do formulario (adicionar curso)
			$('html,body').animate({scrollTop: 0},'slow');// rola a tela para o topo
		}
}


//envia os dados do formulario (adicionar curso)  para o arquivo controle.php inserir no bd
function adicionarCurso(){  
var valor1 = document.getElementById('titulo').value;
var valor2 = document.getElementById('descricao').value;
var valor3 = document.getElementById('conteudo').value;

	if(valor1=="" || valor2=="" || valor3==""){//revrifica se os campos do formulario estão preechidos
		alert('Precisa preencher todos os campos.');
		exit();
	}
	$.get("controle.php",{titulo:valor1, descricao:valor2, conteudo:valor3},// envia a solicitação
		function(resposta){		
			$("#principal").html(exibirCursos('', 'exibirCurso'), setTimeout(msg, 0));// recebe a resposta e exibe na tela principal
		});function msg(){
			document.getElementById('telaFormulario').style.marginTop = '-5000px';//esconde o formulario
			limparCaixaTexto();// limpa a caixa do formulario (adicionar curso)
		}
}


//Limpa as caixas de texto 
function limparCaixaTexto(){
	document.getElementById('titulo').value = '';
	document.getElementById('descricao').value = '';
	document.getElementById('conteudo').value = '';
	//document.getElementById('search').value = '';
}


//cria um cookie para exibir o banner somente no primeiro acesso
function setCookie(){
var xxcookie = document.cookie;
	if (xxcookie.indexOf("DesafioLeoLearning") >= 0){ //verifica se o cookie existe
	}else{//caso não exista cria o cookie e exibe o banner na tela		
		document.cookie = "username=DesafioLeoLearning; expires=Thu, 18 Dec 2093 12:00:00 UTC";
		document.getElementById('banner').style.marginTop = '0px';
	}	
}




