import { Component } from "react";

class Topbar extends Component {
    state = {}
    render() {
        return (<>
            <header>
                <div id="logo"> <a><span>PHAR</span>MACY</a></div>
                <div id="search"><input type="search"></input> </div>
                <div id="icons">
                    <i class="fa fa-search"></i>
                    <div id="card">
                        <a href="cart.html"> <i class="fa fa-shopping-cart"> <span id="cart-count"></span> </i> </a>
                    </div>
                    <i class="fa fa-user-circle-o"></i>
                </div>
            </header>

        </>);
    }
}

export default Topbar;