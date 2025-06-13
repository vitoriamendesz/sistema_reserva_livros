# 📚 Sistema de Reserva de Livros (Microsserviços)

Este projeto implementa um sistema de reserva de livros utilizando a arquitetura de **microsserviços** com comunicação via **REST**, usando **Node.js**, **Express**, e **MongoDB**.
Vitória Gabriele 221379692
Hudson Uccelli Matias dos Santos 220457462
Pedro Henrique Lourenço 220145662
Gabriel Presense 221432072
Otávio Luque 221058002
Lucas Roncon 220143522


## 🔧 Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- Axios (para comunicação entre microsserviços)
- Insomnia (para testes manuais de API)


## 📘 book-service

### Funcionalidades:
- Cadastrar livros
- Listar todos os livros
- Detalhar livro por ID
- Atualizar dados do livro
- Alterar status de disponibilidade (`disponível` ou `reservado`)

### Endpoints:
| Método | Rota                      | Descrição                          |
|--------|---------------------------|-------------------------------------|
| POST   | `/books`                  | Cadastrar novo livro                |
| GET    | `/books`                  | Listar todos os livros              |
| GET    | `/books/:id`              | Detalhar um livro                   |
| PUT    | `/books/:id`              | Atualizar informações do livro      |
| PATCH  | `/books/:id/status`       | Atualizar status de disponibilidade |



## 📕 reservation-service

### Funcionalidades:
- Criar reservas de livros disponíveis
- Cancelar reservas
- Listar reservas de um usuário

### Endpoints:
| Método | Rota                                  | Descrição                           |
|--------|----------------------------------------|--------------------------------------|
| POST   | `/reservations`                       | Criar nova reserva                   |
| GET    | `/reservations/user/:userId`          | Listar reservas de um usuário        |
| DELETE | `/reservations/:id`                   | Cancelar reserva                     |



## 🔁 Fluxo de Reserva

1. O usuário solicita uma reserva via `reservation-service`
2. O serviço consulta o `book-service` para verificar se o livro está disponível
3. Se estiver:
   - Cria a reserva
   - Atualiza o status do livro para `"reservado"`
4. Se não estiver:
   - Retorna erro `"Livro não está disponível para reserva"`


## ▶️ Como Executar

### Pré-requisitos:
- Node.js instalado
- MongoDB em execução local (porta 27017)

### Instalação:

```bash
# book-service
cd book-service
npm install
node index.js
```

```bash
# reservation-service
cd reservation-service
npm install
node index.js
```
