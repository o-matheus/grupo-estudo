document.querySelectorAll('.copy').forEach(button=>button.addEventListener('click',async()=>{
  const box=button.closest('.codeblock'), text=box.querySelector('code').textContent;
  try{await navigator.clipboard.writeText(text);button.textContent='Copiado';setTimeout(()=>button.textContent='Copiar',1500);document.getElementById('copy-status').textContent='Código copiado.';}
  catch{let area=box.querySelector('textarea');if(!area){area=document.createElement('textarea');area.readOnly=true;area.setAttribute('aria-label','Código para copiar com Ctrl+C ou ⌘C');box.append(area);}area.value=text;area.focus();area.select();document.getElementById('copy-status').textContent='Copie manualmente o código selecionado.';}
}));
