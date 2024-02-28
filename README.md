# TestIbm

## Antes de tudo, verifique se suas portas 4200 e 8080 do localhost estão livres!

## Para rodar o backend: 

### 1. Tenha um servidor local MySql Rodando

#### 1.1 Crie uma database chamada 'bank'
<img width="237" alt="Captura de Tela 2024-02-28 às 18 04 49" src="https://github.com/gfavo/TestIbm/assets/45298748/8727a977-2cb1-4cfc-ae27-716ee58ca489">

#### 1.2 Edite as informacoes de acesso

##### Abra o projeto back/bank-endpoint em algum IDE de sua preferência.

##### Edite o arquivo application.properties em src/main/resources:

<img width="945" alt="Captura de Tela 2024-02-28 às 18 08 30" src="https://github.com/gfavo/TestIbm/assets/45298748/66c587f9-3f3f-405c-9e09-ff02aa513575">



(se estiver rodando o mysql na porta 3306 deixe esta linha intacta, senão modifique apenas a porta) -
spring.datasource.url=jdbc:mysql://${MYSQL_HOST:localhost}:3306/bank


spring.datasource.username=seu usuario mysql
spring.datasource.password=sua senha mysql

#### 1.3 Rode o projeto!

##### Rode o arquivo /bank-endpoint/src/main/java/com/bank/bankendpoint/BankEndpointApplication.java

<img width="1017" alt="Captura de Tela 2024-02-28 às 18 12 29" src="https://github.com/gfavo/TestIbm/assets/45298748/1b525d5b-04cc-43c3-910d-50b8d2c95466">


## Para rodar o frontend: 

### 1. Abra o projeto front/banco em seu editor de preferência

#### 1.1 Rode um npm install

#### 1.2 Rode ng serve

##### O aplicativo vai estar ativo em localhost:4200


## Funções do aplicativo:


### Só deu tempo de fazer o cadastro, fiz um login também, depósito e transferência.
### Tem muita coisa que mudaria com mais tempo, como adicionar auth token (e session cookies), chamadas de um jeito mais seguro e bem construido, responsividade, visual mais bonito , e claro implementar a consulta. 

### Cadastro: 

<img width="1505" alt="Captura de Tela 2024-02-28 às 18 17 27" src="https://github.com/gfavo/TestIbm/assets/45298748/a3f1d142-6344-4480-93ac-bb014e5de4f6">


### Login:

<img width="1504" alt="Captura de Tela 2024-02-28 às 18 18 20" src="https://github.com/gfavo/TestIbm/assets/45298748/8fd91b9d-8099-4032-9147-5606be01f604">

### Depósito:

<img width="1499" alt="Captura de Tela 2024-02-28 às 18 19 03" src="https://github.com/gfavo/TestIbm/assets/45298748/6f9daf36-6314-4e0b-99be-874110ee0939">

### Transferência:

<img width="1508" alt="Captura de Tela 2024-02-28 às 18 19 49" src="https://github.com/gfavo/TestIbm/assets/45298748/341f0464-8a17-4128-9837-903ac48b1aa2">




