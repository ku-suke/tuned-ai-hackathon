import{d as O,r as m,l as z,c,a as t,t as U,e as H,z as p,A as f,F as C,m as V,u as J,B as q,f as u,g as x,h as D,i as K,C as T,j as I,o as d,D as j,E as R,H as Q,I as W,J as X,_ as Y}from"./index-DjZ0-uLA.js";const Z={class:"page"},ee={class:"header"},te={class:"d-flex gap-md"},se=["disabled"],ae={key:0,class:"loading"},le={key:1,class:"text-center text-error p-md"},re={key:2,class:"content"},oe={class:"card mb-lg"},ne={class:"form-group"},ie={class:"form-group"},ce={class:"card"},de={class:"d-flex flex-column gap-md"},ue={class:"d-flex justify-between align-center mb-md"},me=["onUpdate:modelValue","placeholder"],pe=["onClick","disabled"],fe={class:"form-group"},ve=["onUpdate:modelValue"],be={class:"form-group"},he=["onUpdate:modelValue"],ge={class:"form-group"},_e=["onUpdate:modelValue"],ye={class:"form-group mb-sm"},Ue={class:"card bg-light text-center p-md"},xe=["onChange","id"],De=["for"],Pe={class:"d-flex flex-column gap-sm"},$e=["onClick"],we=O({__name:"EditView",setup(ke){const P=J(),_=q(),h=m(!0),y=m(!1),n=m(null),v=m(""),g=m(""),i=m([]),M=async()=>{if(!u.currentUser)return;const l=_.params.id;try{const e=x(D,`users/${u.currentUser.uid}/projectTemplates/${l}`),a=await K(e);if(a.exists()){const s=a.data();n.value={...s,id:a.id},v.value=s.title,g.value=s.description,i.value=s.steps}}catch(e){console.error("テンプレート取得エラー:",e)}finally{h.value=!1}},A=()=>{if(!n.value)return;const l={id:crypto.randomUUID(),title:`ステップ ${i.value.length+1}`,order:i.value.length+1,systemPrompt:"",firstMessageTemplate:"",artifactGenerationPrompt:"",referenceDocuments:[]};i.value.push(l)},B=async l=>{const e=i.value[l];if(e){try{for(const a of e.referenceDocuments)await $(l,e.referenceDocuments.indexOf(a))}catch(a){console.error("ファイル削除エラー:",a)}i.value.splice(l,1),i.value.forEach((a,s)=>a.order=s+1)}},E=()=>{confirm("編集内容は保存されません。キャンセルしますか？")&&P.push("/dashboard")},G=async()=>{if(!(!u.currentUser||!n.value)&&confirm(n.value.isPublished?"このテンプレートを非公開にしますか？":"このテンプレートを公開しますか？"))try{const l=_.params.id,e=x(D,`users/${u.currentUser.uid}/projectTemplates/${l}`);await T(e,{isPublished:!n.value.isPublished,updatedAt:I()}),n.value.isPublished=!n.value.isPublished}catch(l){console.error("公開状態の更新エラー:",l),alert("公開状態の更新に失敗しました")}},S=async(l,e)=>{var r;if(!u.currentUser||!n.value)return;const a=l.target;if(!((r=a.files)!=null&&r.length))return;const s=a.files[0],o=i.value[e];if(o){y.value=!0;try{const b=`${s.name}-${Date.now()}`,w=`users/${u.currentUser.uid}/projectTemplates/${n.value.id}/steps/${o.id}/${b}`,k=j(R,w);await Q(k,s);const L=await W(k),N={id:crypto.randomUUID(),title:s.name,content:L,type:s.type.includes("pdf")?"pdf":"text"};o.referenceDocuments.push(N),a.value=""}catch(b){console.error("ファイルアップロードエラー:",b),alert("ファイルのアップロードに失敗しました")}finally{y.value=!1}}},$=async(l,e)=>{if(!u.currentUser||!n.value)return;const a=i.value[l];if(!a)return;const s=a.referenceDocuments[e];if(s)try{const o=j(R,s.content);await X(o),a.referenceDocuments.splice(e,1)}catch(o){console.error("ドキュメント削除エラー:",o),alert("ドキュメントの削除に失敗しました")}},F=async()=>{const l=u.currentUser;if(!(!l||!n.value)){if(!v.value.trim()){alert("テンプレート名を入力してください");return}if(!i.value.some(e=>e.systemPrompt.trim())){alert("少なくとも1つのステップにシステムプロンプトを入力してください");return}try{const e=_.params.id,a=x(D,`users/${l.uid}/projectTemplates/${e}`);await T(a,{title:v.value.trim(),description:g.value.trim(),updatedAt:I(),steps:i.value.map(s=>({...s,title:s.title.trim(),systemPrompt:s.systemPrompt.trim(),firstMessageTemplate:s.firstMessageTemplate.trim(),artifactGenerationPrompt:s.artifactGenerationPrompt.trim()}))}),P.push("/dashboard")}catch(e){console.error("テンプレート更新エラー:",e),alert("テンプレートの更新に失敗しました")}}};return z(M),(l,e)=>{var a;return d(),c("div",Z,[t("header",ee,[e[2]||(e[2]=t("h1",null,"プロジェクトテンプレートの編集",-1)),t("div",te,[h.value?H("",!0):(d(),c("button",{key:0,class:"btn btn-info",onClick:G},U((a=n.value)!=null&&a.isPublished?"非公開にする":"公開する"),1)),t("button",{class:"btn btn-gray",onClick:E},"キャンセル"),t("button",{class:"btn btn-success",onClick:F,disabled:h.value},"保存",8,se)])]),h.value?(d(),c("div",ae," 読み込み中... ")):n.value?(d(),c("div",re,[t("div",oe,[t("div",ne,[e[3]||(e[3]=t("label",{class:"form-label"},"テンプレート名",-1)),p(t("input",{type:"text",class:"form-input","onUpdate:modelValue":e[0]||(e[0]=s=>v.value=s),placeholder:"テンプレート名を入力"},null,512),[[f,v.value]])]),t("div",ie,[e[4]||(e[4]=t("label",{class:"form-label"},"説明",-1)),p(t("textarea",{class:"form-textarea","onUpdate:modelValue":e[1]||(e[1]=s=>g.value=s),placeholder:"テンプレートの説明を入力"},null,512),[[f,g.value]])])]),t("div",ce,[t("div",{class:"d-flex justify-between align-center mb-md"},[e[5]||(e[5]=t("h2",null,"ステップ",-1)),t("button",{class:"btn btn-primary",onClick:A},"ステップを追加")]),t("div",de,[(d(!0),c(C,null,V(i.value,(s,o)=>(d(),c("div",{class:"card bg-light",key:s.id},[t("div",ue,[p(t("input",{type:"text",class:"form-input step-title","onUpdate:modelValue":r=>s.title=r,placeholder:`ステップ ${o+1}`},null,8,me),[[f,s.title]]),t("button",{class:"btn btn-danger btn-sm",onClick:r=>B(o),disabled:i.value.length===1},"削除",8,pe)]),t("div",fe,[e[6]||(e[6]=t("label",{class:"form-label"},"システムプロンプト",-1)),p(t("textarea",{class:"form-textarea","onUpdate:modelValue":r=>s.systemPrompt=r,placeholder:"AIに対するシステムプロンプトを入力"},null,8,ve),[[f,s.systemPrompt]])]),t("div",be,[e[7]||(e[7]=t("label",{class:"form-label"},"AIの最初のメッセージ",-1)),p(t("textarea",{class:"form-textarea","onUpdate:modelValue":r=>s.firstMessageTemplate=r,placeholder:"AIがユーザーに最初に送信するメッセージを入力"},null,8,he),[[f,s.firstMessageTemplate]])]),t("div",ge,[e[8]||(e[8]=t("label",{class:"form-label"},"成果物生成プロンプト",-1)),p(t("textarea",{class:"form-textarea","onUpdate:modelValue":r=>s.artifactGenerationPrompt=r,placeholder:"成果物を生成するためのプロンプトを入力"},null,8,_e),[[f,s.artifactGenerationPrompt]])]),t("div",ye,[e[10]||(e[10]=t("label",{class:"form-label"},"固定参照ドキュメント",-1)),t("div",Ue,[t("input",{type:"file",ref_for:!0,ref:"fileInput",onChange:r=>S(r,o),accept:".pdf,.txt",class:"hidden",id:`file-upload-${o}`},null,40,xe),t("label",{for:`file-upload-${o}`,class:"btn btn-gray mb-sm"},U(y.value?"読み込み中...":"アップロード"),9,De),e[9]||(e[9]=t("p",{class:"text-sm text-gray"},"PDFまたはテキストファイル",-1))])]),t("div",Pe,[(d(!0),c(C,null,V(s.referenceDocuments,(r,b)=>(d(),c("div",{class:"card bg-light d-flex justify-between align-center",key:r.id},[t("span",null,U(r.title),1),t("button",{class:"btn btn-danger btn-sm",onClick:w=>$(o,b)},"削除",8,$e)]))),128))])]))),128))])])])):(d(),c("div",le," テンプレートが見つかりません "))])}}}),Ve=Y(we,[["__scopeId","data-v-f2ce01f5"]]);export{Ve as default};
