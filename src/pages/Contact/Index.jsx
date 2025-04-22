'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'

export default function Contact() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 px-6 py-24 sm:py-32 lg:px-8">
      {/* Decorative blob */}
      <div
        className="absolute inset-0 -z-10 blur-[100px] opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 0%, #ff80b5, #9089fc 70%)',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      ></div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Contact Sales
        </h2>
        <p className="mt-2 text-lg leading-8 text-indigo-100">
          Let's connect! Tell us how we can help your business grow.
        </p>
      </div>

      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {[
            { id: 'first-name', label: 'First name', autoComplete: 'given-name' },
            { id: 'last-name', label: 'Last name', autoComplete: 'family-name' },
          ].map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block text-sm font-medium text-white">
                {field.label}
              </label>
              <div className="mt-2.5">
                <input
                  id={field.id}
                  name={field.id}
                  type="text"
                  autoComplete={field.autoComplete}
                  className="w-full rounded-lg bg-white/90 px-3.5 py-2 text-base text-gray-900 shadow-md placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 outline-none"
                />
              </div>
            </div>
          ))}

          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-medium text-white">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="w-full rounded-lg bg-white/90 px-3.5 py-2 text-base text-gray-900 shadow-md placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 outline-none"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="w-full rounded-lg bg-white/90 px-3.5 py-2 text-base text-gray-900 shadow-md placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 outline-none"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-medium text-white">
              Phone number
            </label>
            <div className="mt-2.5 flex rounded-lg bg-white/90 shadow-md ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
              <select
                id="country"
                name="country"
                className="bg-transparent py-2 pl-3 pr-7 text-base text-gray-600"
              >
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
                <option>IN</option>
              </select>
              <ChevronDownIcon className="h-5 w-5 text-gray-500 -ml-6 mt-2.5" />
              <input
                id="phone-number"
                name="phone-number"
                type="text"
                placeholder="123-456-7890"
                className="flex-1 border-none bg-transparent px-2 py-2 text-gray-900 placeholder:text-gray-400 outline-none"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg bg-white/90 px-3.5 py-2 text-base text-gray-900 shadow-md placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 outline-none"
              />
            </div>
          </div>

          <Field className="flex gap-x-4 sm:col-span-2 items-center">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                agreed ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
            >
              <span className="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                className={`${
                  agreed ? 'translate-x-5' : 'translate-x-0'
                } inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
            <Label className="text-sm text-indigo-100">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold underline hover:text-indigo-300">
                privacy policy
              </a>
              .
            </Label>
          </Field>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-6 py-3 text-center text-base font-semibold text-white shadow-md hover:bg-indigo-500 transition duration-200"
          >
            Let’s talk
          </button>
        </div>
      </form>
    </div>
  )
}
