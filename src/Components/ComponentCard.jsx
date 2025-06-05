import { Link } from "react-router-dom";

const ComponentCard = ({ title, route }) => {
  return (
    <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-4 rounded-xl shadow-sm flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">{title}</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Reusable UI component</p>
      </div>
      <Link
        to={route}
        className="mt-4 inline-block text-sm px-4 py-1.5 rounded-md bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-800 dark:text-white text-center"
      >
        Preview
      </Link>
    </div>
  );
};

export default ComponentCard;
