# Projeto Moviet NLW#4 - React

Realizado pela Rocketseat na semana NFL#4.

## useState
O  nos permite criar estados em um componente criado a partir de uma função, assim como o state presente em componentes. 

Exemplo clicar no botão acrescentar mais um.

```js
const [counter, setCounter] = useState(1)

function increment() {
    setCounter(counter + 1)
}

return (
    <button type='button' onClick={increment}>
        {counter}
    </button>
)

```

## useEffect
Efeito corateral, quando algo acontecer dispare algo

Espera receber dois parametros, o que deve fazer e quando deve executar

Exemplo 1
```js
useEffect(() => { 
"o que eu quero que faça" 
},['Quando devo executar a função'])

```
Exemplo 2
```js
const [active, setActive] = useState(false);

useEffect(() => { 
    console.log(active) 
},[active])

```


# SPA - Single Page Application 
Aplicação de página unica, ocasiona uma troca de roda mas, não uma troca de página, onde carrega o conteúdo e não a página inteira.

## Ponto negativo
* Não é indexado pelo google, template é totalmente gerado pelo JS.

## Ponto Positivo
* Não é necessario carregar a página toda.



# SSR - Server Side Rendering, 
Server Side Rendering, O SSR pode fornecer aos usuários um carregamento mais eficiente da aplicação, já que parte da renderização é feita no servidor

## Ponto negativo
* Performance imprevisível: podem ocorrer algumas inconsistências justamente pelo deslocamento do esforço de renderização para o cliente.
## Ponto Positivo
* Ter boa indexação no Google é um requisito

# SSG - Static Site Generators
Geradores de Sites Estáticos. ... Os Static Site Generators (SSG) são programas processadores que unem conteúdo, algumas configurações, tema e plugins para criar as páginas do site. O resultado é uma pasta que contém os arquivos estáticos que compõem o site.


## Ponto negativo
* Pode demorar o Build

## Ponto Positivo
* Proteção contra ataques (eles não tem o quê invadir).
* É mais barato! Qualquer servidorzinho de site estático é mais barato que uma hospedagem de site dinâmico