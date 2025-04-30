import React, {useEffect, useState} from "react";
import {useFormik} from "formik";
import {defaultFormOrder} from "./constants";
import SelectField from "../../fields/select-field/SelectField";
import {Category, Product} from "../../types/item";
import NameField from "../../fields/name-field/NameField";
import styles from './ModalItemForm.module.scss';
import {createOrder} from "../../server/client-api";
import {OrderSchema} from "../../schemas/OrderSchema";
import PhoneInputMask from "../../fields/mask-field/phone-input-mask/PhoneInputMask";
import TextAreaField from "../../fields/textarea-field/TextAreaField";
import {Dialog} from "@mui/material";
import cn from 'classnames';

interface ModalItemForm {
    open: boolean,
    onClose: () => void,
    typeItem: string,
    itemSelected: Category | Product,
    entityList: Category[] | Product[] | any
}

const ModalForm: React.FC<ModalItemForm> = ({open, onClose, itemSelected, typeItem, entityList}) => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const formik = useFormik({
        initialValues: defaultFormOrder,
        validationSchema: OrderSchema,
        onSubmit: async values => {
            setLoading(true);
            const data = await createOrder(values);
            switch (data.status) {
                case 200:
                    setLoading(false);
                    alert('Ваша заявка принята, скоро с вами свяжется наш сотрудник');
                    onClose();
                    break;
                case 400:
                    alert('Ошибка валидации');
                    break;
                case 500:
                    alert('Ошибка сервера');
                    break;
            }
        },
    });

    const handleChangeAdditional = (attribute, value) => {
        const obj = formik.values.additionalData;
        const item = obj.find(item => item.attribute === attribute);
        if (item) {
            item.value = value;
        } else {
            obj.push({attribute, value});
        }
        formik.setFieldValue('additionalData', obj);
    }

    const handleGetAdditional = (attribute) => {
        const obj = formik.values.additionalData.find(item => item.attribute === attribute);
        return obj ? obj.value : null;
    }

    useEffect(() => {
        if (itemSelected) {
            formik.setFieldValue('entityId', itemSelected.id);
        }
        if (typeItem) {
            formik.setFieldValue('entityType', typeItem);
        }
    }, [itemSelected, typeItem]);
    const findItem = entityList.find((item: any) => item.id == Number(formik.values.entityId));

    const fieldError = (field: string) => {
        return formik.errors[field] && formik.touched[field] ? formik.errors[field] : null
    }
    if (!itemSelected) {
        return null;
    }

    return <Dialog
        open={open}
        onClose={onClose}
        classes={{paper: styles.rootModal}}
    >
        <img onClick={onClose} className={styles.iconClose} src='/icons/close.svg'/>
        <div className={styles.modalWrapper}>
            <div className={styles.infoContainer}>
                <img className={styles.pictureItem} src={`/images/products/${itemSelected.slug}.png`}/>
                <ItemDetail item={findItem} handleChangeAdditional={handleChangeAdditional} handleGetAdditional={handleGetAdditional}/>
            </div>
            <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
                <div className={styles.fieldsWrapper}>
                    <div>
                        <div className='labelField required'>Интересуемый товар</div>
                        <SelectField
                            handleChange={formik.setFieldValue}
                            options={entityList.map(item => ({value: item.id, label: item.name}))} name='entityId'
                            value={formik.values.entityId}/>
                    </div>
                    <div>
                        <div className='labelField required'>Ваше имя</div>
                        <NameField
                            error={fieldError('fullName')}
                            name='fullName' handleChange={formik.setFieldValue}/>
                    </div>
                    <div>
                        <div className='labelField required'>Номер телефона</div>
                        <PhoneInputMask name='phone' handleChange={formik.setFieldValue} value={formik.values.phone}/>
                    </div>
                    <div>
                        <div className='labelField'>Комментарий</div>
                        <TextAreaField withoutResize={true} name='comment' handleChange={formik.setFieldValue}
                                       value={formik.values.comment}/>
                    </div>
                    <button disabled={loading} className='btn-primary'>Отправить заявку</button>
                </div>
            </form>
        </div>
    </Dialog>
}

interface ItemDetail {
    handleChangeAdditional: (key, value) => void;
    handleGetAdditional: (key) => any;
    item: Product | Category;
}

