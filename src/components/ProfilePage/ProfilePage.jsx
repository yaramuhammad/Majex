import React from 'react';
import ProfileImage from './ProfileImage';
import UserInfo from './UserInfo';
import InputField from './InputField';
import SubscriptionPlan from './SubscriptionPlan';

function ProfilePage() {
  return (
    <main className="pr-5 bg-white">
      <div className="flex gap-5 max-md:flex-col">
        <ProfileImage />
        <section className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <UserInfo />
            <div className="mt-14 text-base font-semibold text-red-800 max-md:mt-10 max-md:max-w-full">
         
            </div>
            <div className="mt-7 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-sm whitespace-nowrap text-neutral-600 text-opacity-70 max-md:mt-6 max-md:max-w-full">
                    <InputField label="Name" value="aaaa" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e86944bf97f6bcb301d724150ab76b51823b1b416731bb79a9d3c6148954985c?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" />
                    <div className="mt-4 text-base font-semibold text-red-800 max-md:max-w-full">
                 
                    </div>
                    <InputField label="Email" value="aaaa" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c7acd61de079427b49c10248dfa7392557abaac6e1333bc0ad878e89126b2715?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <SubscriptionPlan />
                </div>
              </div>
            </div>
            <InputField label="Password" value="aaaa" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/aa15db6bb3bb59b8e39e2725bf3d32992700521bc07d5a309eeb7c933c9029b8?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" />
            <InputField label="Mobile No." value="aaaa" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0a17b6b3ce9891956157ecb36e53932354fad265f1de96a40ac7232132cf1d12?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" />
            <InputField label="WhatsApp No." value="aaaa" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11173b99251bcce6f67a12c7cf6215b81ddbf0d363247b4806b7a31007a26dd1?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" />
            <InputField label="Interests" value="aaaa" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/dcea7cbee5a14afb62a30612a2b957228a33bc3f3f4b2fd92e13d9fc8894e172?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" />
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProfilePage;