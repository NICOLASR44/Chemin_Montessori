## Composant / React
```js
function Header() {}
```
Convention PascalCase
Le composant est nommé en fonction de son utilité / sa position dans la page
Si le composant est une page, le préciser comme MainPage ou CityPage
Ex: Header, Footer, MainContainer, Card, Button (pour des compos classiques) / UserPage, HomePage... (pour page qui contient plusieurs composants).

## CSS
```css
.header{} .footer{} .main-container{}
```
Le css porte la classe du composant dans lequel il tombe. La convention est en kebab-case

## Javascript
```js
const checkPassword = () => {}
```
Des fonctions fléchées, descriptives, en anglais. N'ayez pas peurs d'être verbeux.
On doit comprendre la fonction sans avoir besoin d'un commentaire pour l'expliquer.
N'hésitez pas à utiliser des verbes d'actions pour décrire les fonctions qui font quelque chose : get, fetch, check...
Ex :
```js
const fetchWeatherAPI = () => {}
const getValueFromArray = () => {}
```