# 🔧 Solução de Erros - Next.js

## Erro: "Cannot find module './682.js'"

Este erro geralmente ocorre quando há cache corrompido do Next.js.

### Solução Rápida:

1. **Parar o servidor de desenvolvimento** (Ctrl+C no terminal)

2. **Limpar cache:**
```powershell
# Execute o script de limpeza
.\limpar-cache.ps1

# Ou manualmente:
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules/.cache
```

3. **Reiniciar o servidor:**
```powershell
npm run dev
```

### Se o erro persistir:

1. **Reinstalar dependências:**
```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

2. **Limpar tudo e rebuild:**
```powershell
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules
npm install
npm run build
npm run dev
```

### Verificações:

- ✅ Build está passando (`npm run build`)
- ✅ Não há erros de lint (`npm run lint`)
- ✅ Todas as dependências instaladas (`npm install`)

### Arquivos importantes:

- `next.config.js` - Configuração do Next.js (atualizado com webpack config)
- `limpar-cache.ps1` - Script para limpar cache automaticamente

---

**Status atual:** Build passando ✅
