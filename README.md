# Painel de Comunicação para SharePoint

## Sobre o Projeto
Componente front-end modular desenvolvido para exibição de comunicados internos no Microsoft SharePoint. A solução foi projetada com foco em responsividade, usabilidade corporativa e respeito ao padrão visual da Microsoft (UI), permitindo o rastreamento de leitura através de interações do usuário.

## Estrutura e Arquitetura
O projeto foi construído seguindo o princípio de Separação de Preocupações (Separation of Concerns) para garantir fácil manutenção e evitar conflitos com o layout nativo do portal:

* **Estrutura (index.html):** Esqueleto semântico da aplicação.
* **Estilo (style.css):** Identidade visual, espaçamentos e transições em Dark Mode, garantindo conforto visual.
* **Comportamento (script.js):** Lógica de manipulação do DOM e escuta de eventos de clique com feedback visual imediato.

## Como Publicar no SharePoint
Para implantar este componente em uma página moderna do SharePoint:

1. Faça o upload dos arquivos `style.css` e `script.js` (e opcionalmente o `index.html`) para a biblioteca nativa **Site Assets** (Ativos do Site) do SharePoint.
2. Na página de destino, adicione uma Web Part do tipo **Inserir (Embed)** ou **Editor de Script**.
3. Aponte o caminho relativo para o arquivo HTML hospedado (ex: `/sites/NomeDoSite/SiteAssets/index.html`) ou encapsule o código fazendo as devidas chamadas relativas para o CSS e JS.
4. Certifique-se de que os usuários finais possuam permissão de leitura na biblioteca Site Assets.

## Tecnologias Utilizadas
* HTML5
* CSS3
* JavaScript
