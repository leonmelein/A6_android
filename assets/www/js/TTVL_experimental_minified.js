var n,tijdNu=new Date();function TijdVolgendeUur(){n=document.getElementById("pauze").innerHTML;tijdNu=new Date();if(n=="n"){n=LeraarPauze()}else{if(n=="H"||n=="A"){n+=n}}var c=TijdVerschil(),i=c[0],h=c[1];if(tijdNu.getDay()!=0&&tijdNu.getDay()!=6&&i>0){var d=VakLokaal(h),e=d[0],a=d[2];d=d[1];var f=VakLokaal(h+1),g=f[0],b=f[2];f=f[1];WriteHTML(e,a,d,g,b,f,i+" min")}else{if(n!=undefined){WriteHTML()}}}function LeraarPauze(){var d=document.getElementById("TTVLd"+tijdNu.getDay()+"u"+3).innerHTML,b;if(d=="&nbsp;"){b="A"}else{if(d.split("</br>")[0][1]=="H"){b="H"}else{b="A"}}var c=document.getElementById("TTVLd"+tijdNu.getDay()+"u"+6).innerHTML,a;if(c=="&nbsp;"){a="A"}else{if(c.split("</br>")[0][1]=="H"){a="H"}else{a="A"}}return b.concat(a+"L")}function TijdVerschil(){var a=[],c;a[0]={uur:8,minuut:10};a[1]={uur:9,minuut:0};a[2]={uur:9,minuut:50};a[3]=(n[0]=="H")?{uur:10,minuut:5}:{uur:10,minuut:40};a[4]={uur:10,minuut:55};a[5]={uur:11,minuut:45};a[6]=(n[1]=="H")?{uur:12,minuut:10}:{uur:12,minuut:35};a[7]={uur:13,minuut:0};a[8]={uur:13,minuut:50};a[9]={uur:14,minuut:40};a[10]={uur:14,minuut:50};a[11]={uur:15,minuut:40};a[12]={uur:16,minuut:30};for(var b=0;b<a.length;b++){c=(a[b].uur-tijdNu.getHours())*60+(a[b].minuut-tijdNu.getMinutes());if(c>0){return[c,b]}}return[0,12]}function VakLokaal(d){var b,c;switch(d){case 0||13:d="";break;case ((n[0]=="H")?3:4):d="P1";c="Pauze";break;case ((n[1]=="H")?6:7):d="P2";c="Pauze";break;case 10:d="P3";c="Pauze";break;default:if(d>9){d-=3}else{if(d>((n=="H")?5:6)){d-=2}else{if(d>((n=="H")?2:3)){d-=1}}}var a=document.getElementById("TTVLd"+tijdNu.getDay()+"u"+d);if(a!=null){c=a.innerHTML}else{c="&nbsp;"}if(c!="&nbsp;"){if(n.length==3){b=c.split("<br>")[1].split(" ")[1];c=c.split("<br>")[0]+" "+c.split("<br>")[1].split(" ")[0]}else{b=c.split("<br>")[2].replace("1","");c=VakReplace(c.split("<br>")[0])}}else{c=""}}return[d,c,b]}function VakReplace(c){var b={wisA:"Wiskunde A",wisB:"Wiskunde B",wisC:"Wiskunde C",wisD:"Wiskunde D",nat:"Natuurkunde",schk:"Scheikunde",biol:"Biologie","in":"Informatica",lit:"Literatuur",ak:"Aardrijkskunde",ges:"Geschiedenis",maw:"Maatschappijwet.",maat:"Maatschappijleer",mu:"Muziek",econ:"Economie",fi:"Filosofie","m&amp;o":"M&amp;O",nezl:"Nederlands",netl:"Nederlands",enzl:"Engels",entl:"Engels",duzl:"Duits",dutl:"Duits",fazl:"Frans",fatl:"Frans",grtl:"Grieks",latl:"Latijn",lo:"LO",ckv:"CKV",kcv:"KCV",anw:"ANW",bevo:"Bevo",te:"Tekenen",bsm:"BSM",tdd:"Teamdagdeel",mt:"Mentorles",MTU:"Mentorles"};for(var a in b){if(c==a){c=c.replace(a,b[a]);break}}return c}function WriteHTML(c,a,b,g,e,f,d){document.getElementById("TTVLhu").innerHTML=c||"-";document.getElementById("TTVLhv").innerHTML=b||"------";document.getElementById("TTVLhl").innerHTML=a||"-";document.getElementById("TTVLt").innerHTML=d||"-------";document.getElementById("TTVLvu").innerHTML=g||"-";document.getElementById("TTVLvv").innerHTML=f||"------";document.getElementById("TTVLvl").innerHTML=e||"-"};