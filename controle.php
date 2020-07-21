<?php
// CRIA CONEXÃO COM BD
class conexaoBD {  
	private function acesso(){
		$host = "localhost"; 
		$usuario = "root";	
		$senha = "";	
		$banco = "desafioleolearning"; 
		
		$conexao = mysqli_connect ($host, $usuario, $senha) or die (mysqli_error());
				   mysqli_set_charset($conexao,"utf8mb4");
				   mysqli_select_db($conexao,$banco) or die(mysqli_error());
		return $conexao;	   
	}
	public function conexao(){
		return $this->acesso(); 	   
	}
}
 
 
//INSERE AS INFORMAÇÕES NO BD (adicionar cursos) 
if (isset($_GET['titulo']) && isset($_GET['descricao']) && isset($_GET['conteudo'])){
	$titulo = $_GET['titulo'];
	$descricao = $_GET['descricao'];
	$conteudo = nl2br($_GET['conteudo']); //nl2br formata o texto (quebra de linha, tabulação, etc)
	
	//chama a classe para conexão com bd e insere os valores
	$Objeto = new conexaoBD();
	$conexao = $Objeto ->conexao();
	
	$tabela = "SELECT * FROM cursos" ;
	$querybanco = mysqli_query ($conexao,$tabela);
	$contador = mysqli_num_rows($querybanco); 

	$sql = mysqli_query ($conexao,"INSERT INTO cursos(id,titulo,descricao,conteudo,image) 
	VALUES(NULL, '$titulo','$descricao','$conteudo', 'curso2.jpg')");
	
mysqli_close($conexao);
}	


//REALIZA A CONSULTA NO BD DE ACORDO COM A OPÇÃO
if (isset($_GET['curso']) && isset($_GET['opcao'])){
	
/* - Quando o "$_GET['curso']" estiver vazio, a solicitação foi realizada ao carregar a página, 
	pela chama da função "exibirCursos('', 'exibirCurso');" no inicio do body, ou quando o usuario clicar 
	na caixa de pesquisa vazia
	
   - Quando o "$_GET['curso']" estiver preenchido, a solicitação foi realizada pela caixa de pesquisa. */	
   
	$nomeCurso = $_GET['curso'];
	$opcao = $_GET['opcao'];
		
	//chama a classe para conexão com bd e seleciona os cursos
	$Objeto = new conexaoBD();
	$conexao = $Objeto ->conexao();

	$tabela = "select * from cursos where titulo LIKE '%$nomeCurso%' order by titulo asc";
	$querybanco = mysqli_query ($conexao,$tabela);
	$contador = mysqli_num_rows($querybanco); 
		$x=1;	
		while ($x <= $contador){	
			$linha = mysqli_fetch_array ($querybanco);
				$titulo = $linha['titulo'];
				$conteudo = $linha['conteudo'];  
				$descricao = $linha['descricao'];
				$image = $linha['image'];
				$id = $linha['id'];
					
					//chama a função para exibir o Layout div slide com descrição dos cursos
					exibirDivSlide($id,$titulo,$descricao);
					
					if($opcao == "exibirCurso"){
						//chama a função para exibir o Layout dos cursos na seção principal
						exibirCurso($querybanco,$titulo,$descricao,$image,$x,$contador,$nomeCurso);
					}else
					if($opcao == "exibirConteudo"){
						//chama a função para exibir o Layout do conteudo programático na seção principal 
						exibirConteudo($querybanco,$titulo,$conteudo);
					}
		$x++;
		}
mysqli_close($conexao);
}	


//--------------- Layout div slide com descrição dos cursos
function exibirDivSlide($id,$titulo,$descricao){
	echo "<script>
			if($('#divSlide1').is(':empty')){
				$('div#divSlide1').html('<h1>$titulo</h1> <br> <p>$descricao</p> <br> <button onclick=\'exibirCursos(\"$titulo\", \"exibirConteudo\")\'>VER CURSO</button>');
			}else
			if($('#divSlide2').is(':empty')){
				$('div#divSlide2').html('<h1>$titulo</h1> <br> <p>$descricao</p> <br> <button onclick=\'exibirCursos(\"$titulo\", \"exibirConteudo\")\'>VER CURSO</button>');
			}else
			if($('#divSlide3').is(':empty')){
				$('div#divSlide3').html('<h1>$titulo</h1> <br> <p>$descricao</p> <br> <button onclick=\'exibirCursos(\"$titulo\", \"exibirConteudo\")\'>VER CURSO</button>');
			}
		</script>";
}


//--------------- Layout amostra dos cursos
function exibirCurso($querybanco,$titulo,$descricao,$image,$x,$contador,$nomeCurso){
	if($x == 1){//se for o primeiro registro exibe o h1
		echo"<h1>MEUS CURSOS</h1>";
	}
	echo "
		<div class='exibirCurso'>						
			<img src='imagem/$image'>
			<label title='$titulo'>$titulo</label>
			<p>$descricao</p> 
			<button onclick='exibirCursos(\"$titulo\", \"exibirConteudo\")'>VER CURSO</button>
		</div>";

	if($x == $contador){//se for o ultimo registro exibe...
		if($nomeCurso == ''){//se o nome do curso estiver vazio exibe a div adicionar curso
			echo "<div id='adiocionarCurso'  class='exibirCurso' onclick='document.getElementById(\"telaFormulario\").style.marginTop = \"0px\";'>
				  </div>";			
		}else{//se o nome do curso estiver preechido exibe o botão "Exibir todos"
			echo"<br><button class='buttonExibirTodos'  onclick=\"exibirCursos('', 'exibirCurso');\">Exibir todos</button>";
		}
	}
}


//--------------- layout Conteudo programático dos cursos
function exibirConteudo($querybanco,$titulo,$conteudo){
	echo"
		<div class='conteudoProgramatico'>							
			<h1>Curso: $titulo</h1>
			<h2>Conteúdo programático</h2>
			<p>$conteudo</p> 
			<button onclick=\"exibirCursos(document.getElementById('search').value, 'exibirCurso');\">Voltar</button>
		</div>";
}		
?>



