import Cards from "../Components/dashboard/Cards";
import LoanTable from "../Components/dashboard/LoanTable";
import Navbar from "../Components/dashboard/Navbar";
import { FaPlus } from "react-icons/fa";

export default function DashBoard() {
  return (
    <div className="min-h-screen" style={{ backgroundSize: "5px 5px" }}>
      <Navbar />
      <h2 className="card-title px-6 pt-4">Updates</h2>
      <div className="flex justify-start items-center p-4">
        <Cards theme="color" />
        <Cards theme="dark" />
        <Cards theme="dark" />
        <Cards theme="dark" />
      </div>
      <div className="flex justify-between px-6 pt-4">
        <h2 className="card-title">Loans</h2>
        <button className="btn btn-primary">
          <FaPlus className="mr-3" /> Get Loan
        </button>
      </div>
      <div className="p-4">
        <LoanTable />
      </div>
    </div>
  );
}
