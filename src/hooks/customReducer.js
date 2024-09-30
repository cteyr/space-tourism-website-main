import { useReducer } from 'react';


// Define el reducer antes de usarlo
const customReducer = (state, action) => {
    switch (action.type) {
        case "character1":
            return {
                character1: "selected",
                character2: "character2",
                character3: "character3",
                character4: "character4",
            };
        case "character2":
            return {
                character1: "character1",
                character2: "selected",
                character3: "character3",
                character4: "character4",
            };
        case "character3":
            return {
                character1: "character1",
                character2: "character2",
                character3: "selected",
                character4: "character4",
            };
        case "character4":
            return {
                character1: "character1",
                character2: "character2",
                character3: "character3",
                character4: "selected",
            };
        case "number1":
            return {
                number1: "selected",
                number2: "number2",
                number3: "number3",
            };
        case "number2":
            return {
                number1: "number1",
                number2: "selected",
                number3: "number3",
            };
        case "number3":
            return {
                number1: "number1",
                number2: "number2",
                number3: "selected",
            };
        default:
            return state;
    }
};

// Hook personalizado que utiliza el reducer
export function useCustomReducer(initialState) {
    const [state, dispatch] = useReducer(customReducer, initialState);

    return { state, dispatch };
}

