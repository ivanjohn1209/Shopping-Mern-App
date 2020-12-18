import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class AppNavbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }
    toggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <NavbarBrand href="/">ShoppingList</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
        );
    }
}

// <div> 1). 3DLznRAU8qaUJo3wczFuBPFsqaMe7hYSuC</div>
// <div> 2). 3LmuP4YyXz5SPvapAb7jWhd9LZqpZ3DqTx</div>
// <div> 3). 3HiL9YpdQh5sqHJCdgn9X5XHTtZscpAXQ2</div>
// <div> 4). 3P3C4CyYjmTc5Gdc26jKCpQPSPpJjzZyV3</div>
// <div>5). 3NtP1yvqwvvHoKBzyEarVbz8fiBJHSBrAE</div>
export default AppNavbar;