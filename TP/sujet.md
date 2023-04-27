# TP = liste de contact

Datas initial

```js
contacts = [
  {
    id: 1,
    firstname: "Gandalf",
    lastname: "Legris",
    email: "gandalf@laconte.lotr",
  },
  {
    id: 2,
    firstname: "Sarumane",
    lastname: "Leblanc",
    email: "sarumane@laconte.lotr",
  },
];
```

- 1 formulaire d'ajout de contact
- 1 boutton pour supprimer un contact
- mettre en forme

bonus =

- modification du nom du contact

/!\

pour avoir un id unique : utiliser un timestamp

let now = new Date();
let timestamp = now.getTime();

/!\
