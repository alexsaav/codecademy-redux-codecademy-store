// INITIAL STATE //
const initialCurrencyFilter = 'USD';
// REDUCER //
export const currencyFilterReducer = (currencyFilter = initialCurrencyFilter, action) => {
    switch (action.type) {
        case 'currencyFilter/setCurrency': {
            return action.payload;
        }
        default: {
            return currencyFilter;
        }
    }
};

// ACTION CREATORS //
export const setCurrency = (currency) => {
    return {
        type: 'currencyFilter/setCurrency',
        payload: currency,
    };
};
