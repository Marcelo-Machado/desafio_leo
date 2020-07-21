## Desenvolvedor: Marcelo Machado da Silva
## Graduação em análise e desenvolvimento de sistemas
## MBA em Gestão empresarial

## Projeto Desafio LEO Learning

###### Linguagens utilizadas: Php, JavaScript
###### Marcação/estilo: Html, Css
###### Banco de dados: MySQL
###### Biblioteca: Jquery
###### Framework: Nenhum
###### Automação de tarefas: Gulp


## Descrição do projeto
###### Layout da tela inicial desenvolvida com Html, Css

###### Slides
	layout utilizado Html, Css.
	Ações dos slides utilizado JavaScript.
	Carregamento da div (cursos) com as informações do banco de dados, utilizando requisição JavaScript com Php.

###### Banner de abertura desenvolvido somente com JavaScript, sem uso direto do Html.

###### Cookie de controle (em JavaScript) para exibir o banner somente no primeiro acesso.

###### Comunicação com banco de dados realizada através de requisição em JavaScript com arquivo Php (controle.php).

###### Arquivo controle.php realiza a conexão com banco de dados, consulta e adição dos cursos, também retorna as informações inseridas em Html (amostra dos curso, e conteúdo programático dos cursos).

######  Processo de requisição com banco de dados, exibe o resultado na tela sem necessidade de recarregamento da página.

###### Processo de automação de tarefas: 
	Imagens
		redução de tamanho.
	Css
		Minificação
		Analise e adição de prefixos de fornecedor às regras CSS
	JavaScript
		Minificação
	Html
		Remoção de comentários em HTML
		Remoção type="text/javascript" das scripttags.
		Remoção type="text/css" de style linktags.
		Remoção espaço em branco

###### Testes
	Navegador
		Firefox e chrome
	Dispositivo móveis
		Simulador dos navegadores Firefox e chrome
