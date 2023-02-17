function BasketItem ({item, product}) {
    return(
        <>
        <li className="basket-item">
            <div>
            {product.title} x <span>{item.amount}</span>
        </div>
        </li>
         
         <style>{`
            .basket-item{
                padding-bottom: 10px;
                font-size: 17px;
            }

            .basket-item span {
                color: #999;
            }
         `}</style>
        </>
        
    )
}

export default BasketItem;