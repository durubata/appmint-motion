import { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { appConfig } from 'config';
import { useChatStore } from 'chat-store';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Registration = () => {
  const { setFormItems, setStateItem, navigate } = useChatStore(state => ({ setStateItem: state.setStateItem, setFormItems: state.setFormItems, navigate: state.navigate }));

  const [name, setName] = useState('jac');
  const [email, setEmail] = useState('imole@gmail.com');
  const [phone, setPhone] = useState('243ddd');
  const [message, setMessage] = useState('243ddd');
  const [error, setError] = useState('');

  const startChat = async (e) => {
    e.preventDefault();
    setError(null)

    if (!name || !email || !phone) {
      setError('Name, Email and Phone are required')
      return;
    }

    if (isInvalidEmail(email)) {
      setError('Invalid email')
      return;
    }

    if (isInvalidPhone(phone)) {
      setError('Invalid phone number')
      return;
    }

    setFormItems({ email, name, phone });
    const authURL = `${appConfig.appengine.host}/profile/guest/auth`
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        orgid: appConfig.orgId,
      },
      body: JSON.stringify({ email, name, phone })
    };
    try {
      const authResponse: any = await fetch(authURL, settings);
      if ([200, 201, 202].includes(authResponse.status)) {
        const response = await authResponse.json();
        setStateItem({ token: response.token, user: response.guest })
        navigate('/chat');
      } else {
        console.log(authResponse)
        setError(authResponse.statusText)
      }
    } catch (error) {
      console.error(error)
      setError(error.message)
    }
  }

  let inputClasses = "block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
  if (error) {
    inputClasses = " border-red-500 " + inputClasses
  }

  return (
    <div className="relative isolate bg-gray-900">
      <div className="relative px-6 pb-10 pt-10">
        <div className="mx-auto">
          <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
            <svg
              className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                  width={200}
                  height={200}
                  x="100%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
              </svg>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
            </svg>
            <div
              className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
              aria-hidden="true"
            >
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                style={{
                  clipPath:
                    'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                }}
              />
            </div>
          </div>
          <h2 className="text-3xl font-semibold  text-white">Get started!</h2>
          <p className="mt-2 leading-8 text-gray-300">Complete the form below to begin a new chat  </p>
          {error && <div className="mt-4 text-red-500">{error}</div>}
          <dl className="mt-6 space-y-4 text-base leading-7 text-gray-300">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>
                <a className="hover:text-white" href="mailto:hello@example.com">
                  hello@example.com
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <form onSubmit={startChat} method="POST" className="mt-10">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className=" grid gap-x-8 gap-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
                  Name*
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    required
                    onChange={e => setName(e.target.value)}
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className={inputClasses}
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                  Email*
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    id="email"
                    autoComplete="email"
                    className={inputClasses}
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
                  Phone number*
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    onChange={e => setPhone(e.target.value)}
                    name="phone-number"
                    required
                    id="phone-number"
                    autoComplete="tel"
                    className={inputClasses}
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    onChange={e => setMessage(e.target.value)}
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md flex items-center gap-5 bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Start Chat
                <IoMdSend />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;


const isInvalidEmail = (email) => {
  return !email || !email.includes('@') || !email.includes('.')
}

const isInvalidPhone = (phone) => {
  return !phone || phone.length < 10
}