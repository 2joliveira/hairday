# 💇 Hairday

Hairday é uma solução web completa para gerenciamento de agendamentos em salões de beleza e barbearias. O aplicativo permite que usuários agendem serviços, visualizem seus compromissos e gerenciem horários de forma intuitiva e responsiva.

## ✨ Funcionalidades

- ✅ Criar e agendar compromissos com data e hora
- ✅ Visualizar lista de agendamentos
- ✅ Editar compromissos existentes
- ✅ Deletar agendamentos
- ✅ Armazenamento local de dados (LocalStorage)
- ✅ Validação de formulários robusta
- ✅ Interface responsiva e moderna
- ✅ Seleção de horários de forma intuitiva

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| React | 19.2.0 | Biblioteca UI |
| TypeScript | 5.9.3 | Tipagem estática |
| Vite | 7.2.4 | Build tool |
| Tailwind CSS | 4.1.18 | Estilização |
| React Hook Form | 7.71.1 | Gerenciamento de formulários |
| Zod | 4.3.6 | Validação de schemas |
| React DatePicker | 9.1.0 | Seletor de datas |
| date-fns | 4.1.0 | Utilitários de data |
| UUID | 13.0.0 | Geração de IDs únicos |
| class-variance-authority | 0.7.1 | Gerenciamento de variações de componentes |

## 📦 Pré-requisitos

- Node.js 24.13.0 ou superior
- npm ou yarn

## 🚀 Como Instalar

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd hairday
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador e acesse:
```
http://localhost:5173
```

## 💻 Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila o projeto para produção |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Verifica qualidade do código com ESLint |

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes de UI base
│   ├── Error.tsx       # Componente de erro
│   ├── ListCard.tsx    # Card para lista de agendamentos
│   └── ListItem.tsx    # Item da lista
├── hooks/              # Custom hooks
│   ├── use-appointment.ts    # Hook para gerenciar um agendamento
│   └── use-appointments.ts   # Hook para gerenciar múltiplos agendamentos
├── models/             # Definições de tipos e interfaces
│   └── appointment.ts  # Modelo de agendamento
├── pages/              # Páginas da aplicação
│   ├── Home/          # Página inicial
│   └── index.ts       # Exportações
├── utils/              # Funções utilitárias
│   └── hourToTime.ts  # Conversão de hora para formato de exibição
├── assets/             # Imagens e ícones
├── App.tsx             # Componente raiz
├── main.tsx            # Arquivo de entrada
└── index.css           # Estilos globais
```

## 🎨 Componentes Principais

### `Home`
Página principal que contém a sidebar com o formulário de agendamento e a lista de compromissos.

### `Sidebar`
Painel lateral com formulário para criar novos agendamentos.

### `ListAppointments`
Componente que exibe a lista de todos os agendamentos cadastrados.

### Componentes UI
- `Button` - Botão padrão
- `ButtonIcon` - Botão com ícone
- `InputText` - Campo de texto
- `InputDate` - Seletor de data
- `TimeSelect` - Seletor de hora
- `Text` - Componente de texto

## 🔐 Validação

O projeto utiliza Zod para validação robusta de formulários:
- Validação de campos obrigatórios
- Validação de formato de dados
- Mensagens de erro claras

## 💾 Armazenamento de Dados

Os agendamentos são armazenados no navegador utilizando LocalStorage, permitindo persistência de dados mesmo após fechar a aplicação.

## 📱 Responsividade

A aplicação é totalmente responsiva, funcionando perfeitamente em:
- Desktop
- Tablet
- Mobile

## 🤝 Contribuindo

Se quiser contribuir com melhorias:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Add MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença MIT.

---

**Dúvidas ou Sugestões?** Entre em contato ou abra uma issue no repositório!
