class productsInventoryPage{

    elements = {
        productImage: () => '.inventory_item_img img',
        productName: () => '.inventory_item_name',
        productPrice: () => '.inventory_item_price',
        addToCartBtn: () => '.btn_inventory'
    }

}
module.exports = new productsInventoryPage()