// "use client";

// import { Tabs } from "./ui/tabs";

// export function TabsDemo() {
//   const tabs = [
//     {
//       title: "Product",
//       value: "product",
//       content: (
//         <div
//           className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Product Tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//     {
//       title: "Services",
//       value: "services",
//       content: (
//         <div
//           className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Services tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//     {
//       title: "Playground",
//       value: "playground",
//       content: (
//         <div
//           className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Playground tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//     {
//       title: "Content",
//       value: "content",
//       content: (
//         <div
//           className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Content tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//     {
//       title: "Random",
//       value: "random",
//       content: (
//         <div
//           className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Random tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div
//       className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
//       <Tabs tabs={tabs} />
//     </div>
//   );
// }

// const DummyContent = () => {
//   return (
//     <img
//       src="/linear.webp"
//       alt="dummy image"
//       width="1000"
//       height="1000"
//       className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />
//   );
// };
"use client";

import { Tabs } from "./ui/tabs";

const images = {
  product:
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  services:
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
  playground:
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
  content:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  random:
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
};

export function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: <TabContent title="Product Tab" img={images.product} />,
    },
    {
      title: "Services",
      value: "services",
      content: <TabContent title="Services Tab" img={images.services} />,
    },
    {
      title: "Playground",
      value: "playground",
      content: <TabContent title="Playground Tab" img={images.playground} />,
    },
    {
      title: "Content",
      value: "content",
      content: <TabContent title="Content Tab" img={images.content} />,
    },
    {
      title: "Random",
      value: "random",
      content: <TabContent title="Random Tab" img={images.random} />,
    },
  ];

  return (
    <div className="h-[20rem] md:h-[36rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const TabContent = ({ title, img }) => {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-8 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 via-violet-800 to-black flex flex-col gap-4">
      {/* TITLE */}
      <p className="relative z-10">{title}</p>

      {/* IMAGE */}
      <img
        src={img}
        alt="tab image"
        className="object-cover object-start h-[70%] md:h-[85%] w-[100%] rounded-xl mx-auto shadow-2xl"
      />
    </div>
  );
};
