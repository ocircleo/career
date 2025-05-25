import React from "react";
import { RiVisaLine } from "react-icons/ri";
import Link from "next/link";
const Page = () => {
  return (
    <div className="w-full lg:w-[90%] mx-auto px-3 mb-12">
      <div className="flex items-center justify-center ">
        <ul className="timeline scale-50 xxs:scale-75 md:scale-100">
          <li>
            <div className="timeline-middle bg-neutral rounded-full h-7 w-7 flex items-center justify-center text-base-100">1</div>
            <div className="timeline-end px-12 text-sm">Cart</div>
            <hr className=" bg-neutral h-0.5"/>
          </li>
          <li>
            <hr  className="bg-neutral h-0.5"/>
            <div className="timeline-middle bg-base-100 rounded-full h-7 w-7 flex items-center justify-center text-neutral border">2</div>
            <div className="timeline-end px-12 text-sm">Checkout</div>
     
          </li>
        </ul>
      </div>
      <p className="pb-6 pt-3 font-semibold">Payment Method</p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* ------ method -------- */}
        <div className="">
          <div className="collapse  bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold pb-8">
              Credit or Debit card
            </div>
            <div className="collapse-content text-sm">{<CreditCard />}</div>
          </div>
          <div className="collapse  bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">Bkash</div>
            <div className="collapse-content text-sm">{<Bkash />}</div>
          </div>
          <div className="collapse  bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">Nagad</div>
            <div className="collapse-content text-sm">{<Nagad />}</div>
          </div>
          <div className="collapse  bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">Rocket</div>
            <div className="collapse-content text-sm">{<Rocket />}</div>
          </div>
        </div>

        {/* ------- Continue --------- */}
        <div>
          <div className="p-6 bg-subtle-blue rounded">
            <p className="text-lg font-semibold py-2">Order Summary</p>
            <hr className="text-light-gray pb-4"></hr>
            <div className="flex justify-between p-1">
              <p className="text-sm font-semibold">Items (3)</p>
              <p className="text-sm font-semibold">10000 BDT</p>
            </div>
            <div className="flex justify-between p-1">
              <p className="text-sm font-semibold">Shipping and handling</p>
              <p className="text-sm font-semibold">00 BDT</p>
            </div>
            <div className="flex justify-between p-1">
              <p className="text-sm font-semibold">Tax</p>
              <p className="text-sm font-semibold">100 BDT</p>
            </div>
            <div className="flex justify-between p-1 mb-8">
              <p className="text-sm font-semibold">After Tax</p>
              <p className="text-sm font-semibold">10100 BDT</p>
            </div>
            <hr className="text-light-gray"></hr>
            <div className="flex justify-between px-1 py-3 mb-2">
              <p className=" font-semibold">Order Total</p>
              <p className="text-sm font-semibold">10100 BDT</p>
            </div>

            <p className="pb-3 px-3 text-sm">
              By placing your order, you agree to our company ,
              <Link href={"/"}>Privacy policy</Link> and{" "}
              <Link href={"/"}>Conditions</Link> of use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

function CreditCard() {
  return (
    <form>
      <fieldset className="join relative w-full">
        <input
          name="password"
          type="text"
          minLength={6}
          required
          className="input rounded join-item border-0 bg-base-300 placeholder:text-light-gray focus:outline-0 w-full"
          placeholder="Password"
        />
        <button
          type="button"
          className="btn pointer-events-none bg-indigo-700 scale-75 rounded  absolute right-0 top-0 z-10 hover:border-0 "
        >
          <RiVisaLine className="text-4xl text-white" />
        </button>
      </fieldset>
      <fieldset className="grid grid-cols-3 gap-4 my-4 w-full">
        <input
          name="password"
          type="text"
          minLength={6}
          required
          className="input join-item border-0 bg-base-300 placeholder:text-light-gray focus:outline-0 w-full"
          placeholder="Password"
        />
        <input
          name="password"
          type="text"
          minLength={6}
          required
          className="input join-item border-0 bg-base-300 placeholder:text-light-gray focus:outline-0 w-full"
          placeholder="Password"
        />
        <input
          name="password"
          type="text"
          minLength={6}
          required
          className="input join-item border-0 bg-base-300 placeholder:text-light-gray focus:outline-0 w-full"
          placeholder="Password"
        />
      </fieldset>
      <div className="flex gap-2 items-center mb-10 lg:mb-16">
        <input
          type="checkbox"
          id="remember"
          name="remember"
          className="h-4 w-4 cursor-pointer"
        />
        <label
          htmlFor="remember"
          className={`text-custom-blue select-none cursor-pointer `}
        >
          Save Card Info
        </label>
      </div>
      <div className="flex gap-4">
        <button className="border px-6 py-2 font-bold rounded ">Cancel</button>
        <button className="bg-custom-blue py-2 font-bold text-white rounded shrink-0 grow">
          Continue Checkout
        </button>
      </div>
    </form>
  );
}
function Bkash() {
  return <div></div>;
}
function Nagad() {
  return <div></div>;
}
function Rocket() {
  return <div></div>;
}
