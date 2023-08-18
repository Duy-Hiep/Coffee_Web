import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/HomePage.css";
import { useGetCategoryQuery } from "../../services/category";
import { useGetProductQuery } from "../../services/product";
import { useGetSliderQuery } from "../../services/slider";

const HomePage = () => {
  const { data: CateData } = useGetCategoryQuery();
  const { data: ProductData, isLoading, error } = useGetProductQuery();
  const { data: SliderData } = useGetSliderQuery();

  const newCategory = CateData?.category;
  const newProduct = ProductData?.product?.docs;
  const newSlider = SliderData?.slider;
  console.log("categoryHomePage: ", newCategory);
  console.log("productHomePage: ", newProduct);
  console.log("sliderHomePage: ", newSlider);

  return (
    <div className="">
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark"
        data-mdb-ride="carousel"
      >
        <div className="carousel-inner">
          {newSlider?.map((item: any) => {
            return (
              <div className="carousel-item active" key={item._id}>
            <img
              src={item.image}
            />
            <div className="carousel-caption d-none d-md-block ml-6">
              <h5>
                {item.ratio}
              </h5>
              <h1>
                {item.name}
              </h1>
              <p>
                {item.description}
              </p>
              <Link to="#">SHOP NOW</Link>
            </div>
          </div>
            )
          })}
          
        </div>

        {/* 
    <button className="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button> */}
      </div>
      <div className="category">
        <h1>TOP CATEGORIES</h1>
        <div className="category-elem">
          {newCategory?.map((item: any) => {
            return (
              <div className="category-elem-item" key={item._id}>
                <img src="https://demo.gloriathemes.com/bouffe/demo/wp-content/uploads/2020/12/home-coffee-shop-v1-featured-2.jpg" alt="" className="rounded-xl"/>
                <Link
                  to={`categories/${item._id}`}
                  className="category-elem-item-title"
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="product">
        <h1 className="font-bold text-3xl leading-snug">Behind every successful person is a substantial amount of coffee. Life begins after coffee.</h1>
        <div className="product-elem">
          {newProduct?.map((item: any) => {
            return (
              <div className="product-elem-item" key={item._id}>
            <div className="product-elem-item-img">
              <Link to={`product/${item._id}`} >
                <img src={item.image} alt="" />
              </Link>
            </div>
            <div className="product-elem-item-content">
              <Link to={`product/${item._id}`}>
               {item.name}
             
              </Link>
              <p>
                <span>$</span>
                {item.price}
              </p>
              <button>ADD TO CART</button>
            </div>
          </div>
            )
          })}
          
        </div>
      </div>
      <div className="service">
        <div className="service-elem">
          <div className="service-elem-item border-r-0">
            <div className="service-elem-item-img">
              <img src="https://demo.gloriathemes.com/bouffe/demo/wp-content/uploads/2020/12/menu-49-150x150.jpg" alt="" className="w-[80px] rounded-full"/>
            </div>
            <h4>Return Policy</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="service-elem-item border-r-0">
            <div className="service-elem-item-img">
              <img src="https://demo.gloriathemes.com/bouffe/demo/wp-content/uploads/2020/12/menu-54-150x150.jpg" alt=""  className="w-[80px] rounded-full"/>
            </div>
            <h4>Return Policy</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="service-elem-item border-r-0">
            <div className="service-elem-item-img">
              <img src="https://demo.gloriathemes.com/bouffe/demo/wp-content/uploads/2020/12/menu-46-150x150.jpg" alt="" className="w-[80px] rounded-full" />
            </div>
            <h4>Return Policy</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="service-elem-item">
            <div className="service-elem-item-img">
              <img src="https://demo.gloriathemes.com/bouffe/demo/wp-content/uploads/2020/12/menu-50-150x150.jpg" alt="" className="w-[80px] rounded-full" />
            </div>
            <h4>Return Policy</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <div className="sale">
        <div className="sale-elem">
          <div className="sale-elem-item">
            <img
              src="https://demo.ishithemes.com/opencart/OPC001/OPC001L02/image/cache/catalog/banner/2-640x450.jpg"
              alt=""
            />
            <div className="sale-elem-content absolute right-0 top-1/2 transform -translate-y-1/2">
              <h4>
                WEEKEND OFFER ON
                {/* {{item?.timeSale}} */}
              </h4>
              <h3>
                The Coffe Brew update
                {/* {{item?.name}} */}
              </h3>
              <Link to="#">SHOP NOW</Link>
            </div>
          </div>
          <div className="sale-elem-item">
            <img
              src="https://demo.ishithemes.com/opencart/OPC001/OPC001L02/image/cache/catalog/banner/1-640x450.jpg"
              alt=""
            />
            <div className="sale-elem-content absolute right-0 top-1/2 transform -translate-y-1/2">
              <h4>
                WEEKEND OFFER ON
                {/* {{item?.timeSale}} */}
              </h4>
              <h3>
                The Coffe Brew update
                {/* {{item?.name}} */}
              </h3>
              <Link to="#">SHOP NOW</Link>
            </div>
          </div>
          <div className="sale-elem-item">
            <img
              src="https://demo.ishithemes.com/opencart/OPC001/OPC001L02/image/cache/catalog/banner/2-640x450.jpg"
              alt=""
            />
            <div className="sale-elem-content absolute right-0 top-1/2 transform -translate-y-1/2">
              <h4>
                WEEKEND OFFER ON
                {/* {{item?.timeSale}} */}
              </h4>
              <h3>
                The Coffe Brew update
                {/* {{item?.name}} */}
              </h3>
              <Link to="#">SHOP NOW</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="blog">
        <h1>LATEST BLOG</h1>
        <div className="blog-elem">
          <div className="blog-elem-item">
            <div className="blog-elem-item-image">
              <img src="https://demo.gloriathemes.com/bouffe/demo/wp-content/uploads/2020/12/blog-37-640x685.jpg" alt="" className="rounded-xl"/>
            </div>
            <div className="blog-elem-item-content">
              <Link to="" className="blog-elem-item-content-title">
                There are many variations of passages
                {/* {{item?.name}} */}
              </Link>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero, maxime velit dignissimos ab expedita reprehenderit quisquam repudiandae vel ipsam natus dolorum odit voluptates quos obcaecati impedit. Atque, harum in!
                {/* {{item?.description}} */}
              </p>
            </div>
          </div>
          <div className="blog-elem-item">
            <div className="blog-elem-item-image">
              <img src="https://demo.gloriathemes.com/bouffe/demo/wp-content/uploads/2020/12/blog-36-640x685.jpg" alt="" className="rounded-xl"/>
            </div>
            <div className="blog-elem-item-content">
              <Link to="" className="blog-elem-item-content-title">
                There are many variations of passages
                {/* {{item?.name}} */}
              </Link>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
                {/* {{item?.description}} */}
              </p>
            </div>
          </div>
          <div className="blog-elem-item">
            <div className="blog-elem-item-image">
              <img src="https://demo.gloriathemes.com/bouffe/demo/wp-content/uploads/2020/12/blog-35-640x685.jpg" alt="" className="rounded-xl"/>
            </div>
            <div className="blog-elem-item-content">
              <Link to="" className="blog-elem-item-content-title">
                There are many variations of passages
                {/* {{item?.name}} */}
              </Link>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
                {/* {{item?.description}} */}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button id="myBtn" title="Go to top">
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default HomePage;
