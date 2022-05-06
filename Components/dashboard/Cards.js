import { CondClass } from "./Utility";

export default function Cards(props) {
  return (
    <div
      className={CondClass(
        "card w-96 mr-4",
        props.theme == "dark",
        "bg-base-100 shadow-xl",
        "bg-primary text-primary-content"
      )}
    >
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button
            className={CondClass(
              "btn",
              props.theme == "dark",
              "btn-primary",
              ""
            )}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
