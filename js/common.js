function toggleVisiblities(id_element,is_inline,is_table){

 var eTarget = document.getElementById(id_element);
 if(is_inline == 1){
  if(eTarget.style.display != "none"){eTarget.style.display = "none";}
  else{eTarget.style.display = "inline-block";}
 }else{
  if(is_table == 1){
   if(eTarget.style.display != "none"){eTarget.style.display = "none";}
   else{eTarget.style.display = "block";}
  }else{
   if(eTarget.style.display != "none"){eTarget.style.display = "none";}
   else{eTarget.style.display = "table";}
  }
 }

}

function openMailAddr(elem){
 var mailaddr = elem.dataset.name +"@"+ elem.dataset.domain +"."+ elem.dataset.tld;
 window.location.href = "mailto:"+ mailaddr;
}