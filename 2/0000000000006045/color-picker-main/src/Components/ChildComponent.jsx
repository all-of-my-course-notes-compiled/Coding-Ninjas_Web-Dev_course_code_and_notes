import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = (props) => (
  <div
    style={{
      border: `10px solid #fff`,
      margin: "15px",
      padding: "10px"
    }}
  >
    <GrandChildComponent color={props.color} />
  </div>
);

export default ChildComponent;
