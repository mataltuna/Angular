import{a as Re}from"./chunk-5PMTC3EA.js";import{a as X,b as Be}from"./chunk-AVMCM2OL.js";import{a as Ae}from"./chunk-5HLJYOOY.js";import{a as pe}from"./chunk-YWYD2KRV.js";import{A as de,B as ce,C as ue,D as fe,E as Ce,F as _e,G as ge,H as he,I as Le,J as ve,K as xe,L as Se,M as Ee,N as De,O as be,P as Me,Q as ye,R as we,S as Fe,T as Te,U as Ie,a as W,d as I,e as Y,h as Z,j as ee,k as L,l as te,m as ie,n as ne,p as oe,q as ae,s as se,w as re,x as le,z as me}from"./chunk-LQYVKD47.js";import"./chunk-Q64FFBLU.js";import{a as K,m as j}from"./chunk-C353KNEH.js";import{Bb as l,Fa as y,Ga as w,Gb as c,J as B,Lb as C,Mb as n,Nb as o,Ob as g,Pb as u,Qb as f,Sb as $,Uc as P,Vb as h,Xb as v,Xc as J,Yc as z,_c as Q,a as S,b as q,e as Ne,f as E,fc as a,gc as H,hc as d,jb as r,ka as U,kb as p,kc as F,la as D,lc as T,pa as G,va as b,wa as M}from"./chunk-THA4BGIW.js";function qe(e,t){e&1&&a(0," Este campo es requerido ")}function Ue(e,t){e&1&&a(0," Este campo debe tener 4 caracteres como m\xEDnimo ")}function Ge(e,t){if(e&1&&(n(0,"mat-option",27),a(1),o()),e&2){let i=t.$implicit;c("value",i.name),r(),H(i.name)}}function Pe(e,t){e&1&&a(0," Este campo es requerido ")}function Je(e,t){e&1&&a(0," Este campo es requerido ")}function ze(e,t){e&1&&a(0," Hay un maximo de 3 clases semanales ")}function Qe(e,t){e&1&&a(0," Este campo es requerido ")}var R=class e{constructor(t,i,s,m){this.formBuilder=t;this.matDialogRef=i;this.coursesService=s;this.data=m;this.lessonForm=this.formBuilder.group({name:["",[L.required,L.minLength(4)]],orgCourse:["",[L.required]],daysLesson:["",[L.required,this.maxOptionsValidator(3)]],timeLesson:["",[L.required]]}),this.courses$=this.coursesService.getCourses(),this.patchFormValue()}lessonForm;courses$;get isEditing(){return!!this.data?.editingLesson}patchFormValue(){this.data?.editingLesson&&this.lessonForm.patchValue(this.data.editingLesson)}onAdd(){this.lessonForm.invalid?this.lessonForm.markAllAsTouched():this.matDialogRef.close(q(S({},this.lessonForm.value),{id:this.isEditing?this.data.editingLesson.id:pe(4),createdAt:this.isEditing?this.data.editingLesson.createdAt:new Date}))}maxOptionsValidator(t){return i=>{let s=i.value;return(Array.isArray(s)?s.length:1)>t?{maxOptionsExceeded:{max:t}}:null}}static \u0275fac=function(i){return new(i||e)(p(se),p(ue),p(Re),p(fe))};static \u0275cmp=b({type:e,selectors:[["app-lessons-dialog"]],decls:65,vars:10,consts:[["mat-dialog-title",""],["mat-dialog-content","","id","dialogContent"],["id","lesson-form",3,"formGroup"],[1,"row"],[1,"col-6","mb-3"],["appearance","outline",1,"w-100"],["formControlName","name","matInput","","placeholder","Ej: Servicios y RxJS"],[1,"col-6"],["appearance","outline"],["formControlName","orgCourse"],[3,"value",4,"ngFor","ngForOf"],["formControlName","daysLesson","multiple",""],["value","Lunes"],["value","Martes"],["value","Mi\xE9rcoles"],["value","Jueves"],["value","Viernes"],["value","Sabado"],["value","Domingo"],["formControlName","timeLesson"],["value","10"],["value","16"],["value","18"],["value","22"],["mat-dialog-actions",""],["mat-dialog-close","","mat-button",""],["mat-button","",3,"click"],[3,"value"]],template:function(i,s){if(i&1&&(n(0,"h4",0),a(1),o(),n(2,"div",1)(3,"form",2)(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),a(8,"Nombre clase"),o(),g(9,"input",6),n(10,"mat-error"),l(11,qe,1,0)(12,Ue,1,0),o()()(),n(13,"div",7)(14,"mat-form-field",8)(15,"mat-label"),a(16,"Curso de la clase"),o(),n(17,"mat-select",9),l(18,Ge,2,2,"mat-option",10),F(19,"async"),o(),n(20,"mat-error"),l(21,Pe,1,0),o()()()(),n(22,"div",3)(23,"div",7)(24,"mat-form-field",8)(25,"mat-label"),a(26,"D\xEDa de cursada"),o(),n(27,"mat-select",11)(28,"mat-option",12),a(29," Lunes "),o(),n(30,"mat-option",13),a(31," Martes "),o(),n(32,"mat-option",14),a(33," Mi\xE9rcoles "),o(),n(34,"mat-option",15),a(35," Jueves "),o(),n(36,"mat-option",16),a(37," Viernes "),o(),n(38,"mat-option",17),a(39," Sabado "),o(),n(40,"mat-option",18),a(41," Domingo "),o()(),n(42,"mat-error"),l(43,Je,1,0)(44,ze,1,0),o()()(),n(45,"div",7)(46,"mat-form-field",8)(47,"mat-label"),a(48,"Horarios de cursada"),o(),n(49,"mat-select",19)(50,"mat-option",20),a(51," 10hs "),o(),n(52,"mat-option",21),a(53," 16hs "),o(),n(54,"mat-option",22),a(55," 18hs "),o(),n(56,"mat-option",23),a(57," 22hs "),o()(),n(58,"mat-error"),l(59,Qe,1,0),o()()()()()(),n(60,"div",24)(61,"button",25),a(62,"Cancelar"),o(),n(63,"button",26),h("click",function(){return s.onAdd()}),a(64),o()()),i&2){let m,_,x,k;r(),d("",s.data!=null&&s.data.editingLesson?"Edita el ":"A\xF1ade un ","curso "),r(2),c("formGroup",s.lessonForm),r(8),C((m=s.lessonForm.get("name"))!=null&&m.hasError("required")?11:(m=s.lessonForm.get("name"))!=null&&m.hasError("minlength")?12:-1),r(7),c("ngForOf",T(19,8,s.courses$)),r(3),C((_=s.lessonForm.get("orgCourse"))!=null&&_.hasError("required")?21:-1),r(22),C((x=s.lessonForm.get("daysLesson"))!=null&&x.hasError("required")?43:(x=s.lessonForm.get("daysLesson"))!=null&&x.hasError("maxOptionsExceeded")?44:-1),r(16),C((k=s.lessonForm.get("timeLesson"))!=null&&k.hasError("required")?59:-1),r(5),H(s.data!=null&&s.data.editingLesson?"Editar":"A\xF1adir")}},dependencies:[P,ne,ee,te,ie,oe,ae,I,_e,ge,Le,he,me,re,le,de,ce,W,J],styles:["#lesson-form[_ngcontent-%COMP%]{padding:4px 0}"]})};var Oe=Ne(Be());var O=class e{constructor(t){this.httpsClient=t}baseURL=X.apiBaseURL;getLessons(){return this.httpsClient.get(`${this.baseURL}/lessons`)}removeLessonById(t){return this.httpsClient.delete(`${this.baseURL}/lessons/${t}`).pipe(B(()=>this.getLessons()))}createLesson(t){return this.httpsClient.post(`${this.baseURL}/lessons`,S({},t))}updateLessonById(t,i){return this.httpsClient.patch(`${this.baseURL}/lessons/${t}`,i).pipe(B(()=>this.getLessons()))}static \u0275fac=function(i){return new(i||e)(G(K))};static \u0275prov=U({token:e,factory:e.\u0275fac,providedIn:"root"})};function We(e,t){e&1&&(n(0,"div",2),g(1,"mat-spinner"),n(2,"h3"),a(3,"Cargando, por favor espere..."),o()())}function Xe(e,t){e&1&&(n(0,"th",16),a(1," ID. "),o())}function Ye(e,t){if(e&1&&(n(0,"td",17),a(1),o()),e&2){let i=t.$implicit;r(),d(" ",i.id," ")}}function Ze(e,t){e&1&&(n(0,"th",16),a(1," Nombre "),o())}function et(e,t){if(e&1&&(n(0,"td",17),a(1),o()),e&2){let i=t.$implicit;r(),d(" ",i.name," ")}}function tt(e,t){e&1&&(n(0,"th",16),a(1," Fecha de creaci\xF3n "),o())}function it(e,t){if(e&1&&(n(0,"td",17),a(1),F(2,"date"),o()),e&2){let i=t.$implicit;r(),d(" ",T(2,1,i.createdAt)," ")}}function nt(e,t){e&1&&(n(0,"th",16),a(1," Curso "),o())}function ot(e,t){if(e&1&&(n(0,"td",17),a(1),o()),e&2){let i=t.$implicit;r(),d(" ",i.orgCourse," ")}}function at(e,t){e&1&&(n(0,"th",16),a(1," D\xEDas de clase "),o())}function st(e,t){if(e&1&&(n(0,"td",17),a(1),o()),e&2){let i=t.$implicit;r(),d(" ",i.daysLesson," ")}}function rt(e,t){e&1&&(n(0,"th",16),a(1," Horarios "),o())}function lt(e,t){if(e&1&&(n(0,"td",17),a(1),o()),e&2){let i=t.$implicit;r(),d(" ",i.timeLesson,"hs ")}}function mt(e,t){e&1&&(n(0,"th",16),a(1," Acciones "),o())}function dt(e,t){if(e&1){let i=$();n(0,"td",17)(1,"button",18),h("click",function(){let m=y(i).$implicit,_=v(2);return w(_.openModal(m))}),n(2,"mat-icon"),a(3," edit "),o()(),n(4,"button",18),h("click",function(){let m=y(i).$implicit,_=v(2);return w(_.onDelete(m.id))}),n(5,"mat-icon"),a(6," delete "),o()()()}}function pt(e,t){e&1&&g(0,"tr",19)}function ct(e,t){e&1&&g(0,"tr",20)}function ut(e,t){if(e&1){let i=$();n(0,"button",3),h("click",function(){y(i);let m=v();return w(m.openModal())}),n(1,"mat-icon"),a(2,"add"),o(),a(3," A\xF1adir clase "),o(),n(4,"table",4),u(5,5),l(6,Xe,2,0,"th",6)(7,Ye,2,1,"td",7),f(),u(8,8),l(9,Ze,2,0,"th",6)(10,et,2,1,"td",7),f(),u(11,9),l(12,tt,2,0,"th",6)(13,it,3,3,"td",7),f(),u(14,10),l(15,nt,2,0,"th",6)(16,ot,2,1,"td",7),f(),u(17,11),l(18,at,2,0,"th",6)(19,st,2,1,"td",7),f(),u(20,12),l(21,rt,2,0,"th",6)(22,lt,2,1,"td",7),f(),u(23,13),l(24,mt,2,0,"th",6)(25,dt,7,0,"td",7),f(),l(26,pt,1,0,"tr",14)(27,ct,1,0,"tr",15),o()}if(e&2){let i=v();r(4),c("dataSource",i.dataSource),r(22),c("matHeaderRowDef",i.displayedColumns),r(),c("matRowDefColumns",i.displayedColumns)}}var V=class e{constructor(t,i){this.lessonService=t;this.matDialog=i}dataSource=[];displayedColumns=["id","name","createdAt","orgCourse","daysLesson","timeLesson","actions"];isLoading=!1;ngOnInit(){this.loadLessons()}loadLessons(){this.isLoading=!0,this.lessonService.getLessons().subscribe({next:t=>{this.dataSource=t},error:()=>{this.isLoading=!1},complete:()=>{this.isLoading=!1}})}onDelete(t){return E(this,null,function*(){(yield this.showConfirmationDialog("eliminar el alumno")).isConfirmed&&(this.isLoading=!0,this.lessonService.removeLessonById(t).subscribe({next:s=>{this.dataSource=s},error:s=>{this.isLoading=!1},complete:()=>{this.isLoading=!1}}))})}openModal(t){this.matDialog.open(R,{data:{editingLesson:t}}).afterClosed().subscribe({next:i=>E(this,null,function*(){i&&(t?(yield this.showConfirmationDialog("guardar los cambios")).isConfirmed&&this.handleUpdate(t.id,i):(this.isLoading=!0,this.lessonService.createLesson(i).subscribe({next:()=>this.loadLessons()})))})})}showConfirmationDialog(t){return E(this,null,function*(){return yield Oe.default.fire({title:`\xBFQuieres ${t}?`,showDenyButton:!0,confirmButtonText:"Confirmar",denyButtonText:"Cancelar"})})}handleUpdate(t,i){this.isLoading=!0,this.lessonService.updateLessonById(t,i).subscribe({next:s=>{this.dataSource=s},error:s=>{this.isLoading=!1},complete:()=>{this.isLoading=!1}})}static \u0275fac=function(i){return new(i||e)(p(O),p(Ce))};static \u0275cmp=b({type:e,selectors:[["app-lessons"]],decls:5,vars:1,consts:[["id","users-container",1,"contContainer"],["appHighlight",""],[1,"loading-msg"],["mat-raised-button","",1,"btnModal",3,"click"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id"],["appHighlight","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","createdAt"],["matColumnDef","orgCourse"],["matColumnDef","daysLesson"],["matColumnDef","timeLesson"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["appHighlight","","mat-header-cell",""],["mat-cell",""],["mat-icon-button","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(i,s){i&1&&(n(0,"div",0)(1,"h2",1),a(2,"Clases"),o(),l(3,We,4,0,"div",2)(4,ut,28,3),o()),i&2&&(r(3),C(s.isLoading?3:4))},dependencies:[Te,I,Y,Z,ve,Se,Me,Ee,xe,ye,De,be,we,Fe,Ae,z]})};var ft=[{path:"",component:V}],N=class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=M({type:e});static \u0275inj=D({imports:[j.forChild(ft),j]})};var Ve=class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=M({type:e});static \u0275inj=D({imports:[Q,N,Ie]})};export{Ve as LessonsModule};
