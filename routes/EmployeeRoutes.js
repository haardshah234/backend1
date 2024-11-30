// const express=require("express")
// const employeeController=require("../controller/EmployeeController")
// const router=express.Router();

// router.post("/createEmployee",employeeController.createEmployee);

// module.exports=router;
// router.get("/getEmployee");
// router.put("/updateEnployee");
// router.delete("/deleteEmployee");
const express=require("express")
const employeeController=require("../controller/EmployeeController")
const router=express.Router();

router.post("/createEmployee",employeeController.createEmployee);
router.get("/getEmployees",employeeController.getEmployees);
router.get("/getEmployee/:id",employeeController.getEmployee);
router.delete("/deleteEmployee/:id",employeeController.deleteEmployee);
router.put("/updateEmployee/:id",employeeController.updateEmployee);

module.exports=router;