import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import Classes from './CheckoutSummary.module.css'

const checkOutSummary = (props) => {
    return (
        <div className={Classes.CheckoutSummary}>
            <h1>We Hope it Tastes Good</h1>
            <div>
                <div style={{ width: '100%', margin: 'auto' }}>
                    <Burger ingredients={props.ingredients} />
                </div>
            </div>
            <Button btnType="Danger" clicked ={props.checkoutCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked = {props.checkoutContinue}>CONTINUE</Button>
        </div>
    );

}

export default checkOutSummary;