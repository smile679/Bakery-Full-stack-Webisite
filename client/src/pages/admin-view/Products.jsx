import AdminFoodCard from "@/components/admin-view/AdminFoodCard";
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
import { addNewProduct, deleteProducts, editProducts, fetchProducts } from "@/store/products-slice";
import { CloudUpload, Upload } from "lucide-react";
import { Fragment, use, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

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
  const [edit, setEdit] = useState(null);
  const { imageIsLoading } = useSelector(
    (state) => state.imageUpload
  );
  const { productsList, singleProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function handleEdit(productId) {
    console.log(`Edit clicked for product ${productId}`);
    setIsOpen(true);
    setEdit(productId);

  }

  function handleDelete(productId) {
    console.log(`Delete clicked for product ${productId}`);
    dispatch(deleteProducts(productId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchProducts());
        toast.success("Product deleted successfully");
      } else {
        toast.error("Failed to delete product");
      }
    });
  }

  function onSubmit(e) {
    e.preventDefault();

    edit ? (
      dispatch(editProducts({ ...formData, id: edit })).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchProducts());
        toast.success("Product updated successfully");
        setIsOpen(false);
        setFormData({
          price: "",
          title: "",
        });
        setFile(null);
        setImageFileUrl(null);
        setEdit(null);
      } else {
        toast.error("Failed to update product");
      }
    })
    )
    :
    (
      imageFileUrl ?
    dispatch(addNewProduct({ ...formData, image: imageFileUrl })).then((data) =>{
      if (data?.payload?.success) {
        dispatch(fetchProducts());
        toast.success("Product added successfully");
        setIsOpen(false);
        setFormData({
          price: "",
          title: "",
        });
        setFile(null);
        setImageFileUrl(null);
      }else{
        toast.error("Failed to add product");
      }
    }) : toast.error("Please upload an image first")
    )
    
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
      
  }, [file]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (edit) {
      const productToEdit = productsList.find(product => product._id === edit);
      if (productToEdit) {
        setFormData({
          price: productToEdit.price,
          title: productToEdit.title,
        });
      }
    }
  }, [edit]);

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Products</CardTitle>
          <Separator className="mt-5" />
        </CardHeader>
        <CardContent className="w-full flex flex-col gap-4">
          <div className="w-full flex max-sm:flex-col-reverse justify-between items-center">
            <h3>Total Products: {productsList.length}</h3>
            <Button
              className='max-sm:mb-4'
             onClick={() => setIsOpen(true)}>Add Product</Button>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-5 overflow-hidden">
            {
              productsList && productsList.length > 0 ?
              productsList.map(product=>
                <AdminFoodCard
                  key={product._id}
                  product={product}
                  btnText="Edit"
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              ) : null
            }
        </div>
        </CardContent>
      </Card>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="px-5">
          <SheetHeader>
            <CardTitle className="text-lg mb-2">{edit ? "Edit Product" : "Add New Product"}</CardTitle>
            <Separator />
          </SheetHeader>
          {
            !edit && (
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
            )
          }
          <div>
            <FormControl
              formControls={formControls}
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
              buttonText={`${edit ? "Update Product" : "Add Product"}`}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default Products;
