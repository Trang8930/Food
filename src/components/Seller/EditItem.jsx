import React, { Component } from 'react';
import BarSeller from './BarSeller';
import Footer from '../Footer';

class EditItem extends Component {
    render() {
        return (
            <>
                <BarSeller />
                <div className="bg-food">
                    <div className="cont-form">
                        <form action="" className="form-edit"> 
                            <label className="ttl-form">Edit  Your Product</label>
                            <table className="edit">
                                <tr>
                                    <td>
                                        <label htmlFor="pic">Picture</label>
                                    </td>
                                    <td>
                                        <input type="text" id="pic"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="ttl">Title</label>
                                    </td>
                                    <td>
                                        <input type="text" id="ttl"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="des">Description</label>
                                    </td>
                                    <td>
                                        <textarea name="" id="des"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="price">Price</label>
                                    </td>
                                    <td>
                                        <input type="text" id="price"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <button type="submit" className="update">Update</button>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default EditItem;