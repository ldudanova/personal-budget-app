import type {CategoriesSpentTotal} from "../store/categoriesSlice.ts";

export interface CategoriesSpentTotalState {
    categoriesSpentTotal: CategoriesSpentTotal[],
    loading: boolean,
    error?: string,
}