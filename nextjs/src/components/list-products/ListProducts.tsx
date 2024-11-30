import React, {useState} from 'react';
import styles from './ListProducts.module.scss';
import cn from 'classnames'
import {useRouter} from "next/router";
import ModalForm from "../modal-form/ModalForm";
import {Category, Product} from "../../types/item";
import ReactImageZoom from 'react-image-zoom';
import ModalItemForm from "../modal-item-form/ModalItemForm";

interface ListProducts {
    products: Product[]
}

const ListProducts: React.FC<ListProducts> = ({products}) => {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState<Product>(null);

    const handleOpenRequest = (product: Product) => {
        setItem(product);
        setOpen(true);
    }

    const handleOnClose = () => {
        setItem(null);
        setOpen(false)
    }

    return (
        <div className='container'>

            <h2 className={styles.textTitle}>Оформление по низким ценам:</h2>
            <div className={styles.wrapperList}>
                {products.map((category) => <ItemProduct key={category.id} handleOpenRequest={handleOpenRequest}
                                                          product={category}/>)}
            </div>
            <ModalItemForm entityList={products} itemSelected={item} typeItem='product' open={open}
                       onClose={handleOnClose}/>
        </div>
    );
}

interface ItemProduct {
    product: Product;
    handleOpenRequest: (product: Product) => void;
}

const ItemProduct: React.FC<ItemProduct> = ({product, handleOpenRequest}) => {
    const router = useRouter();

    const handleClick = () => {
        handleOpenRequest(product);
    }

    return (<div className={styles.cardCategory}>
        <div className={styles.title}>{product.name}</div>
        <div className={styles.pictureSize}>
            <ReactImageZoom zoomPosition='bottom' zoomWidth={30} width={180} scale={1} height={180} img={`/images/products/${product.slug}.png`}/>
        </div>
        <button
            onClick={handleClick}
            className={cn('btn-primary', styles.btnRequest)}>Оставить заявку</button>
    </div>)
}
export default ListProducts;
