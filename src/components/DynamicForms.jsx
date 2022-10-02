import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import InputMask from 'react-input-mask';

const DynamicForms = () => {
  const initialParentState = {
    lastname: '',
    firstname: '',
    patronymic: '',
    parentnow: true,
    birthday: '',
    gender: null,
    phone: '',
  };

  const [parentsLists, setParentsLists] = useState([]);
  const addParent = () => {
    if (parentsLists.length) {
      parentsLists.forEach((item) => {
        if (item.parentnow === true) {
          initialParentState.parentnow = false;
        }
      });
    }
    setParentsLists([...parentsLists, initialParentState]);
  };

  const onChangeParent = (index, e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if (name === 'parentnow' && value === true) {
      console.log('true');
      parentsLists.forEach((item) => {
        item.parentnow = false;
      });
    }
    const list = [...parentsLists];
    list[index][name] = value;

    setParentsLists(list);
  };

  const removeParent = (index) => {
    const row = [...parentsLists];
    row.splice(index, 1);
    setParentsLists(row);
  };

  return (
    <div className="container">
      <Accordion defaultActiveKey={'0'}>
        {parentsLists.map((parent, index) => {
          return (
            <div key={index}>
              <Accordion.Item eventKey="0" className="mb-5 bg-body rounded mb-3">
                <Accordion.Header>Законный представитель</Accordion.Header>
                <Accordion.Body>
                  <div className="position-relative">
                    <span
                      style={{ color: 'red', cursor: 'pointer' }}
                      className="material-icons position-absolute top-0 end-0"
                      onClick={() => removeParent(index)}
                    >
                      close
                    </span>
                  </div>
                  <div className="col-md-4 mb-3 d-flex align-items-center">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      checked={parent.parentnow}
                      onChange={(e) => onChangeParent(index, e)}
                      name="parentnow"
                    />{' '}
                    Текущий представитель
                  </div>
                  <div className="row mb-2 ">
                    <div className="col-md-4 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        name="lastname"
                        placeholder="Фамилия"
                        value={parent.lastname}
                        onChange={(e) => onChangeParent(index, e)}
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        name="firstname"
                        placeholder="Имя"
                        value={parent.firstname}
                        onChange={(e) => onChangeParent(index, e)}
                      />
                    </div>
                    <div className="col-md-3">
                      <input
                        className="form-control ms-2"
                        type="text"
                        id="patronymic"
                        placeholder="Отчество"
                        value={parent.patronymic}
                        onChange={(e) => onChangeParent(index, e)}
                        name="patronymic"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label" htmlFor="phone">
                      Телефон
                    </label>
                    <div className="col-md-4">
                      <InputMask
                        id="phone"
                        mask="+7\(999)999-99-99"
                        maskChar="_"
                        name="phone"
                        value={parent.phone}
                        onChange={(e) => onChangeParent(index, e)}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label" htmlFor="birthday">
                      Дата рождения
                    </label>
                    <div className="col-sm-3">
                      <InputMask
                        mask="99.99.9999"
                        maskChar="_"
                        id="birthday"
                        value={parent.birthday}
                        onChange={(e) => onChangeParent(index, e)}
                        name="birthday"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-2 col-form-label">Пол</div>
                    <div className="col">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id={`unspecified${index}`}
                          value={`unspecified${index}`}
                          checked={parent.gender === `unspecified${index}`}
                          onChange={(e) => onChangeParent(index, e)}
                          name="gender"
                        />
                        <label className="form-check-label" htmlFor={`unspecified${index}`}>
                          Не указан
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id={`male${index}`}
                          value={`male${index}`}
                          checked={parent.gender === `male${index}`}
                          onChange={(e) => onChangeParent(index, e)}
                          name="gender"
                        />
                        <label className="form-check-label" htmlFor={`male${index}`}>
                          Мужской
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id={`female${index}`}
                          value={`female${index}`}
                          checked={parent.gender === `female${index}`}
                          onChange={(e) => onChangeParent(index, e)}
                          name="gender"
                        />
                        <label className="form-check-label" htmlFor={`female${index}`}>
                          Женский
                        </label>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          );
        })}
        <div className="d-grid gap-2">
          <button id="btn-card" type="button" className="d-flex p-3 " onClick={addParent}>
            <span className="material-icons">add</span>
            Добавить представителя
          </button>
        </div>
      </Accordion>
    </div>
  );
};
export default DynamicForms;
