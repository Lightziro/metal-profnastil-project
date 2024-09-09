import React, {useState} from 'react';
import styles from './ListCategories.module.scss';
import cn from 'classnames'
import {useRouter} from "next/router";
import ModalForm from "../modal-form/ModalForm";
import {Category} from "../../types/item";

interface ListCategories {
    categories: Category[]
}
const ListCategories: React.FC<ListCategories> = ({categories}) => {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState<Category>(null);

    const handleOpenRequest = (category: Category) => {
        setItem(category);
        setOpen(true);
    }

    const handleOnClose = () => {
        setItem(null);
        setOpen(false)
    }

    return (
        <div className='container'>

            <h2 className={styles.textTitle}>Мы продаём</h2>
            <div className={styles.wrapperList}>
                {categories.map((category) => <ItemCategory key={category.id} handleOpenRequest={handleOpenRequest} category={category}/>)}
            </div>
            <ModalForm entityList={categories} itemSelected={item} typeItem='category' open={open} onClose={handleOnClose}/>
        </div>
    );
}
interface ItemCategory {
    category: Category;
    handleOpenRequest: (category: Category) => void;
}

const ItemCategory: React.FC<ItemCategory> = ({category, handleOpenRequest}) => {
    const router = useRouter();

    const handleClick = () => {
        if (!category.products_count) {
            handleOpenRequest(category);
            return;
        }
        router.push(`/${category.url_slug}`);
    }

    return (<div className={styles.cardCategory}>
        <div className={styles.title}>{category.name}</div>
        <div className={styles.pictureSize}>
            <img className={styles.picture} src={`/images/${category.slug}.png`}/>
        </div>
        <button
            onClick={handleClick}
            className={cn('btn-primary', styles.btnRequest)}>{category.products_count ? 'Смотреть' : 'Оставить заявку'}</button>
    </div>)
}
export default ListCategories;
