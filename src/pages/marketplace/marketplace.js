import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../../App";
import { Loading, NavigationBar } from "../../components";
import { selectUser } from "../../redux/authentication/auth-slice";
import { selectCartTotal } from "../../redux/cart/cart-slice";
import { getShops } from "../../redux/product/product-actions";
import {
  selectMerchant,
  selectProduct,
  setCurrentMerchant,
} from "../../redux/product/product-slice";
import landingImg from "../../assets/images/landingImg.png";
import { clearCart } from "../../redux/cart/cart-actions";

function Marketplace() {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const user = useSelector(selectUser);
  const total = useSelector(selectCartTotal);
  const merchant = useSelector(selectMerchant);

  useEffect(() => {
    if (!product.shops) {
      dispatch(getShops());
    }
  }, []);

  return (
    <div>
      <NavigationBar user={user} totalInCart={total} />
      {product.error && (
        <p className="text-red-400 text-center">{product.message}</p>
      )}
      {product.isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="w-full overflow-hidden h-screen">
            <div className="h-screen p-3 w-full flex flex-col items-center justify-center md:flex-row p-2">
              <h1 className="w-full md:w-1/2 text-7xl px-10 text-left">
                The #1 place to buy and sell online, Seriously.
              </h1>
              <div className="w-full md:w-1/2">
                <img className="w-full" alt="landingImg" src={landingImg} />
              </div>
            </div>
          </div>
          <p className="text-black text-lg text-left mb-8 uppercase ml-8 sm:ml-24 font-bold">
            vendors
          </p>
          <div className="flex flex-row w-full flex-wrap mx-4 sm:mx-6 md:mx-20 mb-20">
            {product.shops &&
              product.shops.map((shop) => {
                return (
                  <div
                    key={shop.shopId}
                    className="m2 mr-6  phn:m-4 flex-grow rounded-lg w-full phn:w-1/3 lg:1/4 md:max-w-1/4 min-w-sm shadow-sm border"
                  >
                    <div
                      onClick={() => {
                        dispatch(setCurrentMerchant(shop));
                        if (merchant) {
                          if (merchant.shopId !== shop.shopId)
                            dispatch(clearCart());
                        }
                        history.push(`/vendors/${shop.shopId}`);
                      }}
                      className="cursor-pointer w-full"
                    >
                      <div className="w-full">
                        <img
                          className="w-full h-56 object-cover"
                          src={shop.featuredImage}
                          alt={shop.title}
                          loading="eager"
                        />
                      </div>
                      <div className="h-24 p-4 overflow-ellipsis">
                        <p className="font-bold uppercase text-sm">
                          {shop.title}
                        </p>
                        <p className="pb-4 truncate text-gray-600">
                          {shop.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Marketplace;
