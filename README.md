# StatGoal — Football Analysis Dashboard

Projeto: statgoal-football-analysis  
Autor: Carlos Alberto (carlos4321alberto-code)  
Última atualização: 2025-12-29

Descrição
--------
StatGoal é um dashboard escuro para análise estatística de futebol. Este repositório contém uma implementação inicial do layout inspirado no mockup fornecido — sidebar esquerda, painel principal com partida em destaque, sugestões de apostas, painel de mercados e coluna direita com próximos jogos. O objetivo desta base é servir como ponto de partida para construir uma aplicação interativa com integração a dados reais e GitHub.

Principais objetivos
- Implementar um layout visual fiel ao mockup escuro.
- Garantir acessibilidade básica (ARIA, controle por teclado, prefers-reduced-motion).
- Evitar vulnerabilidades de XSS nas interações do chat.
- Fornecer estrutura inicial (HTML / CSS / JS) para evoluir para uma SPA ou backend integrado.

Status atual
-------------
- Layout estático implementado: `index.html`, `assets/styles.css`, `assets/app.js`.
- Correções de acessibilidade e segurança aplicadas (menu toggle acessível, aria-live no chat, uso de textContent para mensagens).
- Repositório inicialmente vazio — mudança entregue como conjunto de arquivos a serem adicionados em branch.

Estrutura do repositório
------------------------
- index.html — página principal do dashboard (markup semântico e acessível).
- assets/
  - styles.css — estilos base do layout (tema escuro, responsividade).
  - app.js — comportamentos mínimos (menu mobile, atualizador de sync, exemplo seguro addMessage).
  - icons.svg — (opcional) sprite SVG para ícones (não incluido por padrão nessa entrega).
- README.md — este arquivo.

Como começar (local)
--------------------
1. Clone o repositório (ou inicialize se estiver vazio):
   - git clone git@github.com:carlos4321alberto-code/statgoal-football-analysis.git
   - cd statgoal-football-analysis

2. Crie branch para a feature/layout:
   - git checkout -b feature/layout-copy

3. Adicione os arquivos sugeridos (copiar `index.html`, `assets/styles.css`, `assets/app.js`) ou aplique o patch.

4. Commit e push:
   - git add .
   - git commit -m "feat(ui): add initial dark dashboard layout (faithful to mockup)"
   - git push -u origin feature/layout-copy

5. Abra um Pull Request no GitHub da branch `feature/layout-copy` para `main` e descreva as mudanças.

Execução local rápida
---------------------
- Abra `index.html` no navegador (modo desenvolvimento).
- Para um dev server (recomendado):
  - Usando Python: `python -m http.server 8000` e acessar `http://localhost:8000`
  - Ou usar Live Server / VS Code / outra ferramenta de sua preferência.

Melhorias recomendadas (próximos passos)
---------------------------------------
- Substituir ícones simples por SVGs vetoriais inline para maior fidelidade visual.
- Carregar fonte (Inter / Poppins) e pré-carregá-la (preload) para corresponder ao mockup.
- Externalizar/otimizar assets e aplicar minificação para produção.
- Implementar gráficos reais (Chart.js / D3) e lazy-loading para reduzir payload inicial.
- Adicionar testes visuais / e2e (Cypress) e checagens de acessibilidade (axe / Lighthouse).
- Configurar CI para rodar lint, build e verificações de acessibilidade.
- Implementar backend seguro para integração com dados e GitHub (tokens no servidor, não no cliente).

Notas de Acessibilidade e Segurança (aplicadas)
-----------------------------------------------
- Evitado uso de innerHTML com conteúdo do usuário — mensagens do chat são inseridas usando textContent (prevenção XSS).
- Menu mobile é um `<button>` com `aria-controls` e `aria-expanded`.
- Área de chat marcada com `aria-live="polite"` para avisar ATs sobre novas mensagens.
- Adicionado `prefers-reduced-motion` CSS para respeitar preferências do usuário.
- Tabela e regionais importantes devem receber ainda mais markup semântico quando integradas com dados reais (ex.: `caption`, `scope` em <th>).

Contribuição
------------
Contribuições são bem-vindas! Recomenda-se:
1. Abrir uma issue descrevendo a proposta.
2. Criar um branch por feature: `feature/descricao-curta`.
3. Submeter PR com descrição clara e screenshots (se aplicável).

Licença
-------
Sugestão: MIT License — substitua pela licença que preferir.  
(Adicionar arquivo LICENSE se decidir por uma licença.)

Contato
-------
Para dúvidas relacionadas a este projeto, contate: carlos4321alberto-code (GitHub).

---

Se quiser, eu posso:
- Gerar o patch unified (.diff) pronto para `git apply`.
- Criar um template de PR com checklist de revisão (a11y, performance, segurança).
- Adicionar um arquivo LICENSE (por exemplo MIT) e um .gitignore básico.

Qual opção prefere agora?  
