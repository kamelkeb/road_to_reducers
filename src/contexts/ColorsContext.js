// On peut voir en ce fichier, la partie "modèle" au sens MVC
// et surtout, au sens React modern, fonctionnel, orienté hooks
// et faisant usage de l'API Context
// On remarquera que c'est du javascript pur, sans react ici!!!!
// On s'est conformé à la discipline react mais sans écrire du react ici!!!!
import createDataContext from './createDataContext';

// *** Un reducer est une fonction
// qui prend deux argument, le premier sera le state courant
// le second l'action
// *** Une action est un objet disposant d'un champ 'type' qui contient une string
// et d'un champ 'payload' qui contient de la donnée nécessaire pour créer le nouvel
// état
// on préférera définir le reducer à l'extérieur du component
// rq: aucune modification "sur place" de l'état!!!
const premierReducer = (state, action) => {
    switch (action.type) {
        case 'affectRed':
            return { ...state, red: affectColor(state.red, action.payload) };
        case 'affectBlue':
            return { ...state, blue: affectColor(state.blue, action.payload) };
        case 'affectGreen':
            return { ...state, green: affectColor(state.green, action.payload) };
        case 'assombrir':
            return {
                green: state.green - action.payload,
                blue: state.blue - action.payload,
                red: state.red - action.payload
            };

        default:
            return state;
    }
};
// Fonction permettant de garder la valeur d'une couleur entre 0 et 255
const affectColor = (color, colorIncrement) => Math.min(Math.max(color + colorIncrement, 0), 255);

// C'est une étape indispensable pour nous permettre d'aller vers
// "l'usine à contexts", on va "cacher" au reste du monde
// les strings donnant le type des actions. On encapsule ça dans
// des fonctions
const affectRed = (dispatch) => {
    return (colorIncrement) => dispatch({ type: 'affectRed', payload: colorIncrement });
};
const affectGreen = (dispatch) => {
    return (colorIncrement) => dispatch({ type: 'affectGreen', payload: colorIncrement });
};
const affectBlue = (dispatch) => {
    return (colorIncrement) => dispatch({ type: 'affectBlue', payload: colorIncrement });
};

export const { Context, Provider } = createDataContext(
    premierReducer,
    { affectBlue, affectGreen, affectRed },
    { red: 180, green: 180, blue: 180 }
);

// En définitive, pour mettre en place un context avec provider et reducer (la totale)
// pour une nouvelle ressource il nous suffira:
// 1- créer un fichier spécifique à la ressource (ici ColorContext.js)
// 2 -dans ce ce fichier, définir le reducer adéquat
// 3- définir les fonction qui permettront de modifier l'état avec le pattern:
//      const verbeNomRessource = (dispatch) => {
//              return (args nécessaires ou pas d'arg)=>{
//                          // faire le travail que l'on veut
//                          // au besoin un fetch de données, suivi ou pas, précédé ou pas par
//                          // un appel à dispatch
//              }
//      }
