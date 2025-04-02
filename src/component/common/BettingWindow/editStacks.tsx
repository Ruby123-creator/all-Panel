import React from "react";
import { useUI } from "../../../context/ui.context";

interface Props{
  edit:any,
}
const EditStack: React.FC<Props> = ({edit}) => {
  const {stacks,setStacks} = useUI();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedStacks = stacks.map((item: any, i: number) => (i === index ? Number(e.target.value) : item));
    setStacks(updatedStacks);
  };
  return (
    <div className="container p-2 d-flex flex-wrap gap-2" style={{ maxWidth: "400px" }}>
      {stacks.map((val: any, i: number) => (
        <div key={"stackAmount" + i} className="d-flex align-items-center" style={{width:"20%"}}>
          {edit ? (
            <input
              type="number"
              value={val}
              onChange={(e) => handleInputChange(e, i)}
              autoComplete="off"
              className="form-control rounded-1"
            />
          ) : (
            <div className="p-2 w-100 text-center border rounded bg-white">{val}</div>
          )}
        </div>
      ))}
      {edit && (
        <button className="btn btn-primary w-100">Save Changes</button>
      )}
    </div>
  );
};

export default EditStack;
