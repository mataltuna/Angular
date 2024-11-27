import{a as T,b as we}from"./chunk-DYBMCYVM.js";import{c as me,d as se,e as le,n as pe,o as ue,p as ce,u as ee,v as de}from"./chunk-RZD7PGSG.js";import{a as fe}from"./chunk-YWYD2KRV.js";import{A as H,B as J,C as ge,U as he,a as ae,d as A,e as M,h as N,j as L,k as l,l as j,m as q,n as k,p as B,q as V,s as D,w as G,x as P,y as O,z as $}from"./chunk-YMFLA43I.js";import{a as U,j as S,m as Z}from"./chunk-C353KNEH.js";import{Bb as p,Fa as h,Ga as _,Gb as v,Lb as u,Mb as o,Nb as n,Ob as d,Sb as R,Vb as C,Xb as f,_c as ne,a as x,b as w,e as be,f as oe,fc as r,jb as s,ka as re,kb as g,la as E,pa as F,va as y,wa as I,x as Y}from"./chunk-THA4BGIW.js";var ve=be(we());var b=se({source:"Auth",events:{"Set Authenticated User":me(),"Unset Autheticate User":le()}});var _e="auth",Ee={authenticatedUser:null},tt=de(Ee,ee(b.setAuthenticatedUser,(e,t)=>w(x({},e),{authenticatedUser:t.user})),ee(b.unsetAutheticateUser,e=>w(x({},e),{authenticatedUser:null})));var Fe=ce(_e),Ce=ue(Fe,e=>e.authenticatedUser);var z=class e{constructor(t,i,a){this.router=t;this.httpClient=i;this.store=a;this.authUser$=this.store.select(Ce)}authUser$;baseURL=T.apiBaseURL;handleAuthentication(t){return t[0]?(this.store.dispatch(b.setAuthenticatedUser({user:t[0]})),localStorage.setItem("token",t[0].token),t[0]):null}login(t){return this.httpClient.get(`${this.baseURL}/users?email=${t.email}&password=${t.password}`).pipe(Y(i=>{let a=this.handleAuthentication(i);if(a)return a;throw new Error("Los datos son invalidos")}))}logout(){this.store.dispatch(b.unsetAutheticateUser()),localStorage.removeItem("token"),this.router.navigate(["auth","login"])}verifyTok(){return this.httpClient.get(`${this.baseURL}/users?token=${localStorage.getItem("token")}`).pipe(Y(t=>!!this.handleAuthentication(t)))}static \u0275fac=function(i){return new(i||e)(F(S),F(U),F(pe))};static \u0275prov=re({token:e,factory:e.\u0275fac,providedIn:"root"})};function je(e,t){e&1&&(o(0,"div",0),d(1,"mat-spinner"),o(2,"h3"),r(3,"Cargando, por favor espere..."),n()())}function qe(e,t){e&1&&r(0," Este campo es requerido ")}function ke(e,t){e&1&&r(0," Este campo debe ser un correo electronico valido ")}function Be(e,t){e&1&&r(0," Este campo es requerido ")}function Ve(e,t){if(e&1){let i=R();o(0,"form",2),C("ngSubmit",function(){h(i);let m=f();return _(m.onSubmit())}),o(1,"div",3)(2,"mat-form-field",4)(3,"mat-label"),r(4,"Correo electronico"),n(),d(5,"input",5),o(6,"mat-error"),p(7,qe,1,0)(8,ke,1,0),n()()(),o(9,"div",3)(10,"mat-form-field",4)(11,"mat-label"),r(12,"Contrase\xF1a"),n(),d(13,"input",6),o(14,"button",7),C("click",function(){h(i);let m=f();return _(m.togglePasswdInpType())}),o(15,"mat-icon"),r(16," visibility "),n()(),o(17,"mat-error"),p(18,Be,1,0),n()()(),o(19,"div",8)(20,"p"),r(21,"\xBFNo tienes cuenta?"),n(),o(22,"button",9),C("click",function(){h(i);let m=f();return _(m.goToRegister())}),r(23,"Registrate"),n()(),o(24,"div",10)(25,"button",11),r(26,"Ingresar"),n()()()}if(e&2){let i,a,m=f();v("formGroup",m.loginForm),s(7),u((i=m.loginForm.get("email"))!=null&&i.hasError("required")?7:(i=m.loginForm.get("email"))!=null&&i.hasError("email")?8:-1),s(6),v("type",m.passwdInpType),s(5),u((a=m.loginForm.get("password"))!=null&&a.hasError("required")?18:-1)}}var Q=class e{constructor(t,i,a){this.formBuilder=t;this.authService=i;this.router=a;this.loginForm=this.formBuilder.group({email:["",[l.required,l.email]],password:["",[l.required]]})}passwdInpType="password";loginForm;isLoading=!1;togglePasswdInpType(){this.passwdInpType==="password"?this.passwdInpType="text":this.passwdInpType="password"}doLogin(){this.isLoading=!0,this.authService.login(this.loginForm.value).subscribe({next:t=>{this.router.navigate(["dashboard","home"])},error:t=>{t instanceof Error&&this.showError(t.message)},complete:()=>{this.isLoading=!1}})}onSubmit(){this.loginForm.invalid?this.loginForm.markAllAsTouched():this.doLogin()}showError(t){return oe(this,null,function*(){return yield ve.default.fire({icon:"error",title:"Ups...",text:t})})}goToRegister(){this.router.navigate(["auth","register"])}static \u0275fac=function(i){return new(i||e)(g(D),g(z),g(S))};static \u0275cmp=y({type:e,selectors:[["app-login"]],decls:4,vars:1,consts:[[1,"loading-msg"],["id","loginForm",3,"formGroup"],["id","loginForm",3,"ngSubmit","formGroup"],[1,"inpCont","row"],["appearance","outline"],["formControlName","email","matInput","","placeholder","Ej: example@mail.com"],["formControlName","password","matInput","","placeholder","Escribe",3,"type"],["type","button","matSuffix","","mat-icon-button","",3,"click"],["id","action-cont",1,"d-flex","align-items-center"],["type","button","mat-button","",3,"click"],[1,"col-12"],["type","submit","mat-flat-button",""]],template:function(i,a){i&1&&(o(0,"h2"),r(1,"Inicia Sesion"),n(),p(2,je,4,0,"div",0)(3,Ve,27,4,"form",1)),i&2&&(s(2),u(a.isLoading?2:3))},dependencies:[G,k,L,j,q,B,V,A,M,N,H,P,O,$,J],styles:[".inpCont[_ngcontent-%COMP%]{width:500px}.inpCont[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}#action-cont[_ngcontent-%COMP%]{gap:.25rem}"]})};function De(e,t){e&1&&(o(0,"div",0),d(1,"mat-spinner"),o(2,"h3"),r(3,"Cargando, por favor espere..."),n()())}function Ge(e,t){e&1&&r(0," Este campo es requerido ")}function Pe(e,t){e&1&&r(0," Este campo debe tener 3 caracteres como m\xEDnimo ")}function Oe(e,t){e&1&&r(0," Este campo es requerido ")}function $e(e,t){e&1&&r(0," Este campo debe tener 3 caracteres como m\xEDnimo ")}function He(e,t){e&1&&r(0," Este campo es requerido ")}function Je(e,t){e&1&&r(0," Este campo debe ser un correo electronico valido ")}function ze(e,t){e&1&&r(0," Este campo es requerido ")}function Ke(e,t){e&1&&r(0," Este campo es requerido ")}function Qe(e,t){if(e&1){let i=R();o(0,"form",2),C("ngSubmit",function(){h(i);let m=f();return _(m.onSubmit())}),o(1,"div",3)(2,"div",4)(3,"mat-form-field",5)(4,"mat-label"),r(5,"Nombre"),n(),d(6,"input",6),o(7,"mat-error"),p(8,Ge,1,0)(9,Pe,1,0),n()()(),o(10,"div",4)(11,"mat-form-field",5)(12,"mat-label"),r(13,"Apellido"),n(),d(14,"input",7),o(15,"mat-error"),p(16,Oe,1,0)(17,$e,1,0),n()()()(),o(18,"div",8)(19,"mat-form-field",9)(20,"mat-label"),r(21,"Correo electronico"),n(),d(22,"input",10),o(23,"mat-error"),p(24,He,1,0)(25,Je,1,0),n()()(),o(26,"div",3)(27,"div",4)(28,"mat-form-field",11)(29,"mat-label"),r(30,"Contrase\xF1a"),n(),d(31,"input",12),o(32,"button",13),C("click",function(){h(i);let m=f();return _(m.togglePasswdInpType())}),o(33,"mat-icon"),r(34," visibility "),n()(),o(35,"mat-error"),p(36,ze,1,0),n()()(),o(37,"div",4)(38,"mat-form-field",9)(39,"mat-label"),r(40,"Rol"),n(),o(41,"mat-select",14)(42,"mat-option",15),r(43," Usuario "),n(),o(44,"mat-option",16),r(45," Admin "),n()(),o(46,"mat-error"),p(47,Ke,1,0),n()()()(),o(48,"div",17)(49,"button",18),r(50,"Crear cuenta"),n()()()}if(e&2){let i,a,m,te,ie,c=f();v("formGroup",c.registerForm),s(8),u((i=c.registerForm.get("firstName"))!=null&&i.hasError("required")?8:(i=c.registerForm.get("firstName"))!=null&&i.hasError("minlength")?9:-1),s(8),u((a=c.registerForm.get("lastName"))!=null&&a.hasError("required")?16:(a=c.registerForm.get("lastName"))!=null&&a.hasError("minlength")?17:-1),s(8),u((m=c.registerForm.get("email"))!=null&&m.hasError("required")?24:(m=c.registerForm.get("email"))!=null&&m.hasError("email")?25:-1),s(7),v("type",c.passwdInpType),s(5),u((te=c.registerForm.get("password"))!=null&&te.hasError("required")?36:-1),s(11),u((ie=c.registerForm.get("role"))!=null&&ie.hasError("required")?47:-1)}}var W=class e{constructor(t,i,a){this.formBuilder=t;this.router=i;this.httpsClient=a;this.registerForm=this.formBuilder.group({firstName:["",[l.required,l.minLength(3)]],lastName:["",[l.required,l.minLength(3)]],email:["",[l.required,l.email]],password:["",[l.required]],role:["",[l.required]]})}baseURL=T.apiBaseURL;passwdInpType="password";registerForm;isLoading=!1;togglePasswdInpType(){this.passwdInpType==="password"?this.passwdInpType="text":this.passwdInpType="password"}createUser(t){return this.httpsClient.post(`${this.baseURL}/users`,w(x({},t),{token:fe(20)}))}onSubmit(){if(this.registerForm.invalid)this.registerForm.markAllAsTouched();else{this.isLoading=!0;let t=x({},this.registerForm.value);this.createUser(t).subscribe({next:()=>{this.router.navigate(["auth","login"])},error:i=>{alert(i)}})}}static \u0275fac=function(i){return new(i||e)(g(D),g(S),g(U))};static \u0275cmp=y({type:e,selectors:[["app-register"]],decls:4,vars:1,consts:[[1,"loading-msg"],["id","registerForm",3,"formGroup"],["id","registerForm",3,"ngSubmit","formGroup"],[1,"row","w-100"],[1,"col-6"],["appearance","outline",1,"w-100"],["formControlName","firstName","matInput","","placeholder","Ej: Juan"],["formControlName","lastName","matInput","","placeholder","Ej: Juan"],[1,"row"],["appearance","outline"],["formControlName","email","matInput","","placeholder","Ej: example@mail.com"],["appearance","outline","id","passwd-user"],["formControlName","password","matInput","","placeholder","Ej: Perez",3,"type"],["type","button","matSuffix","","mat-icon-button","",3,"click"],["formControlName","role"],["value","USER"],["value","ADMIN"],[1,"col-12"],["type","submit","mat-flat-button","",1,"w-90"]],template:function(i,a){i&1&&(o(0,"h2"),r(1,"Create una cuenta"),n(),p(2,De,4,0,"div",0)(3,Qe,51,7,"form",1)),i&2&&(s(2),u(a.isLoading?2:3))},dependencies:[G,k,L,j,q,B,V,A,M,N,H,P,O,$,J,ge,ae],styles:["#passwd-user[_ngcontent-%COMP%]{max-width:212px}"]})};var We=[{path:"login",component:Q},{path:"register",component:W},{path:"**",redirectTo:"login"}],X=class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=I({type:e});static \u0275inj=E({imports:[Z.forChild(We),Z]})};var Se=class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=I({type:e});static \u0275inj=E({imports:[ne,X,he]})};export{_e as a,tt as b,z as c,Se as d};