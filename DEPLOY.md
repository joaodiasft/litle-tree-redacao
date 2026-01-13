# 🚀 Guia de Deploy - Vercel

## Pré-requisitos

1. Conta no [Vercel](https://vercel.com)
2. Repositório no GitHub

## Passo a Passo

### 1. Preparar o Repositório

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar arquivos
git add .

# Commit inicial
git commit -m "feat: Little Tree completo para Curso Redação Nota 1000"

# Adicionar remote
git remote add origin https://github.com/joaodiasft/litle-tree-redacao.git

# Push para o GitHub
git branch -M main
git push -u origin main
```

### 2. Deploy no Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Add New Project"**
3. Importe o repositório `litle-tree-redacao`
4. O Vercel detectará automaticamente:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Clique em **"Deploy"**

### 3. Configurações Automáticas

O projeto já está configurado com:
- ✅ `vercel.json` para otimizações
- ✅ Next.js App Router
- ✅ TypeScript
- ✅ TailwindCSS
- ✅ Variáveis de ambiente (se necessário)

### 4. Domínio Personalizado (Opcional)

1. No painel do Vercel, vá em **Settings > Domains**
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções

## 📝 Notas Importantes

- O projeto não requer variáveis de ambiente
- Todas as configurações estão em `/data/config.ts`
- O build é automático a cada push no `main`
- Preview deployments são criados para cada PR

## 🔧 Troubleshooting

### Erro de Build

Se houver erro de build, verifique:
1. Versão do Node.js (recomendado: 18.x ou superior)
2. Dependências instaladas (`npm install`)
3. TypeScript sem erros (`npm run build` localmente)

### Erro de Imports

Se houver erro de imports:
- Verifique o `tsconfig.json` (paths configurados)
- Verifique se todos os arquivos estão commitados

## ✅ Checklist de Deploy

- [ ] Código commitado e pushado
- [ ] Build local funciona (`npm run build`)
- [ ] Projeto importado no Vercel
- [ ] Deploy bem-sucedido
- [ ] Site acessível
- [ ] WhatsApp funcionando
- [ ] Links testados
- [ ] Mobile responsivo testado

## 🎉 Pronto!

Seu Little Tree está no ar! 🚀
