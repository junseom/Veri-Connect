import Container from "@/components/layout/Container";
import { ConnectListHeader } from "@/components/ConnectListHeader";
import { GoChevronLeft } from "react-icons/go";
import { useRouter } from "next/router";

function ConnectList() {
  const router = useRouter();

  return (
    <Container>
      <div className="w-full flex flex-col h-full">
        <div className="flex w-full mb-2">
          <GoChevronLeft
            className=" left-0"
            size={24}
            color="#000"
            onClick={() => router.back()}
          />
          <h1 className="flex-grow text-center text-lg font-semibold">
            Connect List
          </h1>
        </div>
        <div className="h-px bg-neutral-100 w-full mb-2" />
      </div>
      <img
        src="/assets/ConnectList.png"
        alt="Connect List"
        className="w-full mx-auto object-cover max-w-md mb-2 overflow-y-scroll"
      />
    </Container>
  );
}

export default ConnectList;
