import Cards from "../Components/dashboard/Cards";
import Navbar from "../Components/dashboard/Navbar";

export default function DashBoard() {
  return (
    <>
      <Navbar />
      <div className="flex justify-start align-center p-4">
        <Cards theme="color" />
        <Cards theme="dark" />
        <Cards theme="dark" />
        <Cards theme="dark" />
      </div>
    </>
  );
}
