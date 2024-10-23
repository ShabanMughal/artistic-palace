/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "@/components/Footer";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { Dropdown } from "@/components/ui/Dropdown";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { db } from "@/store/firebase";
import { useProductStore } from "@/store/store";
import { Label } from "@radix-ui/react-label";
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";
import React from "react";

export default function Page() {
  const options = [
    { value: 300, label: "18 x 18 inch" },
    { value: 400, label: "18 x 24 inch" },
    { value: 500, label: "24 x 36 inch" },
    { value: 600, label: "36 x 18 inch" },
    { value: 700, label: "36 x 48 inch" }
  ];

  const frames = [
    { value: 0, label: "Without frame" },
    { value: 500, label: "Normal frame" },
    { value: 1000, label: "High quality frame" },
    { value: 1500, label: "Branded frame" },
  ];
  const city = [
    { value: 200, label: "Lahore" },
    { value: 550, label: "Karachi" },
    { value: 550, label: "Islamabad" },
    { value: 550, label: "Peshawar" },
    { value: 200, label: "Faisalabad" },
    { value: 550, label: "Other City" },
  ];

  const theme = [
    { value: 500, label: "Canvas" },
    { value: 600, label: "Wooden" },
  ];
  const [selectedOption, setSelectedOption] = React.useState("");
  const [frameOption, setFrameOption] = React.useState("");

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [themeOption, setThemeOption] = React.useState("");
  const [cityOption, setCityOption] = React.useState("");
  const [shipped, setShipped] = React.useState(0);
  const [size, setSize] = React.useState(0);
  const [framePrice, setFramePrice] = React.useState(0);
  const [themePrice, setThemePrice] = React.useState(0);
  const [token, setToken] = React.useState("");
  const [isTokenValid, setIsTokenValid] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showPayment, setShowPayment] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [discountLoading, setDiscountLoading] = React.useState(false);

  const selectedProduct = useProductStore((state) => state.selectedProduct);

  React.useEffect(() => {
    switch (themeOption) {
      case "Canvas":
        setThemePrice(500);
        break;
      case "Wooden":
        setThemePrice(600);
        break;
      default:
        setFramePrice(0);
        break;
    }
  }, [themeOption]);

  React.useEffect(() => {
    switch (frameOption) {
      case "Without frame":
        setFramePrice(0);
        break;
      case "Normal frame":
        setFramePrice(500);
        break;
      case "High quality frame":
        setFramePrice(1000);
        break;
      case "3Branded frame":
        setFramePrice(1500);
        break;
      default:
        setFramePrice(0);
        break;
    }
  }, [frameOption]);

  React.useEffect(() => {
    switch (selectedOption) {
      case "18 x 18 inch":
        setSize(300);
        break;
      case "18 x 24 inch":
        setSize(400);
        break;
      case "24 x 36 inch":
        setSize(500);
        break;
      case "36 x 18 inch":
        setSize(600);
        break;
      case "36 x 48 inch";
        setSize(700);
        break:
      default:
        setSize(0);
        break;
    }
  }, [selectedOption]);

  React.useEffect(() => {
    switch (cityOption) {
      case "Lahore":
        setShipped(200);
        break;
      case "Karachi":
        setShipped(550);
        break;
      case "Islamabad":
        setShipped(550);
        break;
      case "Peshawar":
        setShipped(550);
        break;
      case "Faisalabad":
        setShipped(200);
        break;
        case "Other City":
        setShipped(550);
        break;
      default:
        setShipped(0);
        break;
    }
  }, [cityOption]);

  React.useEffect(() => {
    if (
      name &&
      email &&
      phoneNumber &&
      cityOption &&
      themeOption &&
      frameOption &&
      selectedOption
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [
    name,
    email,
    phoneNumber,
    cityOption,
    themeOption,
    frameOption,
    selectedOption,
  ]);

  const handleStartShipping = async () => {
    setLoading(true);
    if (!selectedProduct) {
      console.error("Selected product is null");
      return;
    }
    const data = await addDoc(collection(db, "order"), {
      customer: name,
      email: email,
      phone: phoneNumber,
      city: cityOption,
      productName: selectedProduct.name,
      productPrice: selectedProduct.price,
      productImage: selectedProduct.image,
      size: selectedOption,
      frame: frameOption,
      backFrame: themeOption,
      shipped: shipped,
      totalPrice: discountedTotal,
    });
    console.log(data);

    setTimeout(() => {
      setLoading(false);
      setShowPayment(true);
    }, 2000);
  };

  if (!selectedProduct) {
    return (
      <div className="h-screen w-screen flex justify-center text-center px-10 items-center text-2xl md:text-3xl">
        Please go back to the home page, select a product again, and don&apos;t refresh the page.
      </div>
    );
  }

  const handleTokenChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setToken(e.target.value);
  };

  const applyDiscount = () => {
    const validToken = "DISCOUNT20";
    setDiscountLoading(true);
    setTimeout(() => {
      setDiscountLoading(false);
      if (token === validToken) {
        setIsTokenValid(true);
        setToken("");
      } else {
        setIsTokenValid(false);
      }
    }, 3000);
  };

  const subTotal = size + framePrice + themePrice + shipped;

  const discountedTotal = isTokenValid
    ? (subTotal + selectedProduct.price) * 0.8
    : subTotal + selectedProduct.price;

  const discountValue = isTokenValid
    ? (subTotal + selectedProduct.price) * 0.2
    : 0;

  const downloadPDF = () => {
    const pdfUrl = "/pdf.pdf";

    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "payment.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
    <div className="h-full pb-10 dark:bg-neutral-900 bg-neutral-100 text-black dark:text-white ">
      <div className="flex flex-col md:flex-row pt-20 pb-5 md:pt-24 md:pb-[1%] items-center justify-center text-3xl md:text-5xl font-bold">
        <p className="mr-3">Your Payment</p>{" "}
        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
          <span className="">Method</span>
        </div>
      </div>

      <div className="md:px-10 px-5 flex flex-col  md:flex-row justify-center gap-10 items-start">
        {/* Product payment form */}

        <div className="dark:bg-black bg-white md:px-10 px-5 py-5 rounded-lg md:mr-10 md:w-[40%] w-[100%] md:order-2 order-1">
          <p className="text-center font-semibold text-md md:text-xl">
            Quick and easy booking! <br /> Just fill out the form
          </p>
          <div className="my-8">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">Name</Label>
                <Input
                  id="firstname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name..."
                  type="text"
                  required
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email..."
                type="email"
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="number">Number</Label>
              <Input
                id="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Your phone no..."
                type="number"
                required
              />
            </LabelInputContainer>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer className="mb-4">
                <Label htmlFor="nessage">City</Label>
                <Dropdown
                  options={city}
                  onChange={setCityOption}
                  selectedValue={cityOption}
                  placeholder="Click here to select city"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="nessage">Material</Label>
                <Dropdown
                  options={theme}
                  onChange={setThemeOption}
                  selectedValue={themeOption}
                  placeholder="Click here to change theme"
                />
              </LabelInputContainer>
            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-8">
              <LabelInputContainer className="mb-4">
                <Label htmlFor="nessage">Size</Label>
                <Dropdown
                  options={options}
                  onChange={setSelectedOption}
                  selectedValue={selectedOption}
                  placeholder="Click here to select custom size"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="nessage">Frame</Label>
                <Dropdown
                  options={frames}
                  onChange={setFrameOption}
                  selectedValue={frameOption}
                  placeholder="Click here to select frame"
                />
              </LabelInputContainer>
            </div>
          </div>
        </div>

        {/* Product detail */}
        <div className="flex justify-between w-[100%] items-center md:w-[50%] gap-5 md:order-1 order-2">
          <div className="md:order-2 order-1 mx-auto">
            <div className="font-sans font-bold mb-2 mt-10 text-md md:text-xl items-center flex justify-between">
              <span> Product Name:</span>
              <span className="text-neutral-600 dark:text-neutral-400 text-sm md:text-xl ml-10">
                {selectedProduct.name}
              </span>
            </div>
            <div className="font-sans font-bold  mb-2 mt-10 text-md items-center md:text-xl flex justify-between">
              <span> Product Price:</span>
              <span className="text-neutral-600 dark:text-neutral-400 text-sm md:text-xl ml-10">
                Rs {selectedProduct.price}/-
              </span>
            </div>
            <div className="font-sans font-bold  mb-2 mt-10 text-md md:text-xl items-center flex justify-between">
              <span> Product Size:</span>
              <span className="text-neutral-600 dark:text-neutral-400 text-sm md:text-xl ml-10">
                {selectedOption || selectedProduct.size}{" "}
                {`${selectedOption ? "inch" : ""}`}
              </span>
            </div>
            <div className="font-sans font-bold  mb-2 mt-10 text-md md:text-xl items-center flex justify-between">
              <span>Shipping Charges:</span>
              <span className="text-neutral-600 dark:text-neutral-400 text-sm md:text-xl ml-10">
                Rs {shipped}/-
              </span>
            </div>
            <hr className="border-spacing-1 border-zinc-600 mt-5" />
            <div className="mt-5 flex items-center justify-between w-full">
              <Input
                type="text"
                value={token}
                onChange={handleTokenChange}
                placeholder="Enter discount token"
                className="border p-2 rounded w-[100%]"
              />
              <button
                onClick={applyDiscount}
                className="ml-3 p-2 dark:bg-white bg-black text-white dark:text-black rounded"
              >
                {discountLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="loader border-t-transparent border-solid border-4 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
                  </div>
                ) : (
                  "Apply"
                )}
              </button>
            </div>
            <hr className="border-spacing-1 border-zinc-600 mt-5" />
            <div className="font-sans font-bold  mb-2 mt-10 text-xl flex justify-between">
              <span>Sub Total:</span>
              <span className="text-neutral-600 dark:text-neutral-400 text-xl ml-10">
                Rs {discountedTotal}/-
              </span>
            </div>
            <Modal>
              <ModalTrigger>
                <button
                  disabled={disable}
                  className={`dark:bg-white bg-black text-white dark:text-black w-[80vw] md:w-[25vw]  rounded-md h-10 font-medium mt-5
                    ${disable ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {disable ? "Fill all the fields to proceed" : "Submit"}
                  <BottomGradient />
                </button>
              </ModalTrigger>

              <ModalBody className="md:mx-[100px] mx-[10px] sm:mx-[5px] rounded-xl ">
                <ModalContent>
                  {!showPayment ? (
                    <div>
                      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                        Confirm your details before Payment
                      </h4>
                      <div className="mt-4">
                        <p className="flex justify-between items-center my-1">
                          <strong>Name:</strong>{" "}
                          <span className="opacity-50">{name}</span>
                        </p>
                        <p className="flex justify-between items-center my-1">
                          <strong>Email:</strong>{" "}
                          <span className="opacity-50">{email.slice(0, 15)}...</span>
                        </p>
                        <p className="flex justify-between items-center my-1">
                          <strong>Phone No:</strong>{" "}
                          <span className="opacity-50">{phoneNumber}</span>
                        </p>
                        <p className="flex justify-between items-center my-1">
                          <strong>Product:</strong>{" "}
                          <span className="opacity-50">
                            {selectedProduct.name.slice(0, 15)}...
                          </span>
                        </p>
                        <p className="flex justify-between items-center my-1">
                          <strong>City:</strong>{" "}
                          <span className="opacity-50">{cityOption}</span>
                        </p>
                        {themeOption && (
                          <p className="flex justify-between items-center my-1">
                            <strong>Material:</strong>{" "}
                            <span className="opacity-50">{themeOption}</span>
                          </p>
                        )}
                        {frameOption && (
                          <p className="flex justify-between items-center my-1">
                            <strong>Frame:</strong>{" "}
                            <span className="opacity-50">{frameOption}</span>
                          </p>
                        )}
                        {selectedOption && (
                          <p className="flex justify-between items-center my-1">
                            <strong>Size:</strong>{" "}
                            <span className="opacity-50">{selectedOption}</span>
                          </p>
                        )}
                        {discountValue > 0 && (
                          <p className="flex justify-between items-center my-1">
                            <strong>Discount:</strong>{" "}
                            <span className="opacity-50">
                              Rs {discountValue}/-
                            </span>
                          </p>
                        )}
                        <hr className="my-5 border-zinc-500" />
                        <p className="flex justify-between items-center my-1">
                          <strong>Sub Total:</strong>{" "}
                          <span className="opacity-50">
                            Rs {discountedTotal}/-
                          </span>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="">
                      <h1 className="text-center font-semibold text-2xl mb-5">
                        Thank you for shopping! 👋
                      </h1>
                      <div className="mt-5">
                        <p className="text-lg text-zinc-500">
                          Dear <strong className="dark:text-white text-black">{name},</strong>
                        </p>
                        <p className="mt-3 text-zinc-500">
                          Your order is currently pending. To complete your
                          purchase, please download our payment details by
                          clicking the button below. Ensure your payment is
                          verified within 2 days, otherwise, your order will be
                          canceled. If you have any questions or need
                          assistance, feel free to contact us through the links
                          provided below.
                        </p>
                      </div>
                      <div className="mt-8 text-center">
                        <p className="">For assistance, reach out to us:</p>
                        <div className="mt-3 flex justify-center space-x-4">
                          <Link
                            href="mailto:manahilartistic@gmail.com"
                            className="text-blue-500 hover:underline"
                          >
                            Email Us
                          </Link>
                          <Link
                            href="https://wa.me/+923197617256"
                            className="text-blue-500 hover:underline"
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {loading && (
                    <div className="flex justify-center items-center mt-5">
                      <div className="loader border-t-transparent border-solid border-4 border-blue-400 rounded-full w-8 h-8 animate-spin"></div>
                    </div>
                  )}
                </ModalContent>
                <ModalFooter>
                  {!showPayment ? (
                    <button
                      onClick={handleStartShipping}
                      disabled={loading}
                      className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
                    >
                      {loading ? "Prosessing..." : "Start Shipping"}
                    </button>
                  ) : (
                    <button
                      onClick={() => downloadPDF()}
                      className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black"
                    >
                      Download Payment PDF
                    </button>
                  )}
                </ModalFooter>
              </ModalBody>
            </Modal>
          </div>

          <div
            className={cn(
              `md:order-1 order-2 rounded-xl w-[350px] h-[450px] hover:shadow-xl shadow-black dark:shadow-white/5 transition duration-200 p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-black/1 justify-between flex-col space-y-4 hidden md:flex`
            )}
          >
            <img
              src={selectedProduct.image}
              className="w-full object-contain h-full"
              alt={selectedProduct.name}
            />
          </div>
        </div>
      </div>
    </div>
      <Footer />
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
