import { injectGetItems } from "@/folderForExercise/base.crud.api";

const WAREHOUSE_TAG = "warehouse";
const WAREHOUSE_API_ROUTE=""

export const {useGetWarehousesQuery} = injectGetItems(
    "getWarehouse",
    WAREHOUSE_TAG,
    WAREHOUSE_API_ROUTE

)