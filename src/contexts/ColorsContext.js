import React, { useReducer } from 'react';

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

// Mettre en place un context:
// 1- créer le context et l'exporter
export const ColorsContext = React.createContext();
// L'objet obtenu disposera d'un champ 'Provider'
// 2-  On utilisera ce champ pour définir un HOC spécial:
export const ColorsProvider = ({ children }) => {
    // udeReducer est une fonction spéciale (un hook), qui prend dans le cas présent
    // deux argument (elle peut en prendre un 3ème, voir la doc au besoin)
    // Le premier doit être un reducer
    // le deuxième argument sera la valeur initiale de l'état
    const [ colorState, dispatch ] = useReducer(premierReducer, { red: 180, green: 180, blue: 180 });
    // useReduce rend le state (composé de petits bouts mis dans un tout unique) et une fonction 'dispatch'
    // la fonction dispatch pourra être passée à d'autres composants qui l'utiliseront en lui
    // passant un objet action

    return (
        <ColorsContext.Provider
            value={{
                colorState,
                affectRed: affectRed(dispatch),
                affectGreen: affectGreen(dispatch),
                affectBlue: affectGreen(dispatch)
            }}
        >
            {children}
        </ColorsContext.Provider>
    );
};
