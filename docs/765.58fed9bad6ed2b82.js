"use strict";(self.webpackChunkdemoProject=self.webpackChunkdemoProject||[]).push([[765],{765:(st,Z,a)=>{a.r(Z),a.d(Z,{AdminModule:()=>ct});var s=a(6814),m=a(5286),t=a(9468);const C=function(){return["/home"]},x=function(){return["/admin/products"]},T=function(){return["/admin/categories"]},y=function(){return["/admin/customers"]},A=function(){return["/admin/orders"]};let b=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-layout"]],decls:23,vars:10,consts:[[1,"navbar"],[1,"logo"],["href","#"],[1,"menu"],[3,"routerLink"],[1,"container"]],template:function(o,i){1&o&&(t.TgZ(0,"nav")(1,"div",0)(2,"div",1)(3,"a",2),t._uU(4,"My Store"),t.qZA()(),t.TgZ(5,"ul",3)(6,"li")(7,"a",4),t._uU(8,"Home Page"),t.qZA()(),t.TgZ(9,"li")(10,"a",4),t._uU(11,"Products"),t.qZA()(),t.TgZ(12,"li")(13,"a",4),t._uU(14,"Categories"),t.qZA()(),t.TgZ(15,"li")(16,"a",4),t._uU(17,"Customer List"),t.qZA()(),t.TgZ(18,"li")(19,"a",4),t._uU(20,"Order List"),t.qZA()()()()(),t.TgZ(21,"div",5),t._UZ(22,"router-outlet"),t.qZA()),2&o&&(t.xp6(7),t.Q6J("routerLink",t.DdM(5,C)),t.xp6(3),t.Q6J("routerLink",t.DdM(6,x)),t.xp6(3),t.Q6J("routerLink",t.DdM(7,T)),t.xp6(3),t.Q6J("routerLink",t.DdM(8,y)),t.xp6(3),t.Q6J("routerLink",t.DdM(9,A)))},dependencies:[m.lC,m.rH],styles:["nav[_ngcontent-%COMP%]{position:fixed;z-index:999;left:0;top:0;width:100%;height:75px;background:#2980b9;box-shadow:0 5px 10px #0000001a}nav[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:100%;max-width:90%;background:#2980b9;margin:auto}nav[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-size:27px;font-weight:600;text-decoration:none}nav[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{display:flex}.navbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;margin:0 15px}.navbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-size:17px;font-weight:500;text-decoration:none}"]})}return n})();var v=a(5177),p=a(7398);class O{constructor(){this.productId=0,this.productSku="",this.productName="",this.productPrice=0,this.productShortName="",this.productDescription="",this.createdDate=new Date,this.deliveryTimeSpan="",this.categoryId=0,this.productImageUrl="",this.userId=0}}var g=a(3596),d=a(95);const M=["productForm"];function q(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",13)(1,"div",3),t._UZ(2,"img",14),t.TgZ(3,"div",11)(4,"h4",15),t._uU(5),t.qZA(),t.TgZ(6,"p",16),t._uU(7),t.qZA(),t.TgZ(8,"p",17),t._uU(9),t.ALo(10,"currency"),t.qZA(),t.TgZ(11,"a",18),t.NdJ("click",function(){const r=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.onEdit(r))}),t._uU(12,"Edit"),t.qZA(),t.TgZ(13,"a",19),t.NdJ("click",function(){const r=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.onDelete(r))}),t._uU(14,"Delete"),t.qZA()()()()}if(2&n){const e=c.$implicit,o=t.oxw(2);t.xp6(2),t.Q6J("ngClass",o.isSidePanelVisible?"card-img-top-small":"card-img-top-full")("src",e.productImageUrl,t.LSH)("alt",e.productShortName),t.xp6(3),t.Oqu(e.productName),t.xp6(2),t.Oqu(e.categoryName),t.xp6(2),t.Oqu(t.lcZ(10,6,e.productPrice))}}function U(n,c){if(1&n&&(t.TgZ(0,"div")(1,"div",11)(2,"div",1),t.YNc(3,q,15,8,"div",12),t.qZA()()()),2&n){const e=c.ngIf;t.xp6(3),t.Q6J("ngForOf",e)}}function P(n,c){if(1&n&&(t.TgZ(0,"option",37),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.Q6J("value",e.categoryId),t.xp6(1),t.hij(" ",e.categoryName," ")}}function I(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"button",34),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.onSave())}),t._uU(1,"Create Product"),t.qZA()}}function N(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"button",38),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.onUpdate())}),t._uU(1,"Update Product"),t.qZA()}}function w(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",20)(1,"div",3)(2,"div",4)(3,"div",1)(4,"div",5),t._uU(5,"New Product"),t.qZA(),t.TgZ(6,"div",6)(7,"button",7),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.closeSidePanel())}),t._uU(8,"Close"),t.qZA()()()(),t.TgZ(9,"form",11,21)(11,"div",1)(12,"div",5)(13,"label",22),t._uU(14,"SKU"),t.qZA(),t.TgZ(15,"input",23),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.productObject.productSku=i)}),t.qZA()(),t.TgZ(16,"div",5)(17,"label",22),t._uU(18,"Name"),t.qZA(),t.TgZ(19,"input",24),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.productObject.productName=i)}),t.qZA()()(),t.TgZ(20,"div",1)(21,"div",5)(22,"label",22),t._uU(23,"Short Name"),t.qZA(),t.TgZ(24,"input",25),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.productObject.productShortName=i)}),t.qZA()(),t.TgZ(25,"div",5)(26,"label",22),t._uU(27,"Price"),t.qZA(),t.TgZ(28,"input",26),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.productObject.productPrice=i)}),t.qZA()()(),t.TgZ(29,"div",1)(30,"div",5)(31,"label",22),t._uU(32,"Category"),t.qZA(),t.TgZ(33,"select",27),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.productObject.categoryId=i)}),t.YNc(34,P,2,2,"option",28),t.qZA()(),t.TgZ(35,"div",5)(36,"label",22),t._uU(37,"Delivery Time Span"),t.qZA(),t.TgZ(38,"input",29),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.productObject.deliveryTimeSpan=i)}),t.qZA()()(),t.TgZ(39,"div",1)(40,"div",30)(41,"label",22),t._uU(42,"Image URL"),t.qZA(),t.TgZ(43,"input",31),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.productObject.productImageUrl=i)}),t.qZA()()(),t.TgZ(44,"div",1)(45,"div",30)(46,"label",22),t._uU(47,"Product Description"),t.qZA(),t.TgZ(48,"textarea",32),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.productObject.productDescription=i)}),t.qZA()()(),t.TgZ(49,"div",33)(50,"div",5)(51,"button",34),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onReset())}),t._uU(52,"Reset"),t.qZA()(),t.TgZ(53,"div",5),t.YNc(54,I,2,0,"button",35),t.YNc(55,N,2,0,"button",36),t.qZA()()()()()}if(2&n){const e=t.oxw();t.xp6(15),t.Q6J("ngModel",e.productObject.productSku),t.xp6(4),t.Q6J("ngModel",e.productObject.productName),t.xp6(5),t.Q6J("ngModel",e.productObject.productShortName),t.xp6(4),t.Q6J("ngModel",e.productObject.productPrice),t.xp6(5),t.Q6J("ngModel",e.productObject.categoryId),t.xp6(1),t.Q6J("ngForOf",e.categoryList),t.xp6(4),t.Q6J("ngModel",e.productObject.deliveryTimeSpan),t.xp6(5),t.Q6J("ngModel",e.productObject.productImageUrl),t.xp6(5),t.Q6J("ngModel",e.productObject.productDescription),t.xp6(6),t.Q6J("ngIf",0==e.productObject.productId),t.xp6(1),t.Q6J("ngIf",0!==e.productObject.productId)}}function J(n,c){1&n&&(t.TgZ(0,"div",39),t._UZ(1,"div",40),t.qZA())}let S=(()=>{class n{constructor(e){this.productService=e,this.productForm={},this.isSidePanelVisible=!1,this.productObject=new O,this.categoryList=[]}ngOnInit(){this.getProducts(),this.getAllCategory()}getAllCategory(){this.productService.getCategory().pipe((0,v.g)(300)).subscribe(e=>{this.categoryList=e.data})}getProducts(){this.productList$=this.productService.getProduct().pipe((0,v.g)(300),(0,p.U)(e=>e.data))}onSave(){this.productService.saveProduct(this.productObject).subscribe(e=>{e.result?(alert("Product Created"),this.getProducts(),this.onReset()):alert(e.message)})}onEdit(e){this.productObject=e,this.openSidePanel()}onUpdate(){this.productService.updateProduct(this.productObject).subscribe(e=>{e.result?(alert("Product Updated"),this.getProducts(),this.onReset()):alert(e.message)})}onDelete(e){confirm("Are you sure want to delete this product?")&&this.productService.deleteProduct(e.productId).subscribe(i=>{i.result?(alert("Product Deleted"),this.getProducts()):alert(i.message)})}onReset(){this.productForm.reset()}openSidePanel(){this.isSidePanelVisible=!0}closeSidePanel(){this.isSidePanelVisible=!1,this.onReset()}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(g.M))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-products"]],viewQuery:function(o,i){if(1&o&&t.Gf(M,5),2&o){let r;t.iGM(r=t.CRH())&&(i.productForm=r.first)}},decls:16,vars:6,consts:[[1,"product-list"],[1,"row"],[3,"ngClass"],[1,"card"],[1,"card-header","bg-primary"],[1,"col-6"],[1,"col-6","text-end"],[1,"btn","btn-sm","btn-success",3,"click"],[4,"ngIf","ngIfElse"],["class","col-4",4,"ngIf"],["loadingTmpl",""],[1,"card-body"],["class","col-3",4,"ngFor","ngForOf"],[1,"col-3"],["fill","",3,"ngClass","src","alt"],[1,"card-title"],[1,"card-text"],[1,"card-price"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-danger","mx-2",3,"click"],[1,"col-4"],["productForm","ngForm"],["for",""],["type","text","name","productSku","id","",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","productName","id","",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","productShortName","id","",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","productPrice","id","",1,"form-control",3,"ngModel","ngModelChange"],["name","categoryId","onfocus","this.size=10;","onblur","this.size=1;","onchange","this.size=1; this.blur();",1,"form-select",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","text","name","deliveryTimeSpan","id","",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-12"],["type","text","name","productImageUrl","id","",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","productDescription","id","",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","mt-3"],["type","button",1,"btn","btn-success",3,"click"],["type","button","class","btn btn-success",3,"click",4,"ngIf"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],[3,"value"],["type","button",1,"btn","btn-primary",3,"click"],["id","spinner",1,"show","w-100","vh-100","bg-white","position-fixed","translate-middle","top-50","start-50","d-flex","align-items-center","justify-content-center"],["role","status",1,"spinner-grow","text-primary"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",1)(6,"div",5),t._uU(7,"Product List"),t.qZA(),t.TgZ(8,"div",6)(9,"button",7),t.NdJ("click",function(){return i.openSidePanel()}),t._uU(10,"New"),t.qZA()()()(),t.YNc(11,U,4,1,"div",8),t.ALo(12,"async"),t.qZA()(),t.YNc(13,w,56,11,"div",9),t.qZA()(),t.YNc(14,J,2,0,"ng-template",null,10,t.W1O)),2&o){const r=t.MAs(15);t.xp6(2),t.Q6J("ngClass",i.isSidePanelVisible?"col-8":"col-12"),t.xp6(9),t.Q6J("ngIf",t.lcZ(12,4,i.productList$))("ngIfElse",r),t.xp6(2),t.Q6J("ngIf",i.isSidePanelVisible)}},dependencies:[s.mk,s.sg,s.O5,d._Y,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.JL,d.On,d.F,s.Ov,s.H9],styles:[".product-list[_ngcontent-%COMP%]{margin-top:100px}.card-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin:15px 0}.card-img-top-full[_ngcontent-%COMP%]{width:100%;height:220px}.card-img-top-small[_ngcontent-%COMP%]{width:100%;height:150px}"]})}return n})();class D{constructor(){this.categoryId=0,this.categoryName="",this.parentCategoryId=0,this.userId=0}}const F=["categoryForm"];function k(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td",15),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"button",16),t.NdJ("click",function(){const r=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.onDelete(r.categoryId))}),t._uU(7," Delete "),t.qZA()()()}if(2&n){const e=c.$implicit;t.xp6(2),t.Oqu(e.categoryId),t.xp6(2),t.Oqu(e.categoryName)}}function j(n,c){if(1&n&&(t.TgZ(0,"option",28),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.Q6J("value",e.categoryId),t.xp6(1),t.hij(" ",e.categoryName," ")}}function Q(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",17)(1,"div",5)(2,"div",6)(3,"div",3)(4,"div",7),t._uU(5,"New Category"),t.qZA(),t.TgZ(6,"div",8)(7,"button",9),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.closeSidePanel())}),t._uU(8,"Close"),t.qZA()()()(),t.TgZ(9,"form",18,19)(11,"div",3)(12,"div",20)(13,"label",21),t._uU(14,"Category Name"),t.qZA(),t.TgZ(15,"input",22),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw(2);return t.KtG(r.categoryObj.categoryName=i)}),t.qZA()()(),t.TgZ(16,"div",3)(17,"div",20)(18,"label",21),t._uU(19,"Category"),t.qZA(),t.TgZ(20,"select",23),t.NdJ("ngModelChange",function(i){t.CHM(e);const r=t.oxw(2);return t.KtG(r.categoryObj.parentCategoryId=i)}),t.TgZ(21,"option",24),t._uU(22,"No parent category"),t.qZA(),t.YNc(23,j,2,2,"option",25),t.qZA()()(),t.TgZ(24,"div",26)(25,"div",7)(26,"button",27),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.onReset())}),t._uU(27,"Reset"),t.qZA()(),t.TgZ(28,"div",7)(29,"button",27),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.onSave())}),t._uU(30,"Create Category"),t.qZA()()()()()()}if(2&n){const e=t.oxw().ngIf,o=t.oxw();t.xp6(15),t.Q6J("ngModel",o.categoryObj.categoryName),t.xp6(5),t.Q6J("ngModel",o.categoryObj.parentCategoryId),t.xp6(1),t.Q6J("value",0),t.xp6(2),t.Q6J("ngForOf",e)}}function L(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"div",3)(6,"div",7),t._uU(7,"Category List"),t.qZA(),t.TgZ(8,"div",8)(9,"button",9),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.openSidePanel())}),t._uU(10,"New"),t.qZA()()()(),t.TgZ(11,"div",10)(12,"table",11)(13,"thead")(14,"tr")(15,"th"),t._uU(16,"CategotyId"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Name"),t.qZA(),t.TgZ(19,"th",12),t._uU(20,"Action"),t.qZA()()(),t.TgZ(21,"tbody"),t.YNc(22,k,8,2,"tr",13),t.qZA()()()()(),t.YNc(23,Q,31,4,"div",14),t.qZA()()}if(2&n){const e=c.ngIf,o=t.oxw();t.xp6(2),t.Q6J("ngClass",o.isSidePanelVisible?"col-8":"col-12"),t.xp6(20),t.Q6J("ngForOf",e),t.xp6(1),t.Q6J("ngIf",o.isSidePanelVisible)}}function Y(n,c){1&n&&(t.TgZ(0,"div",29),t._UZ(1,"div",30),t.qZA())}let H=(()=>{class n{constructor(e){this.productService=e,this.isSidePanelVisible=!1,this.categoryObj=new D}ngOnInit(){this.getAllCategories()}getAllCategories(){this.category$=this.productService.getCategory().pipe((0,p.U)(e=>e.data),(0,v.g)(300))}onSave(){this.productService.saveCategory(this.categoryObj).subscribe(e=>{e.result?(alert("Category Created"),this.getAllCategories(),this.onReset()):alert(e.message)})}onDelete(e){confirm("Are you sure want to delete?")&&this.productService.deleteCategory(e).subscribe(i=>{i.result?(alert("Category Deleted"),this.getAllCategories()):alert(i.message)})}onReset(){this.categoryForm?.reset()}openSidePanel(){this.isSidePanelVisible=!0}closeSidePanel(){this.isSidePanelVisible=!1,this.onReset()}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(g.M))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-categories"]],viewQuery:function(o,i){if(1&o&&t.Gf(F,5),2&o){let r;t.iGM(r=t.CRH())&&(i.categoryForm=r.first)}},decls:4,vars:4,consts:[["class","categories",4,"ngIf","ngIfElse"],["loadingTmpl",""],[1,"categories"],[1,"row"],[3,"ngClass"],[1,"card"],[1,"card-header","bg-primary"],[1,"col-6"],[1,"col-6","text-end"],[1,"btn","btn-sm","btn-success",3,"click"],[1,"card-body","p-3"],[1,"table"],[1,"w-25"],[4,"ngFor","ngForOf"],["class","col-4",4,"ngIf"],["scope","row"],[1,"btn","btn-md","bg-light","border","m-1","text-danger",3,"click"],[1,"col-4"],[1,"form-group","m-3"],["categoryForm","ngForm"],[1,"col-12"],["for",""],["type","text","name","categoryName","id","",1,"form-control",3,"ngModel","ngModelChange"],["name","parentCategoryId","onfocus","this.size=10;","onblur","this.size=1;","onchange","this.size=1; this.blur();",1,"form-select",3,"ngModel","ngModelChange"],[1,"text-dark",3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"row","mt-3"],["type","button",1,"btn","btn-success",3,"click"],[3,"value"],["id","spinner",1,"show","w-100","vh-100","bg-white","position-fixed","translate-middle","top-50","start-50","d-flex","align-items-center","justify-content-center"],["role","status",1,"spinner-grow","text-primary"]],template:function(o,i){if(1&o&&(t.YNc(0,L,24,3,"div",0),t.ALo(1,"async"),t.YNc(2,Y,2,0,"ng-template",null,1,t.W1O)),2&o){const r=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,i.category$))("ngIfElse",r)}},dependencies:[s.mk,s.sg,s.O5,d._Y,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.JL,d.On,d.F,s.Ov],styles:[".categories[_ngcontent-%COMP%]{margin-top:100px}"]})}return n})();var _=a(9381),E=a(9862);let h=(()=>{class n{constructor(e){this.http=e}getAllCustomers(){return this.http.get(_.s.API_END_POINT+_.s.METHODS.GET_ALL_CUSTOMERS)}getCustomerById(e){return this.http.get(_.s.API_END_POINT+_.s.METHODS.GET_CUSTOMER_BY_ID+e)}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(E.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function G(n,c){if(1&n&&(t.TgZ(0,"tr")(1,"td",11),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA()()),2&n){const e=c.$implicit,o=c.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.mobileNo)}}function K(n,c){if(1&n&&(t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"div",3)(6,"div",7),t._uU(7,"Customer List"),t.qZA()()(),t.TgZ(8,"div",8)(9,"table",9)(10,"thead")(11,"tr")(12,"th"),t._uU(13,"No."),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Name"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Phone Number"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,G,7,3,"tr",10),t.qZA()()()()()()()),2&n){const e=c.ngIf;t.xp6(19),t.Q6J("ngForOf",e)}}function $(n,c){1&n&&(t.TgZ(0,"div",12),t._UZ(1,"div",13),t.qZA())}let R=(()=>{class n{constructor(e){this.customerService=e}ngOnInit(){this.getAllCustomers()}getAllCustomers(){this.customer$=this.customerService.getAllCustomers().pipe((0,p.U)(e=>e.data))}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(h))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-customer"]],decls:4,vars:4,consts:[["class","customers",4,"ngIf","ngIfElse"],["loadingTmpl",""],[1,"customers"],[1,"row"],[1,"col-8","mx-auto"],[1,"card"],[1,"card-header","bg-primary"],[1,"col-6","text-light"],[1,"card-body","p-3"],[1,"table"],[4,"ngFor","ngForOf"],["scope","row"],["id","spinner",1,"show","w-100","vh-100","bg-white","position-fixed","translate-middle","top-50","start-50","d-flex","align-items-center","justify-content-center"],["role","status",1,"spinner-grow","text-primary"]],template:function(o,i){if(1&o&&(t.YNc(0,K,20,1,"div",0),t.ALo(1,"async"),t.YNc(2,$,2,0,"ng-template",null,1,t.W1O)),2&o){const r=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,i.customer$))("ngIfElse",r)}},dependencies:[s.sg,s.O5,s.Ov],styles:[".customers[_ngcontent-%COMP%]{margin-top:100px}"]})}return n})();var l=a(7004),f=a(2296);function z(n,c){if(1&n&&(t.TgZ(0,"div",1)(1,"div",4),t._uU(2),t.qZA(),t.TgZ(3,"div",4),t._uU(4),t.qZA()()),2&n){const e=c.ngIf;t.xp6(2),t.hij("Customer Name: ",e.name,""),t.xp6(2),t.hij("Phone number: ",e.mobileNo,"")}}function V(n,c){if(1&n&&(t.TgZ(0,"tr")(1,"th",12)(2,"div",15),t._UZ(3,"img",16),t.qZA()(),t.TgZ(4,"td")(5,"p",14),t._uU(6),t.qZA()(),t.TgZ(7,"td")(8,"p",14),t._uU(9),t.ALo(10,"currency"),t.qZA()(),t.TgZ(11,"td")(12,"p",13),t._uU(13),t.qZA()(),t.TgZ(14,"td")(15,"p",14),t._uU(16),t.ALo(17,"currency"),t.qZA()()()),2&n){const e=c.$implicit;t.xp6(3),t.Q6J("src",e.productImageUrl,t.LSH),t.xp6(3),t.Oqu(e.productName),t.xp6(3),t.Oqu(t.lcZ(10,5,e.productPrice)),t.xp6(4),t.Oqu(e.quantity),t.xp6(3),t.Oqu(t.lcZ(17,7,e.quantity*e.productPrice))}}function B(n,c){if(1&n&&(t.TgZ(0,"div")(1,"table",9)(2,"thead")(3,"tr")(4,"th",10),t._uU(5,"Products"),t.qZA(),t.TgZ(6,"th",10),t._uU(7,"Name"),t.qZA(),t.TgZ(8,"th",10),t._uU(9,"Price"),t.qZA(),t.TgZ(10,"th",10),t._uU(11,"Quantity"),t.qZA(),t.TgZ(12,"th",10),t._uU(13,"Total"),t.qZA()()(),t.TgZ(14,"tbody"),t.YNc(15,V,18,9,"tr",11),t.TgZ(16,"tr"),t._UZ(17,"th",12)(18,"td")(19,"td"),t.TgZ(20,"td")(21,"p",13),t._uU(22,"Discount"),t.qZA()(),t.TgZ(23,"td")(24,"p",14),t._uU(25),t.ALo(26,"percent"),t.qZA()()(),t.TgZ(27,"tr"),t._UZ(28,"th",12)(29,"td")(30,"td"),t.TgZ(31,"td")(32,"p",13),t._uU(33,"Total"),t.qZA()(),t.TgZ(34,"td")(35,"p",14),t._uU(36),t.ALo(37,"currency"),t.qZA()()()()()()),2&n){const e=c.ngIf,o=t.oxw();t.xp6(15),t.Q6J("ngForOf",e),t.xp6(10),t.Oqu(t.lcZ(26,3,o.data.discount)),t.xp6(11),t.Oqu(t.lcZ(37,5,o.data.totalInvoiceAmount))}}function W(n,c){1&n&&(t.TgZ(0,"div",17),t._UZ(1,"div",18),t.qZA())}let X=(()=>{class n{constructor(e,o,i){this.data=e,this.productService=o,this.customerService=i}ngOnInit(){this.saleDetail(),this.getCustomerById()}saleDetail(){this.saleDetail$=this.productService.openSaleBySaleId(this.data.saleId).pipe((0,p.U)(e=>e.data))}getCustomerById(){this.customer$=this.customerService.getCustomerById(this.data.custId).pipe((0,p.U)(e=>e.data))}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(l.WI),t.Y36(g.M),t.Y36(h))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin-order-detail"]],decls:26,vars:15,consts:[["mat-dialog-title",""],[1,"row"],[1,"col-12"],["class","row",4,"ngIf"],[1,"col-6"],[4,"ngIf","ngIfElse"],["align","end"],["mat-button","","mat-dialog-close","","cdkFocusInitial",""],["loadingTmpl",""],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[1,"mb-0","mt-4","align-content-center"],[1,"mb-0","mt-4"],[1,"d-flex","align-items-center"],["alt","",1,"img-fluid","me-5","rounded-circle",2,"width","80px","height","80px",3,"src"],["id","spinner",1,"show","w-100","vh-100","bg-white","position-fixed","translate-middle","top-50","start-50","d-flex","align-items-center","justify-content-center"],["role","status",1,"spinner-grow","text-primary"]],template:function(o,i){if(1&o&&(t.TgZ(0,"h2",0),t._uU(1,"Order Detail"),t.qZA(),t.TgZ(2,"mat-dialog-content")(3,"div",1)(4,"div",2),t._uU(5),t.ALo(6,"date"),t.qZA()(),t.YNc(7,z,5,2,"div",3),t.ALo(8,"async"),t.TgZ(9,"div",1)(10,"div",4),t._uU(11),t.qZA(),t.TgZ(12,"div",4),t._uU(13),t.qZA()(),t.TgZ(14,"div",1)(15,"div",4),t._uU(16),t.qZA(),t.TgZ(17,"div",4),t._uU(18),t.qZA()(),t.YNc(19,B,38,7,"div",5),t.ALo(20,"async"),t.qZA(),t.TgZ(21,"mat-dialog-actions",6)(22,"button",7),t._uU(23,"Close"),t.qZA()(),t.YNc(24,W,2,0,"ng-template",null,8,t.W1O)),2&o){const r=t.MAs(25);t.xp6(5),t.hij("Order date: ",t.xi3(6,8,i.data.saleDate,"medium"),""),t.xp6(2),t.Q6J("ngIf",t.lcZ(8,11,i.customer$)),t.xp6(4),t.hij("Address 1: ",i.data.deliveryAddress1,""),t.xp6(2),t.hij("City: ",i.data.deliveryCity,""),t.xp6(3),t.hij("Address 2: ",i.data.deliveryAddress2,""),t.xp6(2),t.hij("Lanmark: ",i.data.deliveryLandMark,""),t.xp6(1),t.Q6J("ngIf",t.lcZ(20,13,i.saleDetail$))("ngIfElse",r)}},dependencies:[s.sg,s.O5,l.ZT,l.uh,l.xY,l.H8,f.lW,s.Ov,s.Zx,s.H9,s.uU]})}return n})();function tt(n,c){1&n&&(t.TgZ(0,"p",16),t._uU(1,"Canceled"),t.qZA())}function et(n,c){1&n&&(t.TgZ(0,"p",17),t._uU(1,"On Delivery"),t.qZA())}function nt(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"th",11)(2,"p",12),t._uU(3),t.qZA()(),t.TgZ(4,"td")(5,"p",12),t._uU(6),t.ALo(7,"date"),t.qZA()(),t.TgZ(8,"td")(9,"p",12),t._uU(10),t.ALo(11,"currency"),t.qZA()(),t.TgZ(12,"td"),t.YNc(13,tt,2,0,"p",13),t.YNc(14,et,2,0,"p",14),t.qZA(),t.TgZ(15,"td")(16,"button",15),t.NdJ("click",function(){const r=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.openOrderDetailDialog(r))}),t._uU(17," View "),t.qZA()()()}if(2&n){const e=c.$implicit;t.xp6(3),t.Oqu(e.saleId),t.xp6(3),t.Oqu(t.xi3(7,5,e.saleDate,"medium")),t.xp6(4),t.Oqu(t.lcZ(11,8,e.totalInvoiceAmount)),t.xp6(3),t.Q6J("ngIf",e.isCanceled),t.xp6(1),t.Q6J("ngIf",!e.isCanceled)}}function ot(n,c){if(1&n&&(t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6),t._uU(5,"Order List"),t.qZA()(),t.TgZ(6,"div",7)(7,"table",8)(8,"thead")(9,"tr")(10,"th",9),t._uU(11,"Order ID"),t.qZA(),t.TgZ(12,"th",9),t._uU(13,"Order Date"),t.qZA(),t.TgZ(14,"th",9),t._uU(15,"Total Invoicement"),t.qZA(),t.TgZ(16,"th",9),t._uU(17,"Status"),t.qZA(),t.TgZ(18,"th",9),t._uU(19,"Handle"),t.qZA()()(),t.TgZ(20,"tbody"),t.YNc(21,nt,18,10,"tr",10),t.qZA()()()()()()),2&n){const e=c.ngIf;t.xp6(21),t.Q6J("ngForOf",e)}}function it(n,c){1&n&&(t.TgZ(0,"div",18),t._UZ(1,"div",19),t.qZA())}const rt=[{path:"",component:b,children:[{path:"products",component:S},{path:"categories",component:H},{path:"customers",component:R},{path:"orders",component:(()=>{class n{constructor(e,o){this.productService=e,this.matDialog=o}ngOnInit(){this.getAllOrders()}getAllOrders(){this.order$=this.productService.getAllSales().pipe((0,p.U)(e=>e.data))}openOrderDetailDialog(e){this.matDialog.open(X,{data:{saleId:e.saleId,custId:e.custId,saleDate:e.saleDate,totalInvoiceAmount:e.totalInvoiceAmount,discount:e.discount,paymentNaration:e.paymentNaration,deliveryAddress1:e.deliveryAddress1,deliveryAddress2:e.deliveryAddress2,deliveryCity:e.deliveryCity,deliveryPinCode:e.deliveryPinCode,deliveryLandMark:e.deliveryLandMark},height:"500px",width:"900px"})}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(g.M),t.Y36(l.uw))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-order"]],decls:4,vars:4,consts:[["class","orders",4,"ngIf","ngIfElse"],["loadingTmpl",""],[1,"orders"],[1,"row"],[1,"card","p-0"],[1,"card-header","bg-primary"],[1,""],[1,"card-body","p-3"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[1,"mb-0","mt-4"],["class","mb-0 mt-4 text-danger",4,"ngIf"],["class","mb-0 mt-4 text-primary",4,"ngIf"],[1,"btn","btn-md","bg-light","border","m-1","text-primary",3,"click"],[1,"mb-0","mt-4","text-danger"],[1,"mb-0","mt-4","text-primary"],["id","spinner",1,"show","w-100","vh-100","bg-white","position-fixed","translate-middle","top-50","start-50","d-flex","align-items-center","justify-content-center"],["role","status",1,"spinner-grow","text-primary"]],template:function(o,i){if(1&o&&(t.YNc(0,ot,22,1,"div",0),t.ALo(1,"async"),t.YNc(2,it,2,0,"ng-template",null,1,t.W1O)),2&o){const r=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,i.order$))("ngIfElse",r)}},dependencies:[s.sg,s.O5,s.Ov,s.H9,s.uU],styles:[".orders[_ngcontent-%COMP%]{margin-top:100px}"]})}return n})()}]}];let ct=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[s.ez,m.Bz.forChild(rt),d.u5,l.Is,f.ot]})}return n})()}}]);