import React, { Component } from "react";
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/BuildControls/OrderSummary/OrderSummary'

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon:0.5
}

class BurgerBuilder extends Component {
    state = {
    ingredients: {
        salad : 0,
        bacon: 0,
        cheese: 0,
        meat: 0
        },
        totalPrice: 4,
        purchaseable: false,    
        purchasing: false
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchaseable: sum > 0})
    }    
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice, ingredients: updatedIngredient});
        this.updatePurchaseState(updatedIngredient);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice:newPrice, ingredients: updatedIngredient}); 
        this.updatePurchaseState(updatedIngredient);
    
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false})
    }

    purchaseContinueHandler = () => {
        alert('you can continue')
    }

render(){
    const disabledInfo = {
        ...this.state.ingredients
    };
    for (let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0
    }
    return(
       <Aux>
           <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
               <OrderSummary
                ingredients = {this.state.ingredients} 
                purchaseCancelled = {this.purchaseCancelHandler}
                purchaseContinued = {this.purchaseContinueHandler}
                price = {this.state.totalPrice}
                /> 
           </Modal>
           <Burger ingredients = {this.state.ingredients}/>
           <BuildControls 
            ingredientAdded = {this.addIngredientHandler}
            ingiredientRemoved = {this.removeIngredientHandler}
            disabled = {disabledInfo}
            purchaseable = {this.state.purchaseable}
            price = {this.state.totalPrice} 
            ordered = {this.purchaseHandler}
            />
       </Aux>
    );
}


}

export default BurgerBuilder;