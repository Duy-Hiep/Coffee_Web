import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../assets/css/LayoutStyles.css";
import { useGetCategoryQuery } from "../../services/category";
const LayOutClient = () => {
  const { data: CateData } = useGetCategoryQuery();
  const newCate = CateData?.category;


  return (
    <div className="">
      <div className="">
        <div className="header-top">
          <div className="header-top-elem">
            <div className="header-top-elem-item">
              <p>Welcome to our online store!</p>
            </div>
          </div>
        </div>
        <div className="header-nav">
          <div className="header-nav-top-elem">
            <div className="header-nav-top-elem-search">
              <form action="">
                <input type="text" placeholder="search..." />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </form>
            </div>
            <div className="header-nav-top-elem-logo">
              <Link to="#">
                <img src="https://demo74leotheme.b-cdn.net/prestashop/vt_drink_demo/img/logo-1644850205.jpg" alt="" />
              </Link>
            </div>
            <div className="header-nav-top-elem-cart">
              <Link to="cart" className="header-nav-top-elem-cart-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </Link>
              <div className="header-nav-top-elem-cart-content">
                <p>Shopping Cart</p>
                <p>item </p>
              </div>
            </div>
          </div>
          <div className="header-nav-bottom-elem">
            <div className="header-nav-bottom-elem-left">
              <ul className="header-nav-bottom-elem-left-big">
                <li>
                  <Link to="">HOME</Link>
                </li>
                <li className="header-nav-bottom-elem-left-big-cate">
                  <Link to="#">CATEGORY</Link>
                  <ul className="header-nav-bottom-elem-left-small">
                    {newCate?.map((item: any) => {
                      return (
                        <li key={item._id}>
                          <Link to={`categories/${item._id}`}>{item.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li>
                  <Link to="#">ESPRESSO</Link>
                </li>
                <li>
                  <Link to="#">CAMPUCHINO</Link>
                </li>
                <li>
                  <Link to="#">BLOG</Link>
                </li>
              </ul>
            </div>
            <div className="header-nav-bottom-elem-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <div className="header-nav-bottom-elem-right-auth">
                <Link to="signin">SIGN IN /</Link>
                <Link to="signup">SIGN UP</Link>
              </div>
              <div className="header-nav-bottom-elem-right-user">
                <li className="header-nav-bottom-elem-right-user-menu">
                  ACOUNT
                  <ul className="header-nav-bottom-elem-right-user-main-menu">
                    <li>
                      <Link to="">MY ACOUNT</Link>
                    </li>
                    <li>
                      <Link to="cart">MY ORDER</Link>
                    </li>
                    <li>
                      <Link to="admin">ADMIN PAGE</Link>
                    </li>
                    <li>
                      <Link to="">LOG OUT</Link>
                    </li>
                  </ul>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Outlet />
      </div>
      <footer>
        <div className="footer-top">
          <div className="footer-top-item">
            <h5>CONTACT INFO</h5>
            <ul>
              <li>Address: 71 Pennington Lane Vernon Rockville, CT 06066.</li>
              <li>Phone: +84 888 654 355</li>
              <li>E-mail: Theme@Demo.Com</li>
            </ul>
          </div>
          <div className="footer-top-item">
            <h5>INFORMATION</h5>
            <ul>
              <li>
                <Link to="#">Delivery</Link>
              </li>
              <li>
                <Link to="#">Legal Notice</Link>
              </li>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Best Sales</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-top-item">
            <h5>MY ACCOUNT</h5>
            <ul>
              <li>
                <Link to="#">Personal Info</Link>
              </li>
              <li>
                <Link to="#">Orders</Link>
              </li>
              <li>
                <Link to="#">Credit Slips</Link>
              </li>
              <li>
                <Link to="#">Addresses</Link>
              </li>
              <li>
                <Link to="#">My Wishlists</Link>
              </li>
            </ul>
          </div>
          <div className="footer-top-item">
            <h5>CONTACT INFO</h5>
            <p>
              Subscribe to our newsletters now and stay up to date with new
              collections and exclusive offers.
            </p>
            <input type="text" placeholder="Enter e-mail here..." />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-bottom">
          <Link to="#">© 2023 - Ecommerce software by PrestaShop™</Link>
          <img src="https://picsum.photos/50/50" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default LayOutClient;
