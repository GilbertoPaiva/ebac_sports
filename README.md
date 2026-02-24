# EBAC Sports

Loja virtual de produtos esportivos com carrinho e favoritos.

## Tecnologias

- React + TypeScript
- Redux Toolkit + RTK Query
- Styled Components

## Como executar

```bash
npm install
npm start
```

Acesse em: http://localhost:3000

## Estrutura Redux

```
store/
├── index.ts              # Configuração da store
├── hooks.ts              # useAppSelector / useAppDispatch
├── services/
│   └── produtosApi.ts    # RTK Query – busca de produtos
└── slices/
    └── carrinhoSlice.ts  # Estado do carrinho e favoritos
```

## Scripts

| Comando | Descrição |
|---|---|
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm test` | Executa os testes |
