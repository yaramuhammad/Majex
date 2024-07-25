import React from 'react';
import ContactButton from './ContactButton';
import SocialIcon from './SocialIcon';
import FooterLink from './FooterLink';

function ContactPage() {
  const contactButtons = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/14816faa8cb5bf6ab79b4349c8e1ae0a62e6fd197ef18ac84a973fd3b570df4c?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63', text: 'Wechat', bgColor: 'bg-red-800' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1b151ed94fa0a0c82ceb1c7b4c5a12872ccbd8fc80c67d056b8badd1bf9ea89e?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63', text: 'Whatsapp', bgColor: 'bg-red-800' }
  ];

  const socialIcons = [
    'https://cdn.builder.io/api/v1/image/assets/TEMP/e0ff2182192318da8d101f82ff6acd56c2b0b5ed07130e73de8e57de118e21b0?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/94e2c2c28ae96ab90b40d23f91d404b0107389fb7004480364a17eeca64bab3e?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/c075a610961150d6af6661743f0f398c6a8b80749f83137d3c64bd0a62ce0275?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/d1924bc8052e8d7d0cc605a2ece8fdf1595e83a61721094ec6b995ac10059f15?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/5da925ada3939e8ff7bc5e80cda1f51fb894804cb53b6a5a64f230993f993c19?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63'
  ];

  const footerLinks = [
    { text: 'Home', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e9c0aceb95231027d3539dcb1ec011593c6ac679d848c4f106d3ab486c954c5e?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63' },
    { text: 'Requests', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e9c0aceb95231027d3539dcb1ec011593c6ac679d848c4f106d3ab486c954c5e?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63' },
    { text: 'Price / Order', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e9c0aceb95231027d3539dcb1ec011593c6ac679d848c4f106d3ab486c954c5e?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63' },
    { text: 'Contact', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e9c0aceb95231027d3539dcb1ec011593c6ac679d848c4f106d3ab486c954c5e?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63' }
  ];

  return (
    <main className="flex flex-col pt-2 bg-white">
      <section className="self-center w-full max-w-[1341px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto text-3xl text-white max-md:mt-10 max-md:max-w-full">
              <h1 className="self-center text-5xl font-black text-black max-md:text-4xl">
                Contact us
              </h1>
              {contactButtons.map((button, index) => (
                <ContactButton key={index} {...button} />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca2af9f64992bad5dc41c63f20c0bbf9e162b37b4799c3ff70d852ffb3ae0543?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" alt="Contact illustration" className="w-full aspect-square max-md:mt-10 max-md:max-w-full" />
          </div>
        </div>
      </section>
      <footer className="flex gap-5 justify-between px-20 pt-12 pb-7 mt-8 w-full bg-neutral-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-white">
            Your trusted partner in logistics
          </h2>
          <p className="mt-5 text-lg text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus se
            <span className="text-white">
              d nunc eget dictum Sed ornare cursus sed nunc eget dictumd nunc eget dictum Sed ornare cursus sed nunc eget dictum{" "}
            </span>
          </p>
          <button className="flex gap-2.5 p-2.5 mt-8 text-sm whitespace-nowrap bg-white border border-solid border-zinc-300 text-zinc-300">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc8937ebd7f28b41e223ed51e6e28239b9596c823d584489afd068671bf7418b?apiKey=c0c1015bdf244f35b229acc2f6e2fa63&&apiKey=c0c1015bdf244f35b229acc2f6e2fa63" alt="" className="shrink-0 aspect-square w-[18px]" />
            Button
          </button>
          <div className="flex gap-4 self-start mt-6 ml-3 max-md:ml-2.5">
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} src={icon} />
            ))}
          </div>
        </div>
        <nav className="flex flex-col self-start text-base font-bold text-white">
          <h3 className="self-center text-2xl">Majex</h3>
          {footerLinks.map((link, index) => (
            <FooterLink key={index} {...link} />
          ))}
        </nav>
      </footer>
    </main>
  );
}

export default ContactPage;