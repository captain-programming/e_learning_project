const { Router } = require("express");
const { createBranch, allBranch, deleteBranch, updateBranch, singleBranchDetails } = require("../controllers/branch");

const branchRouter = Router();

branchRouter.post("/create", createBranch);
branchRouter.get("/all-branch", allBranch);
branchRouter.delete("/delete/:id", deleteBranch);
branchRouter.patch("/update/:id", updateBranch);
branchRouter.get("/single-branch-details", singleBranchDetails);

module.exports = branchRouter;