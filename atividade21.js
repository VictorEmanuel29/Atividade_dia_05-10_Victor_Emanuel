"use strict";

/*
  ATIVIDADE PRÁTICA — LEITURA E ALTERAÇÃO DO DOM

  Regras:
  1. Não altere o arquivo atividade21.html.
  2. Faça todas as mudanças neste arquivo.
  3. Utilize document.querySelector() em todas as seleções.
  4. Utilize textContent para textos comuns e dados informados pelo usuário.
  5. Utilize innerText somente nas tarefas indicadas.
  6. Utilize innerHTML somente com conteúdos definidos no próprio código.
  7. Nunca insira dados do usuário com innerHTML ou outerHTML.
  8. Utilize outerHTML somente na tarefa indicada.
  9. Confira cada alteração no navegador e no Console.
*/

// 01. Solicite o nome do estudante e altere a mensagem de
// boas-vindas utilizando textContent.
var nome = prompt("Digite seu nome:");
const doc = document.querySelector("#mensagem-boas-vindas");
doc.textContent = "Seja bem-vindo(a), " + nome + "!";

// 02. Mostre no Console o texto atual do nome da loja usando
// textContent. Depois, altere o nome da loja com textContent.
const nomeLoja = document.querySelector("#nome-loja");
console.log(nomeLoja.textContent);
nomeLoja.textContent = "VR Store";

// 03. Altere o título principal da página utilizando textContent.
const tituloPrincipal = document.querySelector("#titulo-principal");
tituloPrincipal.textContent = "Catálogo de Produtos - VR Store";

// 04. Mostre no Console o texto visível do subtítulo utilizando
// innerText. Depois, altere o subtítulo com innerText.
const subtitulo = document.querySelector("#subtitulo-principal");
console.log(subtitulo.innerText);
subtitulo.innerText = "Confira o que temos em destaque na VR Store!";

// 05. Insira o aviso de promoção utilizando innerHTML.
// O aviso deve possuir pelo menos uma tag <strong> e uma tag <span>.
const avisoPromocao = document.querySelector("#aviso-promocao");
avisoPromocao.innerHTML = "10/10 VR Store: <strong>Promoção imperdível!</strong> Aproveite os descontos em <span>todos os produtos</span>.";

// 06. Altere a categoria do produto em destaque utilizando
// textContent.
const categoriaProduto = document.querySelector("#categoria-destaque");
categoriaProduto.textContent = "Eletrônicos";

// 07. Altere o nome do produto em destaque utilizando innerText.
const nomeProduto = document.querySelector("#nome-produto-destaque");
nomeProduto.innerText = "IPhone 18 Pro Max";

// 08. Mostre no Console o textContent e o innerText da descrição
// do produto. Depois, altere a descrição utilizando innerText.
const descricaoProduto = document.querySelector("#descricao-produto-destaque");
console.log("textContent:", descricaoProduto.textContent);
console.log("innerText:", descricaoProduto.innerText);
descricaoProduto.innerText = "O IPhone 18 Pro Max é o smartphone mais avançado da Apple, com tecnologia de ponta e design elegante.";

// 09. Altere o preço do produto em destaque utilizando textContent.
const precoProduto = document.querySelector("#preco-produto-destaque");
precoProduto.textContent = "R$ 12.999,99";

// 10. Altere a situação do estoque utilizando innerHTML.
// Destaque a situação com uma tag <strong>.
// Utilize somente um texto definido no próprio código.
const situacaoEstoque = document.querySelector("#status-estoque");
situacaoEstoque.innerHTML = "Situação do estoque: <strong>Disponível</strong>";

// 11. Atualize as três estatísticas do catálogo.
// Utilize textContent na primeira, innerText na segunda e
// innerHTML com uma tag <strong> na terceira.
const estatistica1 = document.querySelector("#total-produtos");
const estatistica2 = document.querySelector("#total-categorias");
const estatistica3 = document.querySelector("#total-ofertas");
estatistica1.textContent = "150";
estatistica2.innerText = "10";
estatistica3.innerHTML = "<strong>25</strong>";

// 12. Altere os nomes dos três produtos secundários.
// Utilize textContent para impedir que possíveis tags sejam
// interpretadas pelo navegador.
const produtoSecundario1 = document.querySelector("#nome-produto-01");
const produtoSecundario2 = document.querySelector("#nome-produto-02");
const produtoSecundario3 = document.querySelector("#nome-produto-03");
produtoSecundario1.textContent = "Notebook";
produtoSecundario2.textContent = "Smart TV";
produtoSecundario3.textContent = "Fone de Ouvido Bluetooth";

// 13. Atualize a lista de benefícios utilizando innerHTML.
// Crie pelo menos três elementos <li> dentro da lista.
const listaBeneficios = document.querySelector("#lista-beneficios");
listaBeneficios.innerHTML = `<li>Frete grátis para todo o Brasil</li>
<li>Garantia estendida de 2 anos</li>
<li>Suporte técnico</li>`;

// 14. Atualize automaticamente o ano do rodapé utilizando
// new Date().getFullYear() e textContent.
const anoRodape = document.querySelector("#ano-atual");
const anoAtual = new Date().getFullYear();
anoRodape.textContent = anoAtual;

// 15. Mostre no Console o outerHTML do texto final do rodapé.
// Depois, utilize outerHTML para substituir completamente esse
// elemento por uma nova tag <p> com classe e conteúdo diferentes.
// Após a substituição, selecione novamente o novo elemento e
// mostre seu outerHTML no Console.
const textoRodape = document.querySelector("#texto-rodape");
console.log(textoRodape.outerHTML);
textoRodape.outerHTML = `<p class="novo-rodape">VR Store - Todos os direitos reservados © ${anoAtual}</p>`;
const novoTextoRodape = document.querySelector("#texto-rodape");
console.log(novoTextoRodape.outerHTML);