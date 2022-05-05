import { inventoryData } from '../../data';

// ACTION CREATORS //
export const loadData = (data) => {
    return {
        type: 'inventory/loadData',
        payload: inventoryData,
    };
};

// INITIAL STATE //
const initialInventory = [];
// REDUCER //
export const inventoryReducer = (inventory = initialInventory, action) => {
    switch (action.type) {
        case 'inventory/loadData': {
            return action.payload;
        }
        default: {
            return inventory;
        }
    }
};
