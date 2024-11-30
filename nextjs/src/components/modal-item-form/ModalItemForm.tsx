import React, {useEffect} from "react";
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

interface ModalItemForm {
    open: boolean,
    onClose: () => void,
    typeItem: string,
    itemSelected: Category|Product,
    entityList: Category[]|Product[]|any
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
    >
        <img onClick={onClose} className={styles.iconClose} src='/icons/close.svg'/>
        <div className={styles.modalWrapper}>
            <div className={styles.infoContainer}>
                <img className={styles.pictureItem} src={`/images/products/${itemSelected.slug}.png`}/>
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
export default ModalForm;
