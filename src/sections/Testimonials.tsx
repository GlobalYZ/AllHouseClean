import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="container">
      <SectionHeader
        title="What Clients Say about me"
        eyebrow="Happy Clients"
        description="Don't just take my words for it, See what clients say"
      />
      <div className="mt-16 lg:mt-24 flex overflow-x-clip mask-layer">
        <div className="flex gap-8 flex-none">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="p-6 max-w-xs md:p-8 md:max-w-md"
            >
              <div className="flex gap-4 items-center">
                <Image
                  className="size-14 rounded-full bg-gray-700"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-white/40">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="mt-4 md:mt-6 md:text-base" text-sm>
                {testimonial.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
