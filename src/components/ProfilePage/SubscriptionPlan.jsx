import React from 'react';

function SubscriptionPlan() {
  return (
    <article className="px-10 pt-4 pb-7 mt-3.5 w-full rounded-3xl bg-zinc-100 max-md:px-5 max-md:mt-9 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-xl leading-6 text-red-800 max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/065f133d4d1f7ae388b76e71e0038b487e3a17f2d868d058dc41e10713e0b6f1?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63"
              alt=""
              className="self-center aspect-square fill-red-800 w-[50px]"
            />
            <div className="mt-3.5">
              <span className="font-semibold">VIP PACKAGES</span>
              <br />
              <span className="font-bold text-red-800"> 1875.00 SAR </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-16 text-xl text-black max-md:mt-10">
            <div className="font-semibold">Subscription Plan</div>
            <div className="font-light">3 months left</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default SubscriptionPlan;