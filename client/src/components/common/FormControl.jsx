import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";


function FormControl({ formControls, formData, setFormData, onSubmit, buttonText }) {

  const renderInputByComponentType = (control)=> {
     let element = '';
    switch (control.type) {
      case 'input':
        element = (
          <Input
            type={control.name}
            id={control.name}
            placeholder={control.placeholder || ''}
            value={formData[control.name] || ''}
            onChange={(e) =>
              setFormData({
                ...formData,
                [control.name]: e.target.value,
              })
            }
          />
        )
        break;
      default:
        element = (
          <Input
            type={control.name}
            id={control.name}
            placeholder={control.placeholder || ''}
            value={formData[control.name] || ''}
            onChange={(e) =>
              setFormData({
                ...formData,
                [control.name]: e.target.value,
              })
            }
          />
        )
      break;
    }

    return element;
  }
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      { formControls && formControls.map((control, index) => (
          <div key={index} className="flex flex-col">
            <Label
              htmlFor={control.name}
              className="flex mb-2 font-semibold text-gray-700"
            >
              {`${control.label}:`}
            </Label>
              {renderInputByComponentType(control)}
          </div>
        ))
      }
      <Button
        type="submit"
      >
        {buttonText}
      </Button>
    </form>
   );
}

export default FormControl;