# Portfólio — Bernardo Kim

Portfólio pessoal de **Bernardo Kim**, estudante de Engenharia de Software na FIAP. O site reúne apresentação, projetos individuais, projetos em equipe, skills, contato e currículo.

Feito com **HTML, CSS e JavaScript puro**, sem frameworks, sem build e sem dependências. Todo o conteúdo editável fica em um único arquivo: `js/config.js`.

<p align="start">
  <a href="https://sukjoo04.github.io/Portfolio-Bernardo/">
    <img src="https://img.shields.io/badge/🔗%20Acessar%20o%20portifólio-000000?style=for-the-badge" alt="Acessar o Portifólio">
  </a>
</p>

---

## Seções

- **Início:** apresentação com foto, efeito de digitação e botão para baixar o currículo
- **Sobre mim:** apresentação, trajetória, experiência e formação
- **Projetos:** projetos individuais, com modal de detalhes ao clicar no card
- **Equipe:** integrantes e projetos desenvolvidos em grupo (Asia Dev)
- **Skills:** tecnologias e competências por categoria
- **Contato:** e-mail, WhatsApp, LinkedIn, Instagram e GitHub (cada um fica escondido até o visitante clicar)
- **Currículo:** download do PDF

## Projetos

**Individuais** (exercícios de estudo, com marcas fictícias)

| Projeto | Tecnologias |
| :--- | :--- |
| NovaCore | HTML, CSS, Grid, Flexbox |
| Fio & Prensa | HTML, Bootstrap 5 |
| Grão Nobre | HTML, Tailwind CSS 4 |
| Kim's Coffee | HTML, CSS, JavaScript |

**Em equipe (Asia Dev)**

| Projeto | Tecnologias | Links |
| :--- | :--- | :--- |
| Asia Foods | HTML5, CSS3 | [Site](https://leonardo-daniel-sc.github.io/projeto-asiafood/) · [Repositório](https://github.com/Leonardo-Daniel-SC/projeto-asiafood) |
| AstroLab | HTML5, CSS3, JavaScript | [Site](https://asia-devv.github.io/AstroLab/) · [Repositório](https://github.com/asia-devv/AstroLab) |

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis, Grid, Flexbox, media queries)
- JavaScript (ES5, sem bibliotecas)
- Fontes: Inter e JetBrains Mono (Google Fonts, com fallback para fontes do sistema)

## Recursos

- Layout responsivo (desktop, tablet e celular)
- Menu mobile com seção ativa destacada
- Animações ao rolar e fundo animado em rede de pontos (desativáveis)
- Respeita a preferência "reduzir movimento" do sistema
- Contatos protegidos: só aparecem após o clique
- Modal acessível (foco preso, fecha com ESC)
- Conteúdo 100% controlado por `js/config.js`

## Estrutura de pastas

```
├── index.html          estrutura da página
├── css/
│   ├── style.css       cores, tipografia, layout e componentes
│   ├── animations.css  animações
│   └── responsive.css  adaptações para tablet e celular
├── js/
│   ├── config.js       ⭐ textos, projetos, skills e contatos
│   ├── main.js         monta as seções, modal, currículo
│   ├── animations.js   efeitos visuais
│   └── navigation.js   menu mobile e seção ativa
├── assets/
│   ├── images/         foto de perfil e prints dos projetos
│   └── icons/          favicon
├── documents/          currículo em PDF
└── projects/           páginas dos projetos individuais
```

## Como executar

Não precisa instalar nada. Abra o `index.html` no navegador ou, de preferência, use um servidor local:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`. Outra opção é a extensão **Live Server** do VS Code.

## Como editar

Tudo fica em `js/config.js`.

### Adicionar um projeto pessoal

Na lista `projects`, copie um bloco (ou use o modelo comentado no fim da lista):

```js
{
  title: "Nome do projeto",
  description: "O que é e o que resolve.",
  technologies: ["Tecnologia A", "Tecnologia B"],
  image: "assets/images/projects/nome.jpg",
  demoUrl: "https://...",
  githubUrl: "https://github.com/...",
  details: "Detalhes extras mostrados ao clicar no card."
}
```

### Adicionar um projeto de equipe

Em `team.projects`, use o mesmo formato acima. Os integrantes ficam em `team.members` (`name` é obrigatório; `role`, `github` e `linkedin` são opcionais).

### Regras úteis

- `demoUrl` ou `githubUrl` vazios (`""`): o botão não aparece
- `demoUrl` aceita link `https://` ou caminho da própria pasta (ex.: `projects/meu-projeto/index.html`)
- `image` vazio: aparece um preview gráfico padrão
- Imagem do card: recomendado **960×600 px** (print da página)

### Outros ajustes

- **Foto:** `assets/images/bernardo-profile.jpg` (vertical 3:4)
- **Currículo:** `documents/curriculo-bernardo-suk-ju-kim.pdf`
- **Cores:** variáveis em `:root`, no topo de `css/style.css`
- **Efeitos:** `effects` em `js/config.js` (digitação, scroll reveal, grid e rede de pontos)

## Publicação

Não existe etapa de build: a própria pasta é o site. Suba `index.html`, `css/`, `js/`, `assets/`, `documents/` e `projects/`.

- **GitHub Pages:** *Settings → Pages* → branch `main`, pasta `/ (root)`
- **Netlify:** arraste a pasta em *Add new site → Deploy manually*
- **Vercel:** importe o repositório, *Framework Preset: Other*, sem build command

Depois de publicar, confira a foto, o download do currículo, o menu no celular e cada contato.

## Contato

- LinkedIn: [bernardo-kim-a51093244](https://www.linkedin.com/in/bernardo-kim-a51093244)
- GitHub: [SukJoo04](https://github.com/SukJoo04)
- Instagram: [@sukju04](https://www.instagram.com/sukju04)

---

Feito por **Bernardo Kim**.