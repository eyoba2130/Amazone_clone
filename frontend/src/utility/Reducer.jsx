export const initialState = {
    basket: []
};

export const Reducer = (state, action) => {
    switch (action.type) {

        case 'ADD_TO_BASKET':

            // Check if item already exists
            const existItem = state.basket.find(
                (item) => item.id === action.item.id
            );

            // If item does not exist
            if (!existItem) {
                return {
                    ...state,
                    basket: [
                        ...state.basket,
                        { ...action.item, amount: 1 }
                    ]
                };
            }

            // If item exists, increase amount
            const updatedBasket = state.basket.map((item) =>
                item.id === action.item.id
                    ? { ...item, amount: item.amount + 1 }
                    : item
            );

            return {
                ...state,
                basket: updatedBasket
            };

        default:
            return state;
    }
};