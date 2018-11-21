let initialState = [
    {
        id:1,
        name: 'Iphone 7',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        price:450 ,
        amount : 0
    },{
        id:1,
        name: 'Iphone 7',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        price:450 ,
        amount : 0
    },{
        id:1,
        name: 'Iphone 7',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        price:450 ,
        amount : 0
    }
    ]
    const carts = (state = initialState, action) =>{
        switch (action.type) {
            // case value:
                
            //     break;
        
            default:
            return [...state]
        }
    }
    export default carts;