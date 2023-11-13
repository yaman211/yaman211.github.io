"use strict";(globalThis["webpackChunknamaa_test_task"]=globalThis["webpackChunknamaa_test_task"]||[]).push([[837],{5837:(e,t,o)=>{o.r(t),o.d(t,{default:()=>_});var s=o(9835);const i={class:"flex justify-between items-center q-pt-md q-pb-xl q-pl-md"},n=(0,s._)("div",{class:"text-secondary text-h4 text-weight-bold"},"Movies List",-1),l={class:"flex justify-evenly"},a={class:"full-width column flex-center text-secondary q-gutter-sm"},c=(0,s._)("div",{class:"text-h5"},"No Data Found !",-1);function d(e,t,o,d,r,m){const u=(0,s.up)("q-btn"),v=(0,s.up)("q-td"),p=(0,s.up)("q-icon"),f=(0,s.up)("q-table"),w=(0,s.up)("q-card");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",i,[n,(0,s.Wm)(u,{color:"secondary",icon:"add",label:"Add New Movie",to:"/movies/create","no-caps":"",style:{height:"fit-content"}})]),(0,s.Wm)(w,{class:"q-pa-md rounded-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{columns:e.columns,rows:e.data},{"body-cell-actions":(0,s.w5)((t=>[(0,s.Wm)(v,{props:t},{default:(0,s.w5)((()=>[(0,s._)("div",l,[(0,s.Wm)(u,{icon:"preview",color:"secondary",size:"sm",to:`/movies/${t.row.id}`},null,8,["to"]),(0,s.Wm)(u,{icon:"edit",color:"secondary",size:"sm",to:`/movies/edit/${t.row.id}`},null,8,["to"]),(0,s.Wm)(u,{icon:"delete",color:"secondary",size:"sm",onClick:o=>e.onDeleteClicked(t.row)},null,8,["onClick"])])])),_:2},1032,["props"])])),"no-data":(0,s.w5)((()=>[(0,s._)("div",a,[(0,s.Wm)(p,{name:"subtitles_off",size:"100px"}),c])])),_:1},8,["columns","rows"])])),_:1})])}var r=o(3100);const m=[{name:"title",label:"Movie Name",field:"title",align:"center"},{name:"year",label:"Movie Year",field:"year",align:"center"},{name:"actorsCount",label:"Actors Count",field:"actorsCount",align:"center"},{name:"description",label:"Description",field:"description",align:"center",format:e=>e||"--",style:"max-width: 350px;",classes:"long-text-wrap"},{name:"actions",label:"Actions",field:"",align:"center",style:"width: 200px"}],u=(0,s.aZ)({name:"movies-list",data(){return{columns:m}},computed:Object.assign({},(0,r.Se)({data:"movies/movies"})),methods:Object.assign(Object.assign({},(0,r.nv)({fetchMovies:"movies/fetchMovies",deleteMovie:"movies/deleteMovie",resetStore:"movies/resetStore"})),{onDeleteClicked(e){this.$q.dialog({title:"Confirm Delete",message:"Are you sure that you want to delete it ?.",cancel:!0,color:"negative",transitionShow:"flip-down",transitionHide:"flip-up"}).onOk((()=>{this.deleteMovie(e.id)}))}}),mounted(){this.fetchMovies()}});var v=o(1639),p=o(4455),f=o(4458),w=o(7580),h=o(7220),b=o(2857),g=o(9984),y=o.n(g);const x=(0,v.Z)(u,[["render",d]]),_=x;y()(u,"components",{QBtn:p.Z,QCard:f.Z,QTable:w.Z,QTd:h.Z,QIcon:b.Z})}}]);