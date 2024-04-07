
export interface PizzaModel {
    id: number;
    name: string;
    price: number;
    cookingTimeMin: number;
    description: string | null;
    pizzaSizeId: number;
    pizzaSizeDiametr: number;
}

export interface CreatePizzaModel {
    name: string;
    pizzaSizeId: number;
    price: number;
    description: string | null;
    cookingTimeMin: number;
}

export interface PizzaSizeModel {
    id: number;
    pizzaSizeDiametr: number;
}

// export interface PizzaResponseModel {
//     pizzas: PizzaModel[];
//     limit: number;
//     skip: number;
//     total: number;
// }