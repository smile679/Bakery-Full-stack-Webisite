import FormControl from "@/components/common/FormControl";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Spinner } from "@/components/ui/spinner";
import { handleImageUpload } from "@/store/admin/image-upload-slice";
import { CloudUpload, Upload } from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [formData, setFormData] = useState({
    price: "",
    title: "",
  });
  const [imageFileUrl, setImageFileUrl] = useState(null);

  const formControls = [
    {
      type: "input",
      label: "Price",
      name: "price",
    },
    {
      type: "input",
      label: "Title",
      name: "title",
    },
  ];
  const dispatch = useDispatch();
  const { imageIsLoading, imagesData } = useSelector(
    (state) => state.imageUpload
  );

  function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  }

  const handleOnDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleOnDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      setFile(files[0]);
      e.dataTransfer.clearData();
    }
    setIsDragging(false);
  };

  const handleRemoveFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current = "";
    }
  };

  useEffect(() => {
    if (file)
      dispatch(handleImageUpload(file)).then((data) =>{
        if (data?.payload?.success) {
          setImageFileUrl(data?.payload?.data?.secure_url);
        }
      });
      console.log(imageFileUrl);
      
  }, [file]);
  

  return (
    <Fragment>
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg">Products</CardTitle>
          <Separator className="mt-5" />
        </CardHeader>
        <CardContent className="flex justify-between items-center gap-4">
          <h3>Total Products: 0</h3>
          <Button onClick={() => setIsOpen(true)}>Add Product</Button>
        </CardContent>
      </Card>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="px-5">
          <SheetHeader>
            <CardTitle className="text-lg mb-2">Add New Product</CardTitle>
            <Separator />
          </SheetHeader>
          <div
            onDrop={handleOnDrop}
            onDragOver={handleOnDragOver}
            onDragLeave={handleOnDragLeave}
            className={`border-2 border-dashed rounded-xl ${
              isDragging ? "bg-green-100 border-green-400" : "border-muted"
            }`}
          >
            {imageIsLoading ? (
              <div className="w-full h-32 flex justify-center items-center">
                <Spinner />
              </div>
            ) : (
              !file ?
              <Label className="h-32 flex flex-col justify-center items-center cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <CloudUpload
                  size={35}
                  strokeWidth={2.5}
                  className="text-muted-foreground"
                />
                <span>Click or Drag to upload product image</span>
              </Label> :
              <div className="w-full h-32 flex justify-evenly items-center text-muted-foreground">
                <span>{file.name}</span>
                <Button variant="outline"
                  className="h-8 w-8 text-red-500 flex justify-center items-center rounded-full p-0"
                  onClick={handleRemoveFile}>
                  X
                </Button>
              </div>
            )}
          </div>
          <div>
            <FormControl
              formControls={formControls}
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
              buttonText={"Add Product"}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default Products;
