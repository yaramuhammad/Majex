import React from 'react';

function UserInfo() {
  return (
    <header className="flex gap-3 self-start ml-6 text-3xl leading-7 text-black max-md:ml-2.5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/52f9da2b32c5afab3d569f63fd6d1eeb11941556a989b2cde7acd0b5468c75cf?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63"
        alt=""
        className="shrink-0 aspect-[1.04] fill-black w-[55px]"
      />
      <h1 className="self-end mt-6">ali ali</h1>
    </header>
  );
}

export default UserInfo;