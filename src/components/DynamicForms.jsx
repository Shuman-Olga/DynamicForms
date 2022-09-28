import { useState } from 'react';

const DynamicForms = () => {
  const init = { firstname: '', lastname: '' };
  const [dataLists, setDataLists] = useState([init]);

  const addInputField = () => {
    setDataLists([...dataLists, init]);
  };
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const list = [...dataLists];
    list[index][name] = value;
    setDataLists(list);
  };
  const removeInputField = (index) => {
    const row = [...dataLists];
    row.splice(index, 1);
    setDataLists(row);
  };
  return (
    <div id="dynamicforms" className="container d-flex justify-content-center">
      <form className="w-50">
        {dataLists.map((item, index) => {
          return (
            <div key={index} className="row mb-2">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Имя"
                  name="firstname"
                  value={item.firstname}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Фамилия"
                  name="lastname"
                  value={item.lastname}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div className="col-sm-1 btn-remove">
                <span
                  className="material-icons"
                  onClick={() => {
                    removeInputField(index);
                  }}
                >
                  delete
                </span>
              </div>
            </div>
          );
        })}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="button" className="btn btn-success mt-4" onClick={addInputField}>
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};
export default DynamicForms;
