import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  deleteCartItem,
  fetchCartItems,
  updateCartItem,
} from "@/store/cart-slice";
import { MoveRight, Trash } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  function handleDelete(productId) {
    dispatch(deleteCartItem({ userId: user?.id, productId })).then((data) => {
      if (data.payload?.success) {
        toast.error("item removed!");
        dispatch(fetchCartItems({ userId: user?.id }));
      }
    });
  }

  function handleQuantity({ productId, payload, quantity }) {
    if (payload === "minus" && quantity <= 1) return;
    if (payload === "plus") {
      dispatch(
        updateCartItem({ userId: user?.id, productId, quantity: quantity + 1 })
      ).then((data) => {
        if (data.payload?.success) {
          dispatch(fetchCartItems({ userId: user?.id }));
        }
      });
    } else {
      dispatch(
        updateCartItem({ userId: user?.id, productId, quantity: quantity - 1 })
      ).then((data) => {
        if (data.payload?.success) {
          dispatch(fetchCartItems({ userId: user?.id }));
        }
      });
    }
  }

  useEffect(() => {
    dispatch(fetchCartItems({ userId: user?.id }));
  }, [dispatch]);

  return (
    <section className="w-full min-h-screen py-15 px-2">
      <h1 className="w-full text-3xl font-bold font-sansita-swashed mt-10 text-center">
        Your Cart
      </h1>
      <div className="max-w-6xl mx-auto flex max-md:flex-col py-10 gap-5">
        <div className="flex-2 rounded-md">
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead className="text-center">Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="sr-only">Delete</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="">
                  {cartItems &&
                    cartItems.map((product, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="font-semibold flex max-md:flex-col items-center gap-2 w-10 ml-5">
                            <img src={product.image} />
                            <div>
                              <h3>{product.title}</h3>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          ${product.price}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="outline"
                              className="px-1 py-0 gap-0 h-5"
                              onClick={() =>
                                handleQuantity({
                                  productId: product.productId,
                                  payload: "minus",
                                  quantity: product?.quantity,
                                })
                              }
                            >
                              -
                            </Button>
                            <h3>{product.quantity}</h3>
                            <Button
                              variant="outline"
                              className="px-1 py-0 gap-0 h-5"
                              onClick={() =>
                                handleQuantity({
                                  productId: product.productId,
                                  payload: "plus",
                                  quantity: product?.quantity,
                                })
                              }
                            >
                              +
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            onClick={() => handleDelete(product.productId)}
                          >
                            <Trash />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                  <TableRow className="bg-gray-950">
                    <TableCell colSpan={3} className="text-white">
                      Total
                    </TableCell>
                    <TableCell className="text-white">${totalPrice}</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1 w-full max-w-3xl">
          <Card>
            <CardHeader>
              <h2 className="flex felx-col font-semibold">Order Summary</h2>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="w-full flex flex-col gap-y-5">
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-muted-foreground font-semibold">
                    Subtotal
                  </h3>
                  <p className="text-muted-foreground">${totalPrice}</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-muted-foreground font-semibold">
                    Shopping
                  </h3>
                  <p className="text-muted-foreground">Free</p>
                </div>
                <div className="w-full flex items-center">
                  <h3 className="text-muted-foreground font-semibold">
                    Add Coupon Code
                  </h3>
                  <MoveRight />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">CheckOut</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Cart;
