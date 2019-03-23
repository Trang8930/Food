import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Ourproduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHtml: null,
    }
    console.log("asdasdadadas")
  }
  componentWillMount() {
    
    fetch('https://food-ordering-be.herokuapp.com/api/foods')
      .then(response => response.json())
      .then(data => {
        this.setState({
          dataHtml: data.map((item03) => 
                      <div className="col-md-3 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4"><img src={item03.picture}/></a>
                        <div className="text">
                          <h3><a href="#">{item03.title}</a></h3>
                          <p>{item03.description}</p>
                          <p className="price"><span>{item03.price}</span></p>
                          <p><NavLink to="/ProductSingle" className="btn btn-primary btn-outline-primary">Add to cart</NavLink></p>
                        </div>
                      </div>
                      </div>
                    )
        })
      },
      );
      
  }
    render() {
        return (
            <section className="ftco-menu mb-5 pb-5">
              <div className="container">
                <div className="row justify-content-center mb-5">
                  <div className="col-md-7 heading-section text-center ftco-animate">
                    <span className="subheading">Discover</span>
                    <h2 className="mb-4">All Foods</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="row d-md-flex">
                  <div className="col-lg-12 ftco-animate p-md-5">
                    <div className="row">
                    <div>
                      <div className="col-md-12 nav-link-wrap mb-5">
                        <div className="nav ftco-animate nav-pills justify-content-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                          <a className="nav-link active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">All</a>
                          <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Drinks</a>
                          <a className="nav-link" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Foods</a>
                        </div>
                      </div>
                      <div className="col-md-12 d-flex align-items-center">
                        <div className="tab-content ftco-animate" id="v-pills-tabContent">
                          <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
                            <div className="row">
                              {this.state.dataHtml}
                            </div>
                          </div>
                          <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">
                            <div className="row">
                              {this.state.dataHtml}
                            </div>
                          </div>
                          <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
                            <div className="row">
                              {this.state.dataHtml}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}

export default Ourproduct;