# DotVSCleaner

## Como usar?
Clone o repositório e abra uma janela do powershell ou cmd na mesma pasta do repositório clonado depois certifique-se que o nodejs está instalado(`node -v`).
Após isso basta instalar as dependencias com `npm i`. Feito todos esses processos com sucesso rode o script de getFolders `npm run getFolders` quando a execução terminar o script irá gerar um arquivo chamado `outPut.json` que contem as pastas que o outro script deverá deletar. Antes de deletar caso o usuário queira verificar oque deverá ser deletado. Depois de gerado esses arquivos para deletar as pastas bastas executar `npm run deleteFolders` assim o script irá deletar todas as pastas contidas no `outPut.json` feito isso caso você tenha muitos projetos do visual studio irá liberar bastante espaço.
