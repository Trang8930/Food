import React, { Component } from 'react';

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
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
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
                    <h2 className="mb-4">Our Products</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="row d-md-flex">
                  <div className="col-lg-12 ftco-animate p-md-5">
                    <div className="row">
                      <div className="col-md-12 d-flex align-items-center">
                        <div className="tab-content ftco-animate" id="v-pills-tabContent">
                          <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
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
            </section>
        );
    }
}

export default Ourproduct;