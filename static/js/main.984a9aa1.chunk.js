(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,a){e.exports=a(88)},51:function(e,t,a){},65:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(23),o=a.n(r),l=(a(51),a(2)),i=a.n(l),c=a(6),u=a(11),p=a(12),m=a(7),d=a(14),h=a(13),g=(a(29),a(1)),f=a.n(g),b=a(3),v=a.n(b),y=(a(36),a(63),a(65),a(18)),w=a(16),E=a(24),k=a.n(E),S=a(25),j="",x={repository:[{value:"pos-standard-3",label:"POS Standard 3",repos:(j="magestore-product")+"/pos-standard",projectId:18096926,release_branch:"3",issueList:[],lastestVersion:"",suggestRelease:"",hasFeatures:0},{value:"pos-standard-4",label:"POS Standard 4",repos:j+"/pos-standard",projectId:18096926,release_branch:"4",issueList:[],lastestVersion:"",suggestRelease:"",hasFeatures:0},{value:"pos-pro-3",label:"POS Pro 3",repos:j+"/pos-pro",projectId:18096980,release_branch:"3",issueList:[],lastestVersion:"",suggestRelease:"",hasFeatures:0},{value:"pos-pro-4",label:"POS Pro 4",repos:j+"/pos-pro",projectId:18096980,release_branch:"4",issueList:[],lastestVersion:"",suggestRelease:"",hasFeatures:0},{value:"pos-enterprise-3",label:"POS Enterprise 3",repos:j+"/pos-enterprise",projectId:18096977,release_branch:"3",issueList:[],lastestVersion:"",suggestRelease:"",hasFeatures:0},{value:"pos-enterprise-4",label:"POS Enterprise 4",repos:j+"/pos-enterprise",projectId:18096977,release_branch:"4",issueList:[],lastestVersion:"",suggestRelease:"",hasFeatures:0},{value:"pos-pro-commerce-4",label:"POS Pro Commerce 4",repos:j+"/pos-pro-commerce",projectId:18096981,release_branch:"4",issueList:[],lastestVersion:"",suggestRelease:"",hasFeatures:0},{value:"pos-enterprise-commerce-4",label:"POS Enterprise Commerce 4",repos:j+"/pos-enterprise-commerce",projectId:18096978,release_branch:"4",issueList:[],lastestVersion:"",suggestRelease:"",hasFeatures:0}],repoUrl:[{value:"pos-standard",label:"POS Standard",repos:j+"/pos-standard",projectId:18096926},{value:"pos-pro",label:"POS Pro",repos:j+"/pos-pro",projectId:18096980},{value:"pos-enterprise",label:"POS Enterprise",repos:j+"/pos-enterprise",projectId:18096977},{value:"pos-pro-commerce",label:"POS Pro Commerce",repos:j+"/pos-pro-commerce",projectId:18096981},{value:"pos-enterprise-commerce",label:"POS Enterprise Commerce",repos:j+"/pos-enterprise-commerce",projectId:18096978}],key:"AIzaSyDwlPbk6GDEb52P9eLxOBGugc_EcDo0DW0"},O=a(4),_=a.n(O),C=function(){return new Headers({"PRIVATE-TOKEN":v.a.get("token"),"Content-Type":"application/json"})},N={getDataFromGoogleSheet:function(e,t){return fetch("https://sheets.googleapis.com/v4/spreadsheets/"+e+"/values/Plan!A1:C500?key="+t,{})},getListMileStoneClosed:function(e){return fetch("https://gitlab.com/api/v4/projects/"+e.projectId+"/milestones?direction=desc&state=closed&page=0&per_page=2000",{method:"get",headers:C()})},getIssueList:function(e){return fetch("https://gitlab.com/api/v4/projects/"+e+"/issues?page=0&per_page=2000&state=opened",{method:"get",headers:C()})},createMilestone:function(e,t){return fetch("https://gitlab.com/api/v4/projects/"+e+"/milestones",{method:"post",headers:C(),body:JSON.stringify(t)})},updateIssueToMilestone:function(e,t,a){return fetch("https://gitlab.com/api/v4/projects/"+t+"/issues/"+e,{method:"PUT",headers:C(),body:JSON.stringify({milestone_id:a})})},createIssue:function(e,t,a,n){return fetch("https://gitlab.com/api/v4/projects/"+e+"/issues",{method:"post",headers:C(),body:JSON.stringify({title:t,labels:a,description:n})})},getIssueFromMileStone:function(e,t){return fetch("https://gitlab.com/api/v4/projects/"+e+"/issues?page=0&per_page=2000&milestone="+t,{method:"get",headers:C()})},closeMileStone:function(e,t){return fetch("https://gitlab.com/api/v4/projects/"+e+"/milestones/"+t,{method:"PUT",headers:C(),body:JSON.stringify({state_event:"close"})})},release:function(e,t,a,n,s,r){return Object(c.a)(i.a.mark(function o(){var l,c,u,p,m,d,h,g,f,b,v,y,w,E;return i.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return l="",c="",u=fetch("https://gitlab.com/api/v4/projects/"+e+"/repository/files/server%2Fapp%2Fcode%2FMagestore%2FWebpos%2Fetc%2Fconfig.xml/raw?ref="+a+"-develop",{method:"GET",headers:C()}),p=fetch("https://gitlab.com/api/v4/projects/"+e+"/repository/files/CHANGELOG.md/raw?ref="+a+"-develop",{method:"GET",headers:C()}),o.next=6,Promise.all([u,p]);case 6:return m=o.sent,d=m[0],h=m[1],o.next=11,d.text();case 11:return g=o.sent,l=g.replace(/<version>\d+(\.\d+)+<\/version>/g,"<version>"+t.replace("v","")+"</version>"),o.next=15,h.text();case 15:return f=o.sent,c=s+"\n"+f,o.next=19,fetch("https://gitlab.com/api/v4/projects/"+e+"/repository/commits",{method:"POST",headers:C(),body:JSON.stringify({branch:a+"-develop",commit_message:"Prepare to release "+n,actions:[{action:"update",file_path:"server/app/code/Magestore/Webpos/etc/config.xml",content:l},{action:"update",file_path:"CHANGELOG.md",content:c}]})});case 19:return b=o.sent,o.next=22,b.json();case 22:if(!o.sent.id){o.next=42;break}return o.next=26,fetch("https://gitlab.com/api/v4/projects/"+e+"/merge_requests",{method:"POST",headers:C(),body:JSON.stringify({source_branch:a+"-develop",target_branch:a,title:"Release "+n})});case 26:return v=o.sent,o.next=29,v.json();case 29:if(y=o.sent,!(w=y.iid)){o.next=42;break}return o.next=34,fetch("https://gitlab.com/api/v4/projects/"+e+"/merge_requests/"+w+"/merge",{method:"PUT",headers:C(),body:JSON.stringify({})});case 34:return E=o.sent,o.next=37,E.json();case 37:if(!o.sent.id){o.next=42;break}return o.next=41,fetch("https://gitlab.com/api/v4/projects/"+e+"/releases",{method:"POST",headers:C(),body:JSON.stringify({tag_name:t,ref:a,name:n,description:s.replace(t+"\n=============\n\n",""),milestones:r})});case 41:return o.abrupt("return",o.sent);case 42:case"end":return o.stop()}},o)}))()},closeIssue:function(e,t){return fetch("https://gitlab.com/api/v4/projects/"+e+"/issues/"+t,{method:"PUT",headers:C(),body:JSON.stringify({state_event:"close"})})},getListMileStone:function(e){return fetch("https://gitlab.com/api/v4/projects/"+e+"/milestones?page=0&per_page=2000&state=active",{method:"get",headers:C()})},checkLoginToken:function(e){return fetch("https://gitlab.com/api/v4/groups/7663926",{method:"get",headers:new Headers({"PRIVATE-TOKEN":e})})}},I=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleValueChange=function(e){n.setState({value:e})},n.handleTabChange=function(e){n.setState({tab:e})},n.createIssue=Object(c.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(f()(".loading").show(),!f()("#title").val()||!n.state.value){e.next=10;break}return t=[],(a=x.repoUrl).map(function(e,t){return e.message="",e}),n.repository.map(function(e){return f()("#"+e.value).length>0&&f()("#"+e.value).is(":checked")&&t.push(new Promise(function(t,s){N.createIssue(e.projectId,"["+e.release_branch+"] "+f()("#title").val(),[f()("#label_type").val()],n.state.value.replace("### Preconditions (*)","### Preconditions (*)\n"+e.label+"\n")).then(function(e){e.ok?e.json().then(function(e){a.map(function(t,n){return e.web_url.includes(t.value+"/")&&(a[n].message=a[n].message+"<a href='"+e.web_url+"'>"+e.title+"</a><br/>"),t}),t(e)},function(e){s(e.message)}):s("error")},function(e){s(e.message)})})),e}),e.next=8,Promise.all(t).then(function(e){e.map(function(e){return e}),f()(".loading").hide();var t="";a.map(function(e,a){return e.message&&(t=t+"<b>"+e.label+'</b> : <a href="https://gitlab.com/'+e.repos+'/issues">View All Issues</a><br/>'+e.message),e}),_.a.fire({title:"<strong>Success!</strong>",type:"success",html:t,showCloseButton:!0})});case 8:e.next=12;break;case 10:_.a.fire({type:"error",title:"Oops...",text:"Please fill all information!"}),f()(".loading").hide();case 12:case"end":return e.stop()}},e)})),n.selectAll=function(e){e.preventDefault(),f()(":checkbox").each(function(){this.checked=!0})},n.setBugTemplate=function(){n.setState({value:"### Preconditions (*)\n1. \n2. \n\n### Steps to reproduce (*)\n1. \n2. \n\n### Expected result (*)\n1. \n2. \n\n### Actual result (*)\n1. \n2. \n\n",tab:"write"}),f()("#label_type").val("Type: Bug report")},n.setFeatureTemplate=function(){n.setState({value:"### Description (*)\n\n### Expected behavior (*)\n\n### Benefits\n\n### Additional information\n\n",tab:"write"}),f()("#label_type").val("Type: Feature request")},n.setDeveloperIssueTemplate=function(){n.setState({value:"### Summary (*)\n\n### Examples (*)\n\n### Proposed solution\n\n",tab:"write"}),f()("#label_type").val("Type: Developer issue")},n.setCompatibleTemplate=function(){n.setState({value:"### Description (*)\n\n### Expected behavior (*)\n\n### Benefits\n\n### Additional information\n\n",tab:"write"}),f()("#label_type").val("Type: Compatible")},n.state={title:"",value:"### Preconditions (*)\n1. \n2. \n\n### Steps to reproduce (*)\n1. \n2. \n\n### Expected result (*)\n1. \n2. \n\n### Actual result (*)\n1. \n2. \n\n",tab:"write",labelType:["Type: Bug report","Type: Feature request","Type: Developer issue","Type: Compatible"]},n.converter=new S.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0}),n.repository=x.repository,n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;if(v.a.get("authorize-github-base64")||v.a.get("token"))return n.createElement(n.Fragment,null,n.createElement("div",{className:"container"},n.createElement("div",{className:"form-group",id:"title_group"},n.createElement("label",{htmlFor:"title",className:"font-weight-bold"},"Title Issue"),n.createElement("input",{type:"text",className:"form-control",id:"title",name:"title"})),n.createElement("div",{className:"font-weight-bold"},"Content"),n.createElement("div",{id:"template_button","aria-label":"Basic example"},n.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.setBugTemplate},"Bug Template"),n.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.setFeatureTemplate},"Feature Template"),n.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.setDeveloperIssueTemplate},"Develop Issue Template"),n.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.setCompatibleTemplate},"Compatible Template")),n.createElement("br",null),n.createElement("div",{id:"container-body"},n.createElement(k.a,{onChange:this.handleValueChange,onTabChange:this.handleTabChange,value:this.state.value,generateMarkdownPreview:function(t){return Promise.resolve(e.converter.makeHtml(t))},selectedTab:this.state.tab})),n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"label_type",className:"font-weight-bold"},"Issue Type"),n.createElement("select",{className:"form-control",name:"label_type",id:"label_type"},this.state.labelType.map(function(e,t){return n.createElement("option",{key:t,value:e},e)}))),n.createElement("a",{onClick:this.selectAll,href:"/"},"Select All"),n.createElement("div",{id:"repos-list"},this.repository.map(function(e,t){return n.createElement("div",{key:"form-check"+t,className:"form-check"},n.createElement("input",{className:"form-check-input",type:"checkbox",id:e.value,name:e.value,value:e.value}),n.createElement("label",{className:"form-check-label",htmlFor:e.value},e.label))})),n.createElement("div",{id:"button-list"},n.createElement("button",{className:"btn btn-primary",id:"create_issue_button",onClick:this.createIssue},"Create Issue"))))}}]),a}(n.Component),P=a(26),T=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(u.a)(this,a),(n=t.call(this,e)).createMileStone=function(e,t,a){var s=Object(m.a)(n),r={due_date:n.state.dueDate,title:t,description:t};f()(".loading").show(),N.createMilestone(a,r).then(function(t){t.ok?t.json().then(function(t){N.getIssueList(a).then(function(a){a.ok?a.json().then(function(a){s.processArray(a,e,t)}):alert("Error ! Please try again !")})}):alert("Error ! Please try again !")})},n.updateIssueToMilestone=function(){var e=Object(c.a)(i.a.mark(function e(t,a,n){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.includes(t.title.replace(/\s+/g," ").trim())||!t.web_url.includes("issue")){e.next=3;break}return e.next=3,N.updateIssueToMilestone(t.iid,t.project_id,n.id);case 3:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),n.processArray=function(){var e=Object(c.a)(i.a.mark(function e(t,a,n){var s,r,o,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s=[],r=Object(P.a)(t);try{for(r.s();!(o=r.n()).done;)l=o.value,a.includes(l.title.replace(/\s+/g," ").trim())&&l.web_url.includes("issue")&&s.push(N.updateIssueToMilestone(l.iid,l.project_id,n.id))}catch(i){r.e(i)}finally{r.f()}return e.next=5,Promise.all(s);case 5:_.a.fire({title:"<strong>Success!</strong>",type:"success",html:"<b>"+n.title+": </b><a href='"+n.web_url+"'>"+n.web_url+"</a>",showCloseButton:!0}),f()(".loading").hide();case 7:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),n.handleChange=function(e){n.setState({suggestRelease:e.target.value})},n.handleChangeDue=function(e){var t=e.target.value;n.setState({dueDateDisplay:t});var a=t.split("/"),s=a[1]+"/"+a[0]+"/"+a[2],r=new Date(s);r.setHours(17),r.setMinutes(0),r.setSeconds(0),n.setState({dueDate:r.toISOString()})};var s=new Date,r=s.getDay(),o=new Date;r<=5?o.setDate(s.getDate()+(5-r)):o.setDate(s.getDate()+5+(r-5)),o.setHours(17),o.setMinutes(0),o.setSeconds(0);var l=String(o.getDate()).padStart(2,"0")+"/"+String(o.getMonth()+1).padStart(2,"0")+"/"+o.getFullYear();return n.state={lastestRelease:n.props.lastestRelease,dueDateDisplay:l,dueDate:o.toISOString(),suggestRelease:n.props.suggestRelease},n}return Object(p.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props;e.lastestRelease!==t.lastestRelease&&this.setState({lastestRelease:this.props.lastestRelease}),e.suggestRelease!==t.suggestRelease&&this.setState({suggestRelease:this.props.suggestRelease}),e.dueDateDisplay!==t.dueDateDisplay&&this.setState({dueDateDisplay:this.props.dueDateDisplay}),e.dueDate!==t.dueDate&&this.setState({dueDate:this.props.dueDate})}},{key:"render",value:function(){var e=this,t="";return this.props.hasFeatures&&(t=" - Has Features"),n.createElement(n.Fragment,null,n.createElement("div",null,n.createElement("div",{className:"container issue-repos"},n.createElement("label",{className:"row font-weight-bold"},this.props.reposLabel),n.createElement("label",{className:"row"},"Lastest Released: "+this.props.lastestRelease),n.createElement("div",{className:"row"},n.createElement("label",null,"Suggest Released"),t,n.createElement("input",{type:"text",className:"form-control",value:this.state.suggestRelease,onChange:this.handleChange})),n.createElement("div",{className:"row"},n.createElement("label",null,"Deadline"),t,n.createElement("input",{type:"text",className:"form-control",value:this.state.dueDateDisplay,onChange:this.handleChangeDue}))),this.props.issueList.map(function(e,t){return n.createElement("p",{key:t},e)}),n.createElement("div",{className:"form-group"},n.createElement("button",{className:"btn btn-primary",onClick:function(){return e.createMileStone(e.props.issueList,e.state.suggestRelease,e.props.projectId)}},"Create Milestone"))))}}]),a}(n.Component),D=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).getInitialState=function(){return n.repository=x.repository,n.repoUrl=x.repoUrl,{mileStones:[],value:"",tab:"write",log:"",nextRelease:[]}},n.getList=function(){var e=Object(c.a)(i.a.mark(function e(t){var a,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],s=Object(m.a)(n),n.repoUrl.map(function(e){return a.push(N.getListMileStoneClosed(e)),e}),e.next=5,Promise.all(a);case 5:e.sent.map(function(e,a){return e.ok?e.json().then(function(e){(e=e.splice(0,3)).map(function(e){return s.repository.map(function(a,n){return e.web_url.includes(a.repos+"/")&&e.title.includes("v"+a.release_branch)&&!t[n].lastestVersion&&(t[n].lastestVersion=e.title,t[n].suggestRelease=s.suggestRelease(e.title,"v"+a.release_branch,a.hasFeatures)),e}),e}),s.setState({nextRelease:t}),f()(".loading").hide()}):(_.a.fire({type:"error",title:"Oops...",text:"Something went wrong!"}),f()(".loading").hide()),e});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.suggestRelease=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e.slice(e.indexOf(t),e.length).split(".");return a?(n[1]=parseInt(n[1])+1,n[2]=0):n[2]=parseInt(n[2])+1,e.slice(0,e.indexOf(t))+n.join(".")},n.readSprint=Object(c.a)(i.a.mark(function e(){var t,a,s,r,o,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.setState(n.getInitialState()),t=(t=f()("#plan_id").val()).slice(t.indexOf("d/"),t.length),a=x.key,(t=t.replace("d/","")).indexOf("/")>-1&&(t=t.slice(0,t.indexOf("/"))),s=Object(m.a)(n),f()(".loading").show(),!v.a.get("authorize-github-base64")&&!v.a.get("token")){e.next=22;break}return(r=n.repository).map(function(e,t){return e.issueList=[],e}),e.prev=11,e.next=14,N.getDataFromGoogleSheet(t,a);case 14:o=e.sent,l=null,o.ok?o.json().then(function(e){var t=0;e.values.map(function(e,a){return t<x.repository.length&&("undefined"!==typeof e[2]&&"release"!==e[2].toLowerCase()&&r[t].issueList.push(e[2].replace(/\s+/g," ").trim()),"undefined"!==typeof e[1]&&e[1].toLowerCase().includes("feature")&&(l||(l=a)),a===l+1&&e[2]&&(r[t].hasFeatures=1,l=null),"undefined"!==typeof e[2]&&"release"===e[2].toLowerCase()&&t++),e}),s.getList(r)}):(_.a.fire({type:"error",title:"Oops...",text:"Something went wrong!"}),f()(".loading").hide()),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(11),alert(e.t0);case 22:case"end":return e.stop()}},e,null,[[11,19]])})),n.state=n.getInitialState(),n}return Object(p.a)(a,[{key:"render",value:function(){return n.createElement(n.Fragment,null,n.createElement("div",{className:"container"},n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"plan_id",className:"font-weight-bold"},"Url c\u1ee7a file Planning (C\u1ea7n \u0111\u1ec3 public \u0111\u1ec3 c\xf3 th\u1ec3 \u0111\u1ecdc))"),n.createElement("input",{type:"text",className:"form-control",id:"plan_id",name:"plan_id"})),n.createElement("button",{className:"btn btn-primary",onClick:this.readSprint},"Read Sprint Planning"),n.createElement("div",{className:"form-group",id:"list-issue"},this.state.nextRelease.map(function(e,t){return n.createElement(T,{key:t,issueList:e.issueList,reposLabel:e.label,suggestRelease:e.suggestRelease,lastestRelease:e.lastestVersion,hasFeatures:e.hasFeatures,reposId:e.value,projectId:e.projectId})}))))}}]),a}(n.Component),L=a(34),R=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).getList=Object(c.a)(i.a.mark(function e(){var t,a,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=Object(m.a)(n),f()(".loading").show(),s=[],n.repoUrl.map(function(e){return t.push(new Promise(function(t,a){N.getListMileStone(e.projectId).then(function(e){e.ok?e.json().then(function(e){s=[].concat(Object(L.a)(s),Object(L.a)(e)),t(e)},function(e){a(e.message)}):a("error")},function(e){a(e.message)})})),e}),e.next=7,Promise.all(t).then(function(){a.setState({mileStones:s}),f()(".loading").hide()});case 7:case"end":return e.stop()}},e)})),n.handleValueChange=function(e){n.setState({value:e})},n.handleTabChange=function(e){n.setState({tab:e})},n.generateReleaseNotes=function(){n.setState({value:""});var e=f()("#mile_stones").children("option:selected").val(),t=f()("#mile_stones").children("option:selected").html(),a="",s=[],r=[],o=[],l=[],i=Object(m.a)(n),c="";n.repository.map(function(n,s){return e.includes(n.repos)&&t.includes("v"+n.release_branch)&&(a=n.projectId,c=n.release_branch),n});var u=f()("#mile_stones").children("option:selected").html();u=u.slice(u.indexOf("v"+c),u.length),f()(".loading").show(),N.getIssueFromMileStone(a,t).then(function(e){if(e.ok){var t=i.state.value;t=t+u+"\n=============\n",e.json().then(function(e){e.map(function(e,t){var a=e.title,n=e.labels,i="bug";return n.map(function(e,t){return e.toLowerCase().includes("feature")&&(i="feature"),e.toLowerCase().includes("develop")&&(i="develop"),e.toLowerCase().includes("compatible")&&(i="compatible"),e}),"feature"===i?r.push("[#"+e.iid+"]("+e.web_url+"): "+a):"develop"===i?o.push("[#"+e.iid+"]("+e.web_url+"): "+a):"compatible"===i?l.push("[#"+e.iid+"]("+e.web_url+"): "+a):s.push("[#"+e.iid+"]("+e.web_url+"): "+a),e}),r.length&&(t+="\n#### Feature Updated\n",r.map(function(e,a){return t=t+ ++a+". "+e+"\n",e})),l.length&&(t+="\n#### Compatible\n",l.map(function(e,a){return t=t+ ++a+". "+e+"\n",e})),s.length&&(t+="\n#### Bug Fixed\n",s.map(function(e,a){return t=t+ ++a+". "+e+"\n",e})),o.length&&(t+="\n#### Developer Issue\n",o.map(function(e,a){return t=t+ ++a+". "+e+"\n",e})),i.setState({value:t}),f()(".loading").hide()})}else _.a.fire({type:"error",title:"Oops...",text:"Something went wrong!"}),f()(".loading").hide()})},n.release=Object(c.a)(i.a.mark(function e(){var t,a,s,r,o,l,u,p,d;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.fire({title:"Are you sure?",text:"Do you really want to release?",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Release!"});case 2:if(!e.sent.value){e.next=18;break}return f()(".loading").show(),t=f()("#mile_stones").children("option:selected").val(),a=f()("#mile_stones").children("option:selected").html(),s=f()("#mile_stones").children("option:selected").attr("milestoneId"),r=f()("#mile_stones").children("option:selected").html(),o="",l=Object(m.a)(n),u="",p="",n.repository.map(function(e,a){return t.includes(e.repos)&&r.includes("v"+e.release_branch)&&(o=e.projectId,u=e.release_branch,p=f()("#mile_stones").children("option:selected").html()),e}),e.next=16,N.getIssueFromMileStone(o,a);case 16:(d=e.sent).ok?d.json().then(function(){var e=Object(c.a)(i.a.mark(function e(t){var n,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.closeIssueList(t);case 2:n=N.closeMileStone(o,s),p=p.slice(p.indexOf("v"+u),p.length),c=N.release(o,p,u,r,l.state.value,[a]),Promise.all([n,c]).then(function(e){var t=e[1];t.ok?t.json().then(function(e){_.a.fire({title:"<strong>Released!</strong>",type:"success",html:"<b>Release "+e.name+": </b><a href='"+e._links.self+"'>"+e._links.self+"</a>",showCloseButton:!0}),f()(".loading").hide()}):(_.a.fire({type:"error",title:"Oops...",text:"Something went wrong!"}),f()(".loading").hide())});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()):(_.a.fire({type:"error",title:"Oops...",text:"Something went wrong!"}),f()(".loading").hide());case 18:case"end":return e.stop()}},e)})),n.closeIssueList=function(){var e=Object(c.a)(i.a.mark(function e(t){var a,n,s,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=[],n=Object(P.a)(t);try{for(n.s();!(s=n.n()).done;)r=s.value,a.push(N.closeIssue(r.project_id,r.iid))}catch(o){n.e(o)}finally{n.f()}return e.abrupt("return",Promise.all(a));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.state={mileStones:[],value:"",tab:"write",log:""},n.repository=x.repository,n.repoUrl=x.repoUrl,n.converter=new S.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0}),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){if(v.a.get("authorize-github-base64")||v.a.get("token"))try{this.getList()}catch(e){alert(e)}}},{key:"render",value:function(){var e=this;if(v.a.get("authorize-github-base64")||v.a.get("token"))return n.createElement(n.Fragment,null,n.createElement("div",{className:"container",id:"select_mile_stones"},n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"mile_stones",className:"font-weight-bold"},"Milestones"),n.createElement("select",{className:"form-control",name:"mile_stones",id:"mile_stones",onChange:this.generateReleaseNotes},n.createElement("option",{value:"0"},"--- Please Select MileStones ---"),this.state.mileStones.map(function(e,t){return n.createElement("option",{key:e.id,milestoneid:e.id,value:e.web_url},e.title)})))),n.createElement("div",{className:"container"},n.createElement(k.a,{onChange:this.handleValueChange,onTabChange:this.handleTabChange,value:this.state.value,generateMarkdownPreview:function(t){return Promise.resolve(e.converter.makeHtml(t))},selectedTab:this.state.tab})),n.createElement("br",null),n.createElement("div",{className:"container"},n.createElement("button",{className:"btn btn-primary",onClick:this.release},"RELEASE"),n.createElement("br",null),n.createElement("br",null)))}}]),a}(n.Component),F=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).login=function(){var e=Object(c.a)(i.a.mark(function e(t){var a,s,r,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object(m.a)(n),s=f()(".loading"),r=f()("#token"),t.preventDefault(),!r.val()){e.next=20;break}return o=r.val(),s.show(),e.prev=7,e.next=10,N.checkLoginToken(o);case 10:e.sent.ok?(v.a.set("token",o),a.setState({login:!0})):_.a.fire({type:"error",title:"Oops...",text:"Something went wrong!"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),_.a.fire({type:"error",title:"Oops...",text:"Something went wrong!"});case 17:s.hide(),e.next=21;break;case 20:_.a.fire({type:"error",title:"Oops...",text:"Please re-fill information!"});case 21:case"end":return e.stop()}},e,null,[[7,14]])}));return function(t){return e.apply(this,arguments)}}(),n.logout=function(){var e=Object(c.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=Object(m.a)(n),e.prev=2,e.next=5,_.a.fire({title:"Are you sure?",text:"Do you really want to logout",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Log out!"});case 5:e.sent.value&&(v.a.remove("authorize-github-base64"),v.a.remove("token"),a.setState({login:!1})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),v.a.get("authorize-github-base64")||v.a.get("token")?n.state={login:!0}:n.state={login:!1},n}return Object(p.a)(a,[{key:"render",value:function(){return this.state.login?n.createElement(y.a,null,n.createElement("div",{className:"loading"},"Loading\u2026"),n.createElement("nav",{className:"navbar navbar-expand navbar-light bg-light"},n.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},n.createElement("div",{className:"navbar-nav"},n.createElement(y.b,{className:"nav-item nav-link",to:"/issue"},"Create Issue"),n.createElement(y.b,{className:"nav-item nav-link",to:"/milestone/"},"Create Milestone"),n.createElement(y.b,{className:"nav-item nav-link",to:"/release/"},"Create Release"),n.createElement(y.b,{className:"nav-item nav-link",to:"#",onClick:this.logout},"Logout")))),n.createElement("div",{className:"container container-fluid"},n.createElement("aside",{className:"col-sm-12"},n.createElement(w.a,{exact:!0,path:"/",component:I}),n.createElement(w.a,{exact:!0,path:"/issue",component:I}),n.createElement(w.a,{exact:!0,path:"/milestone/",component:D}),n.createElement(w.a,{exact:!0,path:"/release/",component:R})))):n.createElement(y.a,null,n.createElement("div",{className:"loading"},"Loading\u2026"),n.createElement("div",{className:"container container-fluid"},n.createElement("aside",{className:"col-sm-8",id:"form_wrapper"},n.createElement("div",{className:"card"},n.createElement("article",{className:"card-body"},n.createElement("h4",{className:"card-title text-center mb-4 mt-1"},"Sign in"),n.createElement("hr",null),n.createElement("form",{id:"login_form"},n.createElement("div",{className:"form-group"},n.createElement("div",{className:"input-group"},n.createElement("input",{id:"token",name:"token",className:"form-control",placeholder:"GitLab Token",type:"text"}))),n.createElement("div",{className:"form-group"},n.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:this.login}," Login"))))))))}}]),a}(n.Component),M=document.getElementById("root");o.a.render(n.createElement(F,null),M);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.984a9aa1.chunk.js.map