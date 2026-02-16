# Script para limpar cache do Next.js e resolver erros

Write-Host "Limpando cache do Next.js..." -ForegroundColor Yellow

# Parar processos Node
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Remover pastas de cache
if (Test-Path .next) {
    Remove-Item -Recurse -Force .next
    Write-Host "✓ Pasta .next removida" -ForegroundColor Green
}

if (Test-Path node_modules/.cache) {
    Remove-Item -Recurse -Force node_modules/.cache
    Write-Host "✓ Cache do node_modules removido" -ForegroundColor Green
}

Write-Host "`nCache limpo! Execute 'npm run dev' novamente." -ForegroundColor Green
