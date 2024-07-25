import React from 'react';

const socialIcons = [
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/22178eb57e7988a872c6992bfb8388add7fad1f76a4bb6c5a723f4d55d8379e6?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63', alt: 'Social icon 1' },
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/49781d59a1db0f43af548c43d5b300b00a30efc4668e2cdb195d6fe0f7951f18?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63', alt: 'Social icon 2' },
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2bc663ee045815c2c4b9c2e1b8d4a0211181d6789f9149397c45e92bf82b87c1?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63', alt: 'Social icon 3' },
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/05eb667c1bfadc819207380d7b4b4226bd153424999901e075ad5d0ef146b6f3?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63', alt: 'Social icon 4' },
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/722264d05303fc7896b1b094a84393350c82e04eeb3855ef3a97604c8cb37966?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63', alt: 'Social icon 5' },
];

function SocialIcons() {
  return (
    <div className="flex gap-3 mt-20">
      {socialIcons.map((icon, index) => (
        <img key={index} loading="lazy" src={icon.src} alt={icon.alt} className="shrink-0 aspect-[1.1] w-[22px]" />
      ))}
    </div>
  );
}

export default SocialIcons;