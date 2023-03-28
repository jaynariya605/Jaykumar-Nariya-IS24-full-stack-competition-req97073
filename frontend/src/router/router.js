import { createBrowserRouter } from "react-router-dom";
import ProductListPage  from '../components/Product/ProductListPage ';
import EditPage from '../components/Edit/EditPage';
import AddPage from '../components/Add/AddPage';
import ApiDoc from "../components/ApiDoc/ApiDoc";
import Health from "../components/Health"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Health component={ProductListPage}/>,
    },{
      path: "/edit/:id",
      element:<Health component={EditPage}/>
    },{
      path: "/add",
      element:<Health component={AddPage}/>
    },{
      path: "/api/api-doc",
      element: <Health component={ApiDoc}/>
    }
  ]);


export default router