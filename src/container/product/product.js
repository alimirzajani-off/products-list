import { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../actions";
import { LoadingOutlined } from "@ant-design/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

const Product = (props) => {
  let imageurl = "http://tpi.uneed.ir:7100/m/";

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      props.getProducts();
    }
    mounted.current = true;
  });

  const PRODUCTS = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
    height:
    background-color: #ebebeb;
    p,
    h4 {
      margin: 0;
    }
    .row{
        display: flex;
        justify-content: space-between;
    }
    justify-content: space-between;
    }
    .store-detail p {
      padding-right: 0.25rem;
    }
    .head,
    .product,
    .body,
    .footer {
      padding: 0.25rem;
    }
    .product {
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      border-radius: 8px;
      width: 20rem;
      background-color: white;
      margin:0.5rem;
    }
    .head {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0.25rem 0.85rem 0rem;
    }
    .body {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .store-image img,.product-image img{
      border-radius: 10px;
    }
    .product-image img {
      width:250px;
      height:200px
    }
    .product-detail {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: end;
    }
    .product-action {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
      font-size: large;
      padding: 0.25rem 0.5rem;
    }
    .store-detail {
      text-align: end;
    }
    .store-place {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .store-place p {
      font-weight: 500;
      color: #818080;
      font-size: 12px;
      padding: 0;
    }
    .store-name {
      display: flex;
      justify-content: flex-end;
    }
    .store-name h4 {
      display: flex;
      align-items: center;
    }
    .product-about {
      font-size: 15px;
    }
    .product-price {
      display: flex;
      justify-content: space-between;
      margin-top: 0.95rem;
    }
    .loader{
        font-size:4rem;
        position: absolute;
        top: 46%;
        left: 46%;
    }
    .price{
        color:#f17373;
    }
  `;

  const timeSince = (date) => {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  };
  var aDay = 24 * 60 * 60 * 1000;

  console.log(timeSince(new Date(Date.now() - aDay * 2)));

  const displayProduct = () => {
    if (!props.product) {
      return (
        <div className="loader">
          <LoadingOutlined />
        </div>
      );
    } else {
      return props.product.map((item) => {
        let realtime = item.post.postAt.split("T");
        realtime = realtime[1].split("Z");
        console.log(realtime[0]);
        console.log(timeSince(new Date(Date.now() - realtime)));
        console.log(item);
        return (
          <div className="product" key={item._id}>
            <div className="head">
              <div className="store-detail">
                <div className="store-name">
                  <h4>
                    {item.post.business.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      height="20"
                      viewBox="0 0 24 24"
                      width="18"
                      color="blue"
                    >
                      <path
                        d="m9.00012 12 1.99998 2 4-4m-7.16524-5.30295c.71753-.05726 1.39872-.33942 1.94658-.8063 1.27846-1.08952 3.15886-1.08952 4.43736 0 .5479.46688 1.229.74904 1.9466.8063 1.6744.13362 3.0041 1.46326 3.1377 3.13769.0572.71753.3394 1.39872.8063 1.94658 1.0895 1.27848 1.0895 3.15888 0 4.43738-.4669.5478-.7491 1.229-.8063 1.9466-.1336 1.6744-1.4633 3.004-3.1377 3.1377-.7175.0572-1.3987.3394-1.9466.8063-1.2785 1.0895-3.1589 1.0895-4.43736 0-.54786-.4669-1.22905-.7491-1.94658-.8063-1.67443-.1337-3.00407-1.4633-3.13769-3.1377-.05726-.7176-.33942-1.3988-.8063-1.9466-1.08952-1.2785-1.08952-3.1589 0-4.43738.46688-.54786.74904-1.22905.8063-1.94658.13362-1.67443 1.46326-3.00407 3.13769-3.13769z"
                        stroke="#4a5568"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </svg>
                  </h4>
                </div>
                <div className="store-place">
                  <p>{item.post.regionName}</p>
                  <ion-icon name="location-outline"></ion-icon>
                </div>
              </div>
              <div className="store-image">
                <img
                  src={imageurl + item.post.business.avatar.hash}
                  width="50"
                  height="50"
                />
              </div>
            </div>
            <div className="body">
              <div className="product-image">
                <LazyLoadImage
                  src={imageurl + item.post.media.map((item) => item.hash)}
                />
              </div>
              <div className="product-action">
                <div className="left-icon">
                  <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                  <ion-icon name="call-outline"></ion-icon>
                </div>
                <div className="right-icon">
                  <ion-icon name="share-social-outline"></ion-icon>
                  <ion-icon name="bookmark-outline"></ion-icon>
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="product-detail">
                <div className="product-title">
                  <h4>{item.post.title}</h4>
                </div>
                <div className="product-about">
                  <p>{item.post.text}</p>
                </div>
              </div>
              <div className="product-price">
                <div className="price d-flex">
                  <p>تومان</p>
                  {item.post.price}
                </div>
                <div className="minute">515</div>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  return (
    <PRODUCTS className="products container-fluid">
      <div className="row">{displayProduct()}</div>
    </PRODUCTS>
  );
};

const mapStateToProps = (state) => {
  return { product: state.product };
};

export default connect(mapStateToProps, { getProducts })(Product);
