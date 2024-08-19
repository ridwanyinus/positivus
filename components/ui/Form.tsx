import React from "react";

const Form = () => {
  return (
    <div>
      {" "}
      <form className="space-y-4 xl:space-y-6 px-5 lg:px-0">
        <div className="flex  gap-4">
          <div className="flex items-center">
            <input type="radio" id="testers" name="service" className="mr-2" required />
            <label htmlFor="testers" className="p text-black">
              Say Hi
            </label>
            <input type="radio" id="users" name="service" className="ml-8 mr-2 checked:bg-green" required />
            <label htmlFor="users" className="p text-black">
              Get a Quote
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm xl:text-base mb-1">Name</label>
          <input placeholder="Name" type="text" className="w-full px-4 small:px-6 py-3 small:py-4 border border-black rounded-lg lg:rounded-xl  input-p text-[#898989]" required />
        </div>
        <div>
          <label className="block text-sm xl:text-base mb-1">Email*</label>
          <input placeholder="Email" type="email" className="w-full px-4 small:px-6 py-3 small:py-4 border border-black rounded-lg lg:rounded-xl input-p text-[#898989]" required />
        </div>

        <div>
          <label className="block text-sm xl:text-base mb-1">Message*</label>
          <textarea
            name="Message"
            id="Message"
            placeholder="Message"
            className=" px-4 small:px-6 py-2 border border-black rounded-lg lg:rounded-xl input-p text-[#898989] min-h-36 lg:min-h-44 w-full  small:w-[22rem] md:w-[25rem] xl:w-[30rem] desktop:w-[34.75rem]"
            required></textarea>
        </div>

        <div>
          <button type="submit" className="xl:text-xl button w-full ">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
