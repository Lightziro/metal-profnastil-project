import React from "react";
import {Paper} from "@material-ui/core";

export default function ButtonSubmitOrder(props) {
    return (
        <div className='block-button-submit'>
            <button onClick={props.eventSubmit} className='button-submit-order'>Отправить заказ</button>
        </div>
    );
}
