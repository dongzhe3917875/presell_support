// 一定要注意在这里state要取到对应模块的state 比如products的就取得state.products
export const simpleProduct = state => state.simpleProduct.items
export const productNumber = state => state.simpleProduct.num
export const price = state => state.simpleProduct.cost
export const productList = state => state.productList.product_list
export const makeOrderList = state => state.makeOrder.makeOrderList
export const makeSure = state => state.makeOrder.makeSure
export const getCount = state => state.select.count
export const getInfo = state => state.select.select_info
