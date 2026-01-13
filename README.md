# 🌳 Little Tree - Curso Redação Nota 1000

Link in bio + mini-site de conversão premium para o **Curso Redação Nota 1000**.

## 🚀 Stack Tecnológica

- **Next.js 14** (App Router) + TypeScript
- **TailwindCSS** - Estilização moderna
- **shadcn/ui** - Componentes base acessíveis
- **framer-motion** - Animações suaves e modernas
- **lucide-react** - Ícones elegantes

## 🎨 Design System

**Tema: Rosa Bailarina + Branco + Cinza + Preto**

### Cores
- **Rosa Bailarina** (principal): `#F7A1B5`
- **Rosa forte** (CTA/hover): `#F26D8A`
- **Preto premium**: `#0B0B0D`
- **Cinza texto**: `#5B5B63`
- **Cinza claro** (bg): `#F6F6F8`
- **Branco**: `#FFFFFF`

### Características
- Mobile-first, centralizado, max-width 420–520px
- Cantos arredondados grandes (22–28px)
- Cards grandes "gordinhos"
- Sombra premium, bordas suaves
- Padrão de bolhas/círculos discretos no fundo
- Tipografia moderna (Inter)

## 📁 Estrutura do Projeto

```
/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Little Tree (página principal /)
│   ├── globals.css        # Estilos globais
│   └── site/              # Mini-site de apresentação
│       └── page.tsx       # Página /site
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes shadcn/ui base
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── accordion.tsx
│   │   ├── toast.tsx
│   │   └── ...
│   └── ...               # Componentes customizados
│       ├── PageShell.tsx
│       ├── HeaderBrand.tsx
│       ├── CtaCard.tsx
│       ├── CategoryGrid.tsx
│       └── ...
├── data/                 # Configuração editável
│   └── config.ts         # ⭐ Toda a configuração do site
├── lib/                  # Utilitários
│   ├── utils.ts          # Funções auxiliares (scroll, formatação)
│   ├── whatsapp.ts       # Integração WhatsApp
│   ├── tracking.ts       # Sistema de tracking
│   └── copy.ts           # Função de copiar
├── hooks/                # React Hooks
│   └── use-toast.ts      # Hook para toast notifications
├── styles/               # Estilos globais
│   └── globals.css
└── vercel.json           # Configuração Vercel
```

## ⚙️ Configuração

**Todo o conteúdo editável está em `/data/config.ts`:**

- ✅ Branding (nome, tagline, localização)
- ✅ Contatos (WhatsApp, endereço, Instagram)
- ✅ Headlines e textos
- ✅ Links e CTAs configuráveis
- ✅ Horários e turmas
- ✅ Planos e valores
- ✅ Categorias
- ✅ Benefícios
- ✅ Como funciona (passos)
- ✅ Competências ENEM (C1–C5)
- ✅ Depoimentos
- ✅ FAQ
- ✅ Materiais gratuitos
- ✅ Promoções (opcional)

**Edite apenas o arquivo `config.ts` para atualizar todo o site!**

## 🛠️ Desenvolvimento

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Acessar
# http://localhost:3000

# 4. Build para produção
npm run build

# 5. Iniciar produção local
npm start
```

## 📱 Funcionalidades Implementadas

### ✅ FUNÇÃO 1 — Links editáveis por JSON/TS
- Configuração completa em `config.ts`
- Links podem ser desabilitados (`enabled: false`)
- Badges dinâmicos (Novo, Promo, Em breve, etc)

### ✅ FUNÇÃO 2 — CTA WhatsApp com mensagem pronta
- Botão principal: WhatsApp matrícula
- Botão urgência: WhatsApp gerencial (badge "URGENTE")
- Mensagens pré-configuradas

### ✅ FUNÇÃO 3 — Scroll suave + âncoras
- Scroll suave ao clicar em âncoras
- Highlight visual ao chegar na seção (glow rosa)
- URL hash atualizado sem recarregar

### ✅ FUNÇÃO 4 — Botão flutuante WhatsApp (FAB)
- FAB fixo no canto inferior direito
- Animação pulse suave
- Clique abre WhatsApp matrícula

### ✅ FUNÇÃO 5 — Copiar + toast
- Copiar endereço
- Copiar números de telefone
- Toast premium "Copiado!"

### ✅ FUNÇÃO 6 — Estados e badges
- Badges: "Novo", "Vagas limitadas", "Em breve", "Promo", "Urgente"
- Estado "Em breve": botão desabilitado + tooltip

### ✅ FUNÇÃO 7 — Seções completas
- Horários e turmas (cards)
- Planos e valores (cards por turma)
- Como funciona (stepper 5 passos)
- Benefícios (bullets)
- Resultados (depoimentos + Instagram)
- Materiais gratuitos (cards)
- Localização (map link + copiar)
- FAQ (accordion)
- Contato (botões)

### ✅ FUNÇÃO 8 — Formulário de Lead
- Campos: Nome, WhatsApp, Objetivo
- Ao enviar: monta mensagem e abre WhatsApp

### ✅ FUNÇÃO 9 — Tracking (cliques)
- Sistema de tracking em localStorage
- Eventos: whatsapp_click, category_click, lead_submit, etc
- Compatível com Google Tag Manager (dataLayer)

### ✅ FUNÇÃO 10 — Modo Promo (opcional)
- Config `PROMO` em `config.ts`
- Banner no topo + contador (se configurado)

### ✅ FUNÇÃO 11 — Acessibilidade
- Contraste adequado
- Foco visível
- aria-label nos ícones
- Botões min-height 48px
- Navegação por teclado

### ✅ FUNÇÃO 12 — Performance
- Next.js Image otimizado
- Lazy loading
- Componentes leves
- Build otimizado

## 🚢 Deploy no Vercel

### Passo a Passo Rápido

1. **Preparar repositório:**
```bash
git init
git add .
git commit -m "feat: Little Tree completo para Curso Redação Nota 1000"
git remote add origin https://github.com/joaodiasft/litle-tree-redacao.git
git branch -M main
git push -u origin main
```

2. **Deploy no Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em **"Add New Project"**
   - Importe o repositório
   - O Vercel detectará automaticamente o Next.js
   - Clique em **"Deploy"**

3. **Pronto!** 🎉
   - Deploy automático a cada push
   - Preview deployments para PRs
   - Domínio personalizado (opcional)

📖 **Guia completo:** Veja `DEPLOY.md`

## 📄 Páginas

### `/` - Little Tree (Principal)
Página principal com todos os links, CTAs e seções:
- Header com branding
- Headline central
- 3 CTAs principais (rosa/preto alternados)
- Grid de categorias
- Seções: Horários, Valores, Como Funciona, Redação, Materiais, Resultados, FAQ, Endereço, Contato

### `/site` - Mini-site de Apresentação
Página mais institucional e detalhada:
- Hero com CTA
- Método (como funciona)
- Diferenciais
- Como é a correção (C1–C5)
- Depoimentos
- FAQ
- Localização e Contato

## 🎯 Próximos Passos

1. **Personalizar conteúdo:**
   - Edite `/data/config.ts`
   - Atualize horários, valores, depoimentos
   - Ajuste textos e links

2. **Deploy:**
   - Siga o guia em `DEPLOY.md`
   - Configure domínio personalizado (opcional)

3. **Analytics (opcional):**
   - Adicione Google Analytics
   - Configure Google Tag Manager
   - O tracking já está preparado

## 📝 Licença

© 2024 Curso Redação Nota 1000

---

**Desenvolvido com ❤️ para o Curso Redação Nota 1000**
