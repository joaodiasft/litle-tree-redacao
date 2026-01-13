# 🚀 Início Rápido

## Passo 1: Instalar Dependências

```bash
npm install
```

## Passo 2: Testar Localmente

```bash
npm run dev
```

Acesse: http://localhost:3000

## Passo 3: Personalizar Conteúdo (Opcional)

Edite `/data/config.ts` para ajustar:
- Horários
- Valores
- Depoimentos
- FAQ
- Qualquer conteúdo

## Passo 4: Subir no Git

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "feat: Little Tree completo para Curso Redação Nota 1000

- Next.js 14 com App Router + TypeScript
- TailwindCSS + shadcn/ui
- Animações com framer-motion
- Sistema de configuração editável
- Página principal (Little Tree) completa
- Mini-site de apresentação (/site)
- 12 funções obrigatórias implementadas
- WhatsApp integrado
- Tracking de eventos
- Acessibilidade e performance otimizadas
- Pronto para deploy no Vercel"

# Adicionar remote (se ainda não foi adicionado)
git remote add origin https://github.com/joaodiasft/litle-tree-redacao.git

# Renomear branch para main
git branch -M main

# Fazer push
git push -u origin main
```

## Passo 5: Deploy no Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Add New Project"**
3. Importe o repositório `litle-tree-redacao`
4. O Vercel detectará automaticamente o Next.js
5. Clique em **"Deploy"**
6. Pronto! 🎉

## ✅ Tudo Funcionando?

- [ ] Site abre em http://localhost:3000
- [ ] WhatsApp abre corretamente
- [ ] Links funcionam
- [ ] Scroll suave funciona
- [ ] Botão flutuante aparece
- [ ] Copiar endereço funciona
- [ ] Build funciona (`npm run build`)

## 🎨 Personalização Rápida

**Cores:** Edite `tailwind.config.ts` (cores já configuradas)

**Conteúdo:** Edite `/data/config.ts` (tudo editável)

**Componentes:** Em `/components/` (reutilizáveis)

## 📞 Suporte

Se tiver dúvidas:
1. Veja o `README.md` completo
2. Veja o `DEPLOY.md` para deploy
3. Veja o `PROJETO_COMPLETO.md` para visão geral

---

**Boa sorte com o deploy! 🚀**
