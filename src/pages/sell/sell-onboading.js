import { history } from "../../App";
import sellImg from "../../assets/images/sellImg.jpg";
import "../../bg-color.css";

export default function SellOnboarding() {
  return (
    <div className="relative h-screen w-full sssss">
      <div className="hidden sm:block w-1/2 h-full">
        <div
          className="h-full bg-no-repeat bg-center bg-cover bg-img"
          style={{ backgroundImage: `url(${sellImg})` }}
        ></div>
      </div>
      <div className="w-full sm:w-1/2 absolute right-0 top-0 bg-white h-full">
        <div className="p-4 sm:p-9 w-full h-full relative flex flex-col items-center justify-center text-left sm:text-center">
          <div className="py-8">
            <h2 className="text-3xl phn:text-4xl">Sell on Jumga</h2>
            <p className="text-gray-500 py-1"></p>
          </div>
          <p className="text-gray-600 py-2">
            Set up your personalized store with just few clicks. What are you
            waiting for ? Focus on growing your business while we help you
            manage sales and orders online, Few things to note:
          </p>
          <ol>
            <li className="text-gray-600 py-1 text-sm text-left">
              1. Selling on Jumga requires a one-time payment of $20
            </li>
            <li className="text-gray-600 py-1 text-sm text-left">
              2. You get assigned one of our able dispatch riders upon creation
              of your store.
            </li>
          </ol>
          <button
            className="px-4 bg-green-400 p-2 my-3 rounded-full text-white focus:outline-none hover:shadow-lg hover:bg--green-300 transition duration-500 ease-in-out"
            onClick={() => {
              history.push("/create-shop");
            }}
          >
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}
