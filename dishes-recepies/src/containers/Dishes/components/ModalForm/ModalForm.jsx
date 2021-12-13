
import { Formik, Form } from "formik";
import { TextField, Button } from "@material-ui/core"
import { Modal } from "../../../../shared/components";
import "./index.scss";
const ModalForm = () => {

    const handlerSubmit = (values) =>{
        console.log(values);

    }
  return (
    <Modal>
      <div className="wrapper">
        <Formik 
        initialValues={{dish:"",textArea:""}}
        onSubmit={handlerSubmit}>
            {({handleChange, handleSubmit, values}) => (
        <Form >
           <input 
           type="text"
           name="dish"
           value={values.dish}
           onChange={handleChange} />
           <textarea 
           className="textarea"
           name="textArea"
           value={values.text}
           onChange={handleChange} 
            />
           <Button type="submit"  >Submit</Button>

            </Form>)}
        </Formik>
      </div>
    </Modal>
  );
};

export default ModalForm;
