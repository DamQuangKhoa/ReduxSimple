let initialState = [
{
    id:1,
    name: 'Iphone 7',
    image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    description :'San Pham Do Apple San Xuat',
    price:450 ,
    rating:5,
    inventory : 10
},{
    id:1,
    name: 'Samsung 7',
    image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    description :'San Pham Do Samsung San Xuat',
    price:450 ,
    rating:4,
    inventory : 10
},{
    id:1,
    name: 'Oppo 7',
    image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    description :'San Pham Do Oppo San Xuat',
    price:450 ,
    rating:3,
    inventory : 10
}
]
const products = (state = initialState, action) =>{
    switch (action.type) {
        // case value:
            
        //     break;
    
        default:
        return [...state]
    }
}
export default products;