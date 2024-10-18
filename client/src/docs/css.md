# Convention nommage

## CSS

## Pourquoi utiliser BEM ?

BEM (Block, Element, Modifier) est une méthodologie de nommage en CSS qui permet de rendre le code plus lisible et maintenable. Voici quelques raisons de l'utiliser :

    - Lisibilité et clarté : Les noms de classes BEM sont explicites, ce qui facilite la compréhension du code.
    - Réutilisabilité : BEM encourage la création de composants réutilisables, réduisant la duplication de code.
    - Modularité : En utilisant BEM, les styles sont mieux encapsulés, ce qui réduit les conflits CSS.
    - Maintenance : Les grandes bases de code deviennent plus faciles à maintenir et à modifier grâce à une structure claire et prévisible.

## Comment utiliser BEM ?

La méthode BEM se compose de trois parties principales :

    - Bloc (Block) : Un composant React qui représente une partie distincte de l'interface. Exemple : header, menu, card, list...
    - Élément (Element) : Une partie d'un bloc qui a une fonction spécifique. Les éléments sont décrits par le nom du bloc suivi de deux underscores (__). Exemple : menu__item, button__icon.
    - Modificateur (Modifier) : Une variation ou un état particulier d'un bloc ou d'un élément. Les modificateurs sont ajoutés en utilisant deux tirets (--). Exemple : menu__item--active.

## Exemple

Voici un exemple concret pour illustrer l'utilisation de BEM :

### HTML

```html
<article class="card">
  <div class="card__header">
    <h2 class="card__title">Titre de la carte</h2>
  </div>
  <div class="card__body">
    <p class="card__text">Ceci est le contenu de la carte.</p>
  </div>
  <div class="card__footer">
    <button class="card__button--primary">Action</button>
  </div>
</article>
```

### CSS

```css
.card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;

  .card__header {
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }

  .card__title {
    font-size: 1.5em;
    margin: 0;
  }

  .card__body {
    margin-bottom: 1rem;
  }

  .card__text {
    margin: 0;
  }

  .card__footer {
    text-align: right;
  }

  .card__button {
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  }

  .card__button--primary {
    background-color: #007bff;
    color: white;
  }
}
```

## Checklist sur le choix du nom

Un doute sur l'écriture de la classe ?
Les noms sont écrits :

- En BEM : menu\_\_button - Le nom du composant arrive en premier.
- En anglais : title et non titreAdopter le css BEM
- En kebab-case : card-list par exemple et non cardList (camelCase). Cela donnera en BEM card-list\_\_title
- Le parent prend toujours le nom de bloc (ici article class="card")

## Points de vigilance

- Attention au "deep nesting". Plus les classes sont nestées, plus elles deviennent spécifiques et difficiles à remplacer.
- Styliser les classes et non les ID. (Les ID possèdent un très haut niveau de spécificité, ce qui rend le code moins modulable)

### Exemple :

```css
.card {
  /* A NE PAS FAIRE */
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;

  .card__header {
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;

    .card__title {
      font-size: 1.5em;
      margin: 0;

      ul {
        li {
          margin: 0; /* Ici, li est ultra spéficique et quasi-impossible à redéfinir*/
        }
      }
    }
  }
  /* A NE PAS FAIRE */
  #button {
    color: red;
  }
}

/* BREACKPOINTS  */

/* @media (width <= 1280px) {
        
    } */
/* Tablette */
@media (width <= 1024px) {
}
/* phone */
@media (width <= 640px) {
}
.container {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
}
```