const typesCoating = [
    {value: 'galvanized', label: 'Оцинкованное покрытие'},
    {value: 'polymer', label: 'Полимерное покрытие'}
];
const typeColors = [
    {value: 3003, html: '#8D1D2C'},
    {value: 3005, html: '#5E2028'},
    {value: 5002, html: '#2B2C7C'},
    {value: 5005, html: '#154889'},
    {value: 5021, html: '#07737A'},
    {value: 6005, html: '#0F4336'},
    {value: 6029, html: '#007243'},
    {value: 7004, html: '#9EA0A1'},
    {value: 8017, html: '#44322D'},
    {value: 9003, html: '#F4F4F4', isBlack: true},
    {value: 1014, html: '#DFCEA1', isBlack: true},
    {value: 1015, html: '#EADEBD', isBlack: true},
    {value: 7024, html: '#45494e'},
];
const typeThickness = [
    {value: '0.35-0.4', label: '0.35-0.4 мм'},
    {value: '0.4-0.45', label: '0.4-0.45 мм'},
    {value: '0.45', label: '0.45 мм'},
    {value: '0.5', label: '0.5 мм'},
];
const widthMainByType = {
    'prof_list_c8': 1.200,
    'prof_list_c10': 1.155,
    'prof_list_c20': 1.140,
    'prof_list_c21': 1.051,
    'prof_list_c44': 1.047,
}
const widthWorkByType = {
    'prof_list_c8': 1.150,
    'prof_list_c10': 1.100,
    'prof_list_c20': 1.100,
    'prof_list_c21': 1,
    'prof_list_c44': 1,
}
const ItemDetail: React.FC<ItemDetail> = ({handleChangeAdditional, item, handleGetAdditional}) => {
    const typeCoating = handleGetAdditional('typeCoating');
    const ral = handleGetAdditional('ral');
    if (!item) {
        return null;
    }

    useEffect(() => {
        if (typeCoating === 'polymer') {
            handleChangeAdditional('ral', typeColors[0].value);
        } else {
            handleChangeAdditional('ral', null);
        }
    }, [typeCoating]);

    useEffect(() => {
        handleChangeAdditional('length', 1);
        handleChangeAdditional('thickness', typeThickness[0].value);
    }, []);
    return (
        <div className={styles.detailWrapper}>
            <div className={styles.rowGroup}>
                <div className={styles.formBlock}>
                    <div className='labelField required'>Покрытие</div>
                    <SelectField
                        handleChange={(name, val) => handleChangeAdditional(name, val)}
                        options={typesCoating} name='typeCoating'
                        value={handleGetAdditional('typeCoating')}/>
                </div>
                <div className={styles.formBlock}>
                    <div className='labelField required'>Толщина</div>
                    <SelectField
                        handleChange={(name, val) => handleChangeAdditional(name, val)}
                        options={typeThickness} name='thickness'
                        value={handleGetAdditional('thickness')}/>
                </div>
            </div>
            {
                typeCoating === 'polymer' && (
                    <div>
                        <div className='labelField'>Цвет RAL({ral})</div>
                        <div className={cn(styles.rowGroup, styles.minGap, styles.wrap)}>
                            {typeColors.map(ralBlock => <div onClick={() => handleChangeAdditional('ral', ralBlock.value)}
                                                             className={cn(styles.ralBlock, {
                                                                 [styles.active]: ralBlock.value === ral,
                                                                 [styles.colorBlack]: ralBlock.isBlack
                                                             })}
                                                             style={{background: ralBlock.html}}>{ralBlock.value}{ralBlock.value === ral ? '(выбран)' : ''}</div>)}
                        </div>
                    </div>
                )
            }
            <div className={styles.rowGroup}>
                <div className={styles.formBlock}>
                    <div className='labelField required'>Длина</div>
                    <input min={1} className='field' type='number' value={handleGetAdditional('length')}
                           onChange={e => handleChangeAdditional('length', e.target.value)}/>
                </div>
                <div className={styles.formBlock}>
                    <div className='labelField required'>Ширина(общая), м</div>
                    <input className='field' type='number' readOnly value={widthMainByType[item.slug]}/>
                </div>
                <div className={styles.formBlock}>
                    <div className='labelField required'>Ширина(рабочая), м</div>
                    <input className='field' type='number' readOnly value={widthWorkByType[item.slug]}/>
                </div>
            </div>
        </div>
    )
}
export default ModalForm;
