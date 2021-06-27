<h1 align="center">
<br>
  <img src="https://svgshare.com/i/YZC.svg" alt="LetMeAsk">
<br>
<br>
Let me Ask
</h1>

<p align="center">A project builded during Next Level Week Together classes, in mission ReactJS</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<div align="center">
  <img src="https://i.ibb.co/Y83ycDW/Home.png" alt="Tela da home da página" >
  <img src="https://i.ibb.co/pLtMQ9d/Room.png" alt="Tela de uma sala do let me ask" >
</div>

<hr />

## Features

This app features all the latest tools and practices in mobile development!

- **React Js** — A JavaScript library for building user interfaces
- **Firebase** — A Google tool for use a realtime database
- **TypeScript** — An improved JavaScript for typing data


## Getting started

1. Clone this repo using `git clone git@github.com:CarlosLevir/tindev.git`
2. Move yourself to the appropriate directory: `cd tindev`<br />
3. Run `yarn` to install dependencies<br />

### Getting started with the Firebase

1. Create your own [firebase project](console.firebase.google.com) unmarking google analytics option.
2. go into project configurations
<img src="https://i.ibb.co/tQjjgg8/Captura-de-tela-de-2021-06-27-11-48-40.png" alt="Como acessar configurações do projeto" border="0">
3. Create your web app
<img src="https://i.ibb.co/Fg96V0Y/Captura-de-tela-de-2021-06-27-11-51-59.png" alt="Como criar app web" border="0">
4. After create web app, create a .env.local file in root folder, then copy and paste the following sdk values:

```

# Firebase

REACT_APP_API_KEY = "value"
REACT_APP_AUTH_DOMAIN = "value"
REACT_APP_DATABASE_URL = "value"
REACT_APP_PROJECT_ID = "value"
REACT_APP_STORAGE_BUCKET = "value"
REACT_APP_MESSAGING_SENDER_ID = "value"
REACT_APP_APP_ID = "value"

```

5. In option Authentication at side page, activate a google authentication
6. In option realtime database at side page, create a realtime database marking unitedstates option nad block database
7. After create a realtime database,go into rules and paste the following rules:

```
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
```

<img src="https://i.ibb.co/Bt7N8NZ/rules.png" alt="rules" border="0">

8. run `yarn start` in the terminal.

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
