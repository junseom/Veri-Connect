interface ContainerProps {
  children: React.ReactNode;
}

export default function Container(props: ContainerProps) {
  return (
    <div className="w-screen bg-gray-50">
      <div className="bg-white relative flex flex-col items-center justify-center min-h-screen max-w-2xl mx-auto shadow-sm">
        {props.children}
      </div>
    </div>
  );
}
