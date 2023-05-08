type Props = {
  title: string;
  description?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}
export default function Card({ title, description = "", onClick }: Props) {
  return (
    <a
      onClick={onClick}
      href="#"
      className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-2"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </a>
  );
}