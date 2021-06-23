# Getting started in NLW-TOGETHER!

## A project with ReactJS and Firebase!

- [x] #together
- [x] #unidade
- [ ] código da aula 3
- [ ] código da aula 4
- [ ] código da aula 5

# Contextos
## ---> são a forma mais simples de compartilhar informações entre componentes de um projeto

# Regras de negócio:
{
  "rules": {
    "rooms": {
      ".read": false,
      ".write": "auth != null",
      "$roomId": {
        ".read": true,
        ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",
        "questions": {
          ".read": true,
          ".write": "auth != null && (!data.exists() || data.parent().child('authorId').val() == auth.id)",
          "likes": {
            ".read": true,
            ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)"
          }
        }
      }
    }
  }
}

* não é possivel listar todas as salas dentro do app
* para criar uma nova sala o user precisa estar autenticado
* !data.exists() para edição só após a criação
* $ é para a variável roomId, na interação de uma sala unica
   * qualquer user pode pegar os dados da sala
   * para alterar os dados da sala o user tem que estar autenticado
   * a child authorId tem que ter valor igual a auth.id (é o criador da sala quem altera)
* todos os users podem ler as perguntas da sala
* para alterar uma pergunta
   * o user tem que estar autenticado
   * os dados devem existir
   * e a parent authorId tem que ser igual a auth.id(o user só cria, admin edita)
* likes podem ser lidos por todo mundo
* alteração feita apenas pelo dono do like( da like | tira like )