import React from 'react';
import {Link} from 'react-router-dom';
import AddShoppingCart from '@material-ui/icons/AddShoppingCartSharp';
import EmojiObjects from '@material-ui/icons/EmojiObjectsSharp';
/*import {Construction} from '@material-ui/icons/Construc'; It is not yet inclded with existing material-ui package*/
import { BusinessSharp } from '@material-ui/icons';
import Build from '@material-ui/icons/BuildSharp';
import Icon from '@material-ui/core/Icon';


function Construction(props){
    return <Icon>construction</Icon>;
}

function Header(){
    return(
            <div class="header">
                    

                    <div class="logo_container">MY<span>APP</span></div>

                    <div class="navigation">
                        <div class="products" ><AddShoppingCart/><Link to="/products">Produkte</Link></div>
                        <div class="solutions"><EmojiObjects/><Link to="/solutions">Lösungen</Link></div>
                        <div class="tools"><Build/><Link to="/tools">Tools</Link></div>
                        <div class="company"><BusinessSharp/><Link to="/company">Unternehmen</Link></div>
                    </div>

            </div>     
        )
}
export default Header;