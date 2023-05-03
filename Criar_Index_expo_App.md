# Tutorial de como criar o index em um aplicação em react native usando o Expo

- Por padrão quando criamos um app usando `npx create-expo-app` não é criado um index, caso queira cirar um é só seguir os seguintes passos

### 1) criar Index.js na pasta raiz da aplicação

### 2) entrar no package.json
- por padrão temos ` "main": "node_modules/expo/AppEntry.js"
`
<br>
vamos substituir  por ` "main": "./index"
`

### 3) AppEntry.js
- seguir o caminho na pasta `node_modules` para achar o `AppEntry.js`
- Vamos copiar ele por completo e colar no `index.js`
```
import registerRootComponent from 'expo/build/launch/registerRootComponent';

import App from './src/App';

registerRootComponent(App);
```
- O import do App vai ser usado para colocar o caminho do App que vai rodar quando iniciar a aplicação usando `expo start`