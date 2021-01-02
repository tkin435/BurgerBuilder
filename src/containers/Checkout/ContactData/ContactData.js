import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component{
    state = {
        name: '',
        email: '',
        adress: {
            street:'',
            postalCode:''
        }
    }

    render(){
        return(
            <div>
                <h4>Enter your contact data</h4>
                <form>
                    <input type="text" name="name" placeholder = "your name"/>
                    <input type="text" name="email" placeholder = "Your email"/>
                    <input type="text" name="street" placeholder = "Street"/>
                    <input type="text" name="postal" placeholder = "Your post code"/>
                    <Button btnType = "Success">Order Here</Button>



                </form>
            </div>
        )
    }
}

export default ContactData