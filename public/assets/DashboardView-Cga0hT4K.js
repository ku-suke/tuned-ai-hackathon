import{d as L,r as _,l as B,c as o,a as t,e as y,F as k,m as $,u as R,f as d,n as g,h as l,q as w,p as v,v as V,o as c,t as i,w as C,x as E,y as F,g as j}from"./index-DjZ0-uLA.js";const J={class:"page"},M={class:"content"},N={class:"templates"},z={key:0,class:"card-grid"},I={key:0,class:"no-data"},O={class:"d-flex justify-between align-center"},G={class:"description"},H={class:"text-gray text-sm"},K={class:"d-flex gap-sm"},Q=["onClick"],W=["onClick"],X=["onClick"],Y={key:1,class:"loading"},Z={class:"projects"},tt={key:0,class:"card-grid"},st={key:0,class:"no-data"},et={class:"d-flex justify-between align-center"},at={class:"description"},nt={class:"text-gray text-sm"},ot={class:"d-flex gap-sm"},ct=["onClick"],rt={key:1,class:"loading"},lt=L({__name:"DashboardView",setup(dt){const u=R(),p=_([]),m=_(!0),b=_([]),f=_(!0),x=async()=>{if(d.currentUser)try{const e=g(l,`users/${d.currentUser.uid}/projectTemplates`),a=w(e),s=await v(a);p.value=s.docs.map(n=>{var r,h;return{...n.data(),id:n.id,createdAt:(r=n.data().createdAt)==null?void 0:r.toDate(),updatedAt:(h=n.data().updatedAt)==null?void 0:h.toDate()}})}catch(e){console.error("テンプレート取得エラー:",e)}finally{m.value=!1}},D=async()=>{if(d.currentUser)try{const e=g(l,`users/${d.currentUser.uid}/projects`),a=w(e),s=await v(a);b.value=s.docs.map(n=>{var r,h;return{...n.data(),id:n.id,createdAt:(r=n.data().createdAt)==null?void 0:r.toDate(),updatedAt:(h=n.data().updatedAt)==null?void 0:h.toDate()}})}catch(e){console.error("プロジェクト取得エラー:",e)}finally{f.value=!1}},A=()=>{u.push("/template/create")},U=e=>{u.push(`/project/create?templateId=${e}&type=private`)},S=e=>{u.push(`/project/${e}`)},q=e=>{u.push(`/template/edit/${e}`)},P=async e=>{if(d.currentUser&&confirm("このテンプレートを削除してもよろしいですか？"))try{const a=F(l),s=g(l,`users/${d.currentUser.uid}/projectTemplates/${e}/steps`);(await v(s)).forEach(r=>{a.delete(j(l,`users/${d.currentUser.uid}/projectTemplates/${e}/steps/${r.id}`))}),a.delete(j(l,`users/${d.currentUser.uid}/projectTemplates/${e}`)),await a.commit(),p.value=p.value.filter(r=>r.id!==e)}catch(a){console.error("テンプレート削除エラー:",a)}},T=async()=>{try{await V(d),u.push("/")}catch(e){console.error("ログアウトエラー:",e)}};return B(()=>{x(),D()}),(e,a)=>(c(),o("div",J,[t("header",{class:"header"},[a[0]||(a[0]=t("h1",null,"Dashboard",-1)),t("button",{class:"btn btn-danger",onClick:T},"ログアウト")]),t("div",M,[t("section",N,[t("div",{class:"d-flex justify-between align-center"},[a[1]||(a[1]=t("h2",null,"プロジェクトテンプレート",-1)),t("button",{class:"btn btn-success",onClick:A},"新規作成")]),m.value?(c(),o("div",Y," 読み込み中... ")):(c(),o("div",z,[p.value.length===0?(c(),o("div",I," テンプレートがありません ")):y("",!0),(c(!0),o(k,null,$(p.value,s=>(c(),o("div",{class:"card",key:s.id},[t("div",O,[t("h3",null,i(s.title),1),t("span",{class:C(["badge",s.isPublished?"badge-success":"badge-gray"])},i(s.isPublished?"公開済":"下書き"),3)]),t("p",G,i(s.description),1),t("p",H,"最終更新: "+i(s.updatedAt.toLocaleDateString("ja-JP")),1),t("div",K,[t("button",{class:"btn btn-warning btn-sm",onClick:n=>q(s.id)},"編集",8,Q),t("button",{class:"btn btn-danger btn-sm",onClick:n=>P(s.id)},"削除",8,W),t("button",{class:"btn btn-success btn-sm",onClick:E(n=>U(s.id),["stop"])}," このテンプレートでプロジェクトを作成 ",8,X)])]))),128))]))]),t("section",Z,[a[2]||(a[2]=t("h2",null,"プロジェクト",-1)),f.value?(c(),o("div",rt," 読み込み中... ")):(c(),o("div",tt,[b.value.length===0?(c(),o("div",st," プロジェクトがありません ")):y("",!0),(c(!0),o(k,null,$(b.value,s=>(c(),o("div",{class:"card",key:s.id},[t("div",et,[t("h3",null,i(s.title),1),t("span",{class:C(["badge",s.status==="completed"?"badge-success":"badge-warning"])},i(s.status==="completed"?"完了":"進行中"),3)]),t("p",at,i(s.description),1),t("p",nt,"最終更新: "+i(s.updatedAt.toLocaleDateString("ja-JP")),1),t("div",ot,[t("button",{class:"btn btn-primary btn-sm",onClick:n=>S(s.id)},"表示",8,ct)])]))),128))]))])])]))}});export{lt as default};
