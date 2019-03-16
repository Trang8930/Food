import React, { Component } from 'react';

var data = [{
  "date": "Sept 28, 2018",
  "user": "Admin",
  "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  "title": "Coffee Testing Day",
  "image": "images/image_1.jpg"
},
{
  "date": "Sept 29, 2018",
  "user": "Admin",
  "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  "title": "Coffee Testing Day",
  "image": "images/image_2.jpg"
},
{
  "date": "Sept 30, 2018",
  "user": "Admin",
  "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  "title": "Coffee Testing Day",
  "image": "images/image_3.jpg"
},
{
  "date": "Sept 31, 2018",
  "user": "Admin",
  "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  "title": "Coffee Testing Day",
  "image": "images/image_4.jpg"
},
{
  "date": "Sept 32, 2018",
  "user": "Admin",
  "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  "title": "Coffee Testing Day",
  "image": "images/image_5.jpg"
},
{
  "date": "Sept 33, 2018",
  "user": "Admin",
  "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  "title": "Coffee Testing Day",
  "image": "images/image_6.jpg"
}
]

var elements = data.map((item) =>
   <div className="col-md-4 d-flex ftco-animate">
       <div className="blog-entry align-self-stretch">
         <a href="blog-single.html" className="block-20"><img src={process.env.PUBLIC_URL+item["image"]}/>
         </a>
         <div className="text py-4 d-block">
           <div className="meta">
             <div><a href="#">{item["date"]}</a></div>
             <div><a href="#">{item["user"]}</a></div>
             <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
           </div>
           <h3 className="heading mt-2"><a href="#">{item["title"]}</a></h3>
           <p>{item["content"]}</p>
         </div>
       </div>
     </div>
 );
class Blog extends Component {
  render() {
    return (
      <section className="ftco-section list-blog">
        <div className="container">
          <div className="row d-flex">
            {elements}
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li><a href="#">&lt;</a></li>
                  <li className="active"><span>1</span></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">&gt;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;