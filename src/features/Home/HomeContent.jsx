const HomeContent = () => {
  const product = [
    {
      id: 1,
      name: "Product 1",
      image: "/wear.png",
      price: 19.99,
    }
  ]
  return (
    <main className="px-5">
      <div className="flex items-center gap-2">
        <h1>New This week</h1>
        <sup className="font-extrabold text-[20px]">(x)</sup>
      </div>
    </main>
  );
};

export default HomeContent;
