import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import bakeryLogo from "../../assets/backery-logo.png";

function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <section className="min-h-screen flex max-sm:flex-col p-4 gap-3">
      <div className="max-w-sm h-full">
        <Card className="w-full mb-4">
          <CardHeader>
            <CardTitle className="w-full flex items-center justify-center text-2xl text-muted-foreground">
              <img src={bakeryLogo} alt="Bakery Logo" className="w-25 h-25"/>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              className={`w-full mb-3 text-muted-foreground text-xl
                ${location.pathname === '/admin/dashboard' ? 'bg-foreground/10' : ''}`}
              onClick={()=>navigate('/admin/dashboard')}
            >
              Dashboard
            </Button>
            <Button
              variant="outline"
              className={`w-full mb-3 text-muted-foreground text-xl
                ${location.pathname === '/admin/products' ? 'bg-foreground/10' : ''}`}
              onClick={()=>navigate('/admin/products')}
            >
              Products
            </Button>
            <Button
              variant="outline"
              className={`w-full mb-3 text-muted-foreground text-xl
                ${location.pathname === '/admin/orders' ? 'bg-foreground/10' : ''}`}
              onClick={()=>navigate('/admin/orders')}
            >
              Orders
            </Button>
            <Button
              variant="outline"
              className={`w-full mb-3 text-muted-foreground text-xl
                ${location.pathname === '/admin/users' ? 'bg-foreground/10' : ''}`}
              onClick={()=>navigate('/admin/users')}
            >
              Users
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="h-full overflow-y-auto">
        <Outlet />
      </div>
    </section>
  );
}

export default AdminLayout;