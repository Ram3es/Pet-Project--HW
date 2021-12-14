import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import { Modal } from "../../../../shared/components";
import "./index.scss";
import { generateId } from "../../../../shared/utils";

const ModalForm = ({ addDish, showModal, isOpenModal }) => {
  
  const handlerSubmit = ({ strMeal, strInstructions }) => {
    const idMeal = generateId();
    const strMealThumb =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkbpFIYZ78IroEzBsQ3ftnN8GpVmqUaRhuw&usqp=CAU";

    addDish((state) => state.concat([{ strMeal, strInstructions, idMeal: idMeal, strMealThumb }]));
    showModal(false);
  };
  return isOpenModal ? (
    <Modal>
      <div className="wrapper">
        <Formik initialValues={{ strMeal: "", strInstructions: "" }} onSubmit={handlerSubmit}>
          {({ handleChange, values: { strMeal, strInstructions } }) => (
            <Form>
              <div>
                <input
                  className="input"
                  type="text"
                  name="strMeal"
                  placeholder="
           Name of dishes ..."
                  value={strMeal}
                  onChange={handleChange}
                />
              </div>
              <textarea
                className="textarea"
                placeholder="Recepies ..."
                name="strInstructions"
                value={strInstructions}
                onChange={handleChange}
              />

              <Button type="submit" variant="contained" color="primary" style={{ margin: "15px 15px" }}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  ) : null;
};

export default ModalForm;
