"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/store/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

export default function Contact() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      firstname !== "" &&
      lastname !== "" &&
      email !== "" &&
      number !== "" &&
      message !== ""
    ) {
      await addDoc(collection(db, "information"), {
        firstname: firstname,
        lastname: lastname,
        email: email,
        number: number,
        message: message,
      });
      setFirstname("");
      setLastname("");
      setEmail("");
      setNumber("");
      setMessage("");
      toast("Message send successfully! 👍", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      alert("Please fill all the fields");
    }
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
      },
      body: JSON.stringify({
          access_key: "08579140-9486-492b-81eb-563b57e7abe5",
          name: firstname + " " + lastname,
          email: email,
          number: number,
          message: message,
      }),
  });
  const result = await response.json();
  if (result.success) {
      console.log(result);
  }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
      />

      <div className="md:h-screen h-full pb-10 md:pb-0" id="contact">
        <div className="flex flex-col md:flex-row pt-20 pb-5 md:pt-24 md:pb-[6%] items-center justify-center text-2xl md:text-4xl font-bold">
          <p className="mr-3">Contact Us and </p>{" "}
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className=""> Let&apos;s Connect</span>
          </div>
        </div>

        <div className="flex justify-between items-center mx-5 md:mx-10 gap-10 lg:flex-row flex-col">
          <div className="md:w-[40%] w-[100%]">
            <div className="flex items-center gap-3 text-2xl md:text-4xl font-bold">
              <p>Why You Can </p>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className=""> Trust Us</span>
              </div>
            </div>
            <div className="text-sm md:text-lg">
              <p>
                We are dedicated to creating high-quality, handcrafted artwork
                that reflects our passion and attention to detail. Every piece
                is made with care, ensuring it not only meets but exceeds your
                expectations. We pride ourselves on maintaining open
                communication throughout the process, offering transparency from
                creation to delivery. With a commitment to safe and secure
                delivery, we ensure that your artwork arrives in perfect
                condition, no matter where you are.
              </p>
              <p className="mt-5">
                Additionally, we believe in offering fair and honest pricing for
                all our art pieces and services, ensuring that you receive
                exceptional value without hidden fees. With a history of
                satisfied clients and recognition for our artistic excellence,
                we are here to provide a seamless, trustworthy experience from
                start to finish.
              </p>
            </div>
          </div>
          <div className="dark:bg-black bg-white md:px-10 px-5 py-5 rounded-lg md:mr-10 md:w-[40%] w-[100%]">
            <p className="text-center font-semibold text-2xl md:text-3xl">
              Get in Touch
            </p>
            <form className="my-8" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input
                    id="firstname"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="Tyler"
                    type="text"
                    required
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input
                    id="lastname"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Durden"
                    type="text"
                    required
                  />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="yourmail@gmail.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="number">Number</Label>
                <Input
                  id="number"
                  name="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="+92 XXXXXXXXXX"
                  type="number"
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-8">
                <Label htmlFor="nessage">Your Message</Label>
                <Input
                  required
                  id="message"
                  name="message"
                  placeholder="I want to know more about your services"
                  type="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Submit
                <BottomGradient />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
