import React from 'react';
import FormField from './FormField';

const formFields = [
  { label: 'Name', placeholder: 'aaaa', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e86944bf97f6bcb301d724150ab76b51823b1b416731bb79a9d3c6148954985c?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63' },
  { label: 'Email', placeholder: 'aaaa', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c7acd61de079427b49c10248dfa7392557abaac6e1333bc0ad878e89126b2715?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63' },
  { label: 'Password', placeholder: 'aaaa', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/aa15db6bb3bb59b8e39e2725bf3d32992700521bc07d5a309eeb7c933c9029b8?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63' },
  { label: 'Mobile No.', placeholder: 'aaaa', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0a17b6b3ce9891956157ecb36e53932354fad265f1de96a40ac7232132cf1d12?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63' },
  { label: 'WhatsApp No.', placeholder: 'aaaa', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/11173b99251bcce6f67a12c7cf6215b81ddbf0d363247b4806b7a31007a26dd1?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63' },
  { label: 'Interests', placeholder: 'aaaa', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dcea7cbee5a14afb62a30612a2b957228a33bc3f3f4b2fd92e13d9fc8894e172?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63' },
];
function ProfileForm() {
    return (
      <form className="flex flex-col px-5 text-base text-red-800 max-w-[537px]">
        <header className="flex gap-3 self-start text-3xl leading-7 text-black max-md:ml-1">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/52f9da2b32c5afab3d569f63fd6d1eeb11941556a989b2cde7acd0b5468c75cf?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" alt="" className="shrink-0 aspect-[1.04] fill-black w-[55px]" />
          <h1 className="self-end mt-6">ali ali</h1>
        </header>
        <main className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
        {formFields.map((field, index) => (
          <FormField key={index} {...field} />
        ))}
      </main>
    </form>
  );
}

export default ProfileForm;