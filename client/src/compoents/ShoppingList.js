import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";
import ItemModal from './ItemModal';

class ShoppingList extends Component {
     constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
        this.deleteListItem = this.deleteListItem.bind(this);
    }
    componentDidMount() {
        this.props.getItems();
    }
    deleteListItem(id) {
     this.props.deleteItem(id);
    }
    render() {
        const { items } = this.props.item;
        return (
            <Container>
               <ItemModal/>
                <ListGroup>
                        {
                            items.map((val, key) => {
                                return(
                                    <ListGroupItem key={key} style={{margin: "10px 0",border: "1px solid #cbcbcb"}}>
                                        <Button className="remove-btn btn-danger" onClick={() => this.deleteListItem(val.id)}>
                                            &times;
                                        </Button>
                                        <h4 style={{display:"initial"}}>{val.name}</h4>
                                    </ListGroupItem>
                                )
                            })
                        }
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    item: state.item
})
export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);