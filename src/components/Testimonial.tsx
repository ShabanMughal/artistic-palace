import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

export function Testimonial() {
  return (
    <div className='h-screen bg-white dark:bg-black '>
         <div className="flex flex-col md:flex-row pt-20 pb-5 md:pt-24 md:pb-[4%] items-center justify-center text-2xl md:text-4xl font-bold">
        <p className="mr-3">Customer Reviews{" "}</p>{' '}
      <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">{" "} What Our Clients Say</span>
            </div>
      </div>
      <div className="h-[33vh] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
      <div className="h-[33vh] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={congrants}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  )
}

const testimonials = [
    {
      quote:
        "Allhamdulillah today i recevied my parcel, it's so beautiful neatly illustrated and packed✨. I am so happy with my purchase.I will definitely recommend you to my friends and family. JazakAllah for making this masterpiece❤️",
      name: "Laiba Tariq",
      title: "Faisalabad",
      img:'https://i.pinimg.com/originals/b5/a4/dd/b5a4dd6864cb62dd340fc0147ad2ef64.jpg'
    },
    {
      quote:
        "Asalam o alikum! Ap ka parcel mil gya tha muje ap ki painting boht zabardast ha🔥 Allhamdulillah meri family or relatives ko boht pasand aayi ha. Thank you so much yarr😍🥳",
      name: "M. Muqaddas",
      title: "Sialkot",
      img:'https://i.pinimg.com/originals/91/83/56/918356e15fada9202ae9903359791361.jpg'
    },
    {
      quote: "Mashallah bht bht zabardast painting ha. Qable tareef ha. Allah ap ko mazeed kamyabiyan ata farmaye. Ameen🤲",
      name: "Burhan Ali",
      title: "Faisalabad",
      img:'https://i.pinimg.com/originals/54/8f/78/548f7801e40c44e993190f1593634650.jpg'
    },
    {
      quote:
        "Allahdullilah! today I received this beautiful painting❤️ it's so nice I and my family is very happy to see this beautiful painting😍😊. Thank you so Much. God bless you and high fly in All Affairs of Life❤️",
      name: "Dilawar Hussain",
      title: "Lahore",
      img:'https://i.pinimg.com/736x/ef/03/56/ef03566e47ee66e655f4343e2efba9b6.jpg'
    },
    {
      quote:
        "I received my parcel today. I am so happy with my purchase. The painting is so beautiful and neatly illustrated. I will definitely recommend you to my friends and family. Thank you so much for your great service❤️",
      name: "Sadaf Khan",
      title: "Islamabad",
      img:'https://i.pinimg.com/736x/e0/ae/df/e0aedf32c4decf70793b5902ef101d34.jpg'    
    },
  ];

 const congrants = [
  {
    quote:
      "I needed a personal gift for a close friend, and the custom artwork was absolutely perfect. You captured exactly what I was looking for. The entire process was hassle-free, and the pricing was fair for the exceptional work.",
    name: "Afsa Mahmood",
    title: "Faisalabad",
    img:'https://i.pinimg.com/564x/35/58/1e/35581e038b74841b56f8dbef3456cb61.jpg'
  },
  {
    quote:
      "I wanted something special for my office space, and the artwork I received is perfect. It adds so much character and warmth to the room. The delivery was timely and secure, and the pricing was very reasonable for such high-quality art.",
    name: "Ahmad Raza",
    title: "Faisalabad",
    img:'https://i.pinimg.com/564x/79/06/2c/79062cc43b209688795a950cbe61cb14.jpg'
  },
  {
    quote:
      "Yaar, I just loved the custom painting! Itna perfect tha for my living room, the details were amazing. Honestly, from placing the order to receiving it, everything was super smooth.",
    name: "Rabia Javed",
    title: "Islamabad",
    img:'https://i.pinimg.com/564x/63/f8/28/63f828d28a062f2800cec43979402d7a.jpg'
  },
  {
    quote:
      "Honestly, bohat acha experience raha! I’ve ordered art from different places before, but your's exceptional. Har piece unique lagta hai, and delivery was fast and secure. Highly recommended for sure!",
    name: "Zain Malik",
    title: "Lahore",
    img:'https://i.pinimg.com/736x/c0/d4/88/c0d488715f087267bf04d7c549f4657b.jpg'
  },
  {
    quote:
      "Bhai, I was looking for something special for my home office, and jo artwork mila, it’s beyond expectations! Looks amazing, delivery on time, and the artist ka kaam was just fantastic. I’ll definitely recommend this to my friends!",
    name: "Usman Khan",
    title: "Islamabad",
    img:'https://i.pinimg.com/564x/f1/2a/ca/f12aca0c085dba50aaed842b1a622a8a.jpg'
  },
  ]