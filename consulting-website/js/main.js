if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  AOS.init({disable:true});
}else{
  AOS.init({duration:800,once:true});
}
const tabla={
  "Luminaria LED":{res:"237/24",norma:"IEC 60598-1"},
  "Cargador USB":{res:"237/24",norma:"IEC 62368-1"},
  "Microondas":{res:"16/25",norma:"IEC 60335-2-25"},
  "Heladera":{res:"16/25",norma:"IEC 60335-2-24"}
};
const form=document.querySelector('#form-contacto');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(e.target);
    const prod=data.get('producto');
    const info=tabla[prod]||{res:'—',norma:'—'};
    const cuerpo=`Cliente: ${data.get('nombre')}\nEmail: ${data.get('email')}\nProducto: ${prod}\nResolución: ${info.res}\nNorma: ${info.norma}\nMensaje: ${data.get('mensaje')}`;
    window.location.href=`mailto:consultingstdar@gmail.com?subject=Solicitud de cotización – ${prod}&body=${encodeURIComponent(cuerpo)}`;
    e.target.reset();
  });
}
