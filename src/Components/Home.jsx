import ComponentCard from "./ComponentCard";


const components = [
  { title: "Select List", route: "/components/selectlist" },
  { title: "Combobox", route: "/components/combobox" },
  { title: "MultiSelect Combobox", route: "/components/multi-select-combobox" },
  { title: "Infinite Scroll", route: "/components/infinite-scroll" },
  { title: "Debounced Search", route: "/components/debounced-search" },
  { title: "Debounced Search With Tanstack Query", route: "/components/debounced-search-with-tanstack-query" },
  { title: "Button", route: "/components/button" },
  { title: "Dialog", route: "/components/dialog" },
  { title: "Toast", route: "/components/toast" },
];

const Home = () => {
  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {components.map((c) => (
        <ComponentCard key={c.title} title={c.title} route={c.route} />
      ))}
    </div>
  );
};

export default Home;
