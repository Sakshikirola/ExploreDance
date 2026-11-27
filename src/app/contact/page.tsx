"use client";
import { Meteors } from "@/components/ui/meteors";

function Page() {
  return (
    <div className="bg-gray-900 min-h-screen py-20 pt-32 px-4 sm:px-6 flex flex-col items-center gap-6">
      <h1 className="text-3xl md:text-5xl text-center font-sans font-bold text-white">
        Contact Us
      </h1>
      <p className="text-gray-400 text-sm md:text-base text-center max-w-xl leading-7">
        We're here to help you with any questions about our courses,
        programs, or events. Reach out and let us know how we can
        assist you in your learning journey.
      </p>

      <div className="w-full max-w-xl flex flex-col gap-5">
        <input
          type="email"
          placeholder="Your email address"
          className="bg-black text-white placeholder:text-gray-500 border border-gray-700 focus:border-white outline-none w-full py-3 px-4 rounded-lg transition-colors"
        />

        <textarea
          placeholder="Your message"
          rows={4}
          className="bg-black text-white placeholder:text-gray-500 border border-gray-700 focus:border-white outline-none w-full py-3 px-4 rounded-lg resize-none transition-colors"
        />

        <button
          type="button"
          className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-all duration-300 w-full sm:w-auto sm:self-center"
        >
          Send Message
        </button>

        <Meteors number={200} />

      </div>
    </div>
  );
}

export default Page;
