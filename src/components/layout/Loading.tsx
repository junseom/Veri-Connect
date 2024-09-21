import { FaSpinner } from "react-icons/fa";

interface LoadingProps {
  loading: boolean;
}

export const Loading = ({ loading }: LoadingProps) => {
  return loading ? (
    <div className="bg-neutral-900/30 fixed inset-0 flex items-center justify-center">
      <FaSpinner color="white" size={56} className="animate-spin" />
    </div>
  ) : null;
};
