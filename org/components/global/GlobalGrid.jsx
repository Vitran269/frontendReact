import React from 'react';
import Pagination from './Pagination.jsx';
import './globalGrid.css'
export default class GlobalGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageOfItems: [],
            modalAdvert: {}
        };

        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }

    componentWillReceiveProps(nextprops) {
        var test = nextprops.adverts.slice(0,9);       
        this.setState({ pageOfItems: test })
    }

    componentDidUpdate() {
        let nextModal = this.props.editAdvert

        if (nextModal != this.state.modalAdvert) {
            this.setState({ modalAdvert: nextModal })
        }

    }


    onView(_id) {
        this.props.getAdvert(_id)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.pageOfItems.map((ad, index) => {
                            return (
                                <div className="col-sm-4" key={index} >
                                    <div className="card border-lightgrey mb-3 text-center estate-card">
                                        <img className="card-img-top" style={{ maxHeight: "348px", maxWidth: "348px", height: "348px", width: "348px" }} src={ad.imageUrl} alt="" />
                                        <div className="card-body grid-body">
                                            <div>
                                                <h3 className="card-title">{ad.title}</h3>
                                                <hr />

                                                <p className="card-text" align="left" >

                                                    <div className="row">
                                                        <div className="col">
                                                    <b>Price:  $ {ad.price}</b><br />
                                                    <b>Area:</b> {ad.area} m<sup>2</sup><br />
                                                    <b>Bedrooms: </b>{ad.bedrooms}<br />
                                                    </div>
                                                    <div className="col">
                                                    <b>Floors: </b>{ad.floors}<br />
                                                    <b>Direction: </b>{ad.direction}<br />
                                                    </div>
                                                    </div>
                                                </p>
                                                <br />
                                                <button className="btn btn-general" onClick={this.onView.bind(this, ad._id)} data-toggle="modal" data-target="#exampleModalCenter" >Details</button>

                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            Last updated {ad.date}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        <br />

                        <div className="modal fade detail" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered grid-modal-wrapper" role="document">
                                <div className="modal-content content-grid">
                                    <div className="modal-header">
                                        
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div class="container">
                                            <div class="card">
                                                <div class="container-fliud">
                                                    <div class="wrapper row">
                                                        <div class="preview col-md-6">

                                                            <div class="preview-pic tab-content">
                                                                <div class="tab-pane active" id="pic-1"><img id="grid-image" src={this.state.modalAdvert.imageUrl} alt=""  width="550" height="500"/></div>
                                                               
                                                            </div>
                                                           

                                                        </div>
                                                        <div className="details col-md-6">
                                                            <h3 className="product-title">{this.state.modalAdvert.title}</h3>
                                                            <div className="rating">
                                                                <div className="stars">
                                                                    <span className="fa fa-star checked"></span>
                                                                    <span className="fa fa-star checked"></span>
                                                                    <span className="fa fa-star checked"></span>
                                                                    <span className="fa fa-star"></span>
                                                                    <span className="fa fa-star"></span>
                                                                </div>
                                                                <span className="review-no">41 reviews</span>
                                                            </div>
                                                            <div className="product-description">
                                                            
                                                          <div className="row-feature">
                                                              
                                                              <div className ="col-4">
                                                              <b>Area:</b> {this.state.modalAdvert.area} m<sup>2</sup><br />
                                                            <b>Bedrooms: </b>{this.state.modalAdvert.bedrooms}<br />
                                                            <b>Floors: </b>{this.state.modalAdvert.floors}<br />
                                                            <b>Direction: </b>{this.state.modalAdvert.direction}<br />
                                                              </div>
                                                             <div className="col-8">
                                                             <b>Contact Information: </b>{this.state.modalAdvert.contactInfo}<br />
                                                            <b>Address: </b>{this.state.modalAdvert.address}<br />
                                                            <b>Date Posted: </b>{this.state.modalAdvert.postDate}<br />
                                                            <b>Date Expired: </b>{this.state.modalAdvert.expiredDate}<br />
                                                                 </div> 
                                                              
                                                          </div>
                                                            {/* <b>Area:</b> {this.state.modalAdvert.area} m<sup>2</sup><br />
                                                            <b>Bedrooms: </b>{this.state.modalAdvert.bedrooms}<br />
                                                            <b>Floors: </b>{this.state.modalAdvert.floors}<br />
                                                            <b>Direction: </b>{this.state.modalAdvert.direction}<br />
                                                            <b>Contact Information: </b>{this.state.modalAdvert.contactInfo}<br />
                                                            <b>Address: </b>{this.state.modalAdvert.address}<br />
                                                            <b>Date Posted: </b>{this.state.modalAdvert.postDate}<br />
                                                            <b>Date Expired: </b>{this.state.modalAdvert.expiredDate}<br />
                                                            <b>Project: </b>{this.state.modalAdvert.project}<br /> */}
                                                            </div>
                                                            <h4 className="price">current price: <span>$ {this.state.modalAdvert.price} / per month</span></h4>
                                                           
                                                            
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div classNameName="modal-footer">

                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <Pagination pageSize={9} initialPage={1} items={this.props.adverts} onChangePage={this.onChangePage} />
                </div>
            </div>
        );
    }
}
