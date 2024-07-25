import React from 'react';

function ProfileImage() {
  return (
    <aside className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f51633fa5dd97e76dedede3bdd744c9a75fa31c13a4ba6207a538f03ebc75b8c?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63"
        alt="User profile"
        className="grow shrink-0 max-w-full aspect-[0.26] w-[262px] max-md:mt-10"
      />
    </aside>
  );
}

export default ProfileImage;