import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";


function FormControl({ formControls, formData, setFormData, onSubmit, buttonText }) {

  function renderInputByComponentType(control) {
     let element = '';
    switch (control.type) {
      case 'input':
        element = (
          <Input
            type={control.type}
            placeholder={control.placeholder || ''}
            value={formData[control.label] || ''}
            onChange={(e) =>
              setFormData({
                ...formData,
                [control.label]: e.target.value,
              })
            }
          />
        )
        break;
      default:
        element = (
          <Input
            type={control.type}
            id={control.label}
            placeholder={control.placeholder || ''}
            value={formData[control.label] || ''}
            onChange={(e) =>
              setFormData({
                ...formData,
                [control.label]: e.target.value,
              })
            }
          />
        )
      break;
    }

    return element;
  }
  return (
    <form className="flex flex-col gap-4">
      { formControls && formControls.map((control, index) => (
          <div key={index} className="flex flex-col gap-3">
            <Label
              htmlFor={control.label}
              className="flex mb-2 font-semibold text-gray-700"
            >
              {`${control.label}:`}
              {renderInputByComponentType(control)}
            </Label>
          </div>
        ))
      }
      <Button
        type="submit"
        onClick={onSubmit}
      >
        {buttonText}
      </Button>
    </form>
   );
}

export default FormControl;