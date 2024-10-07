const inputs = [
  {
    title: "My profile",
    count: 8,
  },
  {
    title: "Education background",
    count: 8,
  },
];

const VisaInputs = () => {
  return (
    <div className="mx-auto w-11/12 max-w-xl pb-20">
      {inputs.map((input, index) => {
        return (
          <div key={index}>
            <h1 className="text-center text-xl">{input.title}</h1>
            <div className="grid grid-cols-2 place-items-center gap-2 ">
              {Array.from({ length: input.count }).map((_, i) => (
                <div key={i} className="col-span-1 p-2">
                  <input
                    key={i}
                    type="text"
                    placeholder="Value"
                    className="border p-2 w-5/6 border-slate-500 rounded-md focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VisaInputs;
