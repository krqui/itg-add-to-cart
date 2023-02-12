import React from "react";
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from "vtex.order-manager/OrderForm" // una app
import ButtonGroup from "./ButtonGroup";
import { generateBlockClass } from "@vtex/css-handles";
import styles from './styles.css';

const AddToCartInfo = ({blockClass}:{blockClass:string})=> {
    const container = generateBlockClass(styles.container, blockClass);
    const container__item = generateBlockClass(styles.container__item,blockClass);
    const productInfo = useProduct()
    const { orderForm:{
        items,
        totalizers
    } }  = useOrderForm()
    console.log("Este producto tiene esta info:",productInfo);
    console.log("Estos son mis totales:",totalizers[0]);
    return (
        <div className={container}>
            {
                items.map((item:any,index:number)=> {
                    console.log(item);
                    return (
                        <div key={index} className={container__item}>
                            <div>
                                <img src={item.imageUrls.at1x}></img>
                            </div>
                            <div>
                                <p>{item.name}</p>
                                <p>{item.id}</p>
                                <p>{item.price /100}</p>
                                <p>Cant: {item.quantity}</p>
                            </div>
                        </div>
                    )
                })
            }
            {/*<Totalizers totalizers={totalizers[0]}/>*/}{/* Valor total */}
            <div>
                <p>Tenemos ${items.length} items en tu compra.</p>
                <p>Total: ${totalizers[0]?.value / 100}</p>
            </div>
            <ButtonGroup/>{/* Acciones */}
        </div>
    )
} 


export default AddToCartInfo