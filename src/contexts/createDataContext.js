import React, { useReducer } from 'react';

const createDataContext = (reducer, actions, initialState) => {
    // Mettre en place un context:
    // 1- créer le context et l'exporter
    const Context = React.createContext();
    // L'objet obtenu disposera d'un champ 'Provider'

    // 2-  On utilisera ce champ pour définir un HOC spécial:
    const Provider = ({ children }) => {
        // udeReducer est une fonction spéciale (un hook), qui prend dans le cas présent
        // deux argument (elle peut en prendre un 3ème, voir la doc au besoin)
        // Le premier doit être un reducer
        // le deuxième argument sera la valeur initiale de l'état
        const [ state, dispatch ] = useReducer(reducer, initialState);
        // useReduce rend le state (composé de petits bouts mis dans un tout unique) et une fonction 'dispatch'
        // la fonction dispatch pourra être passée à d'autres composants qui l'utiliseront en lui
        // passant un objet action

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
    };

    return { Context, Provider };
};

export default createDataContext;
