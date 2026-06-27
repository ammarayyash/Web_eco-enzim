document.addEventListener('DOMContentLoaded',function(){
  const editable = document.querySelectorAll('.editable-image');
  const fileInput = document.getElementById('img-file-input');
  let currentTarget = null;

  editable.forEach(img=>{
    img.style.cursor='pointer';
    img.addEventListener('click',()=>{
      currentTarget = img;
      fileInput.click();
    })
  })

  fileInput.addEventListener('change', e=>{
    const file = e.target.files && e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = function(ev){
      if(currentTarget) currentTarget.src = ev.target.result;
    }
    reader.readAsDataURL(file);
    fileInput.value='';
  })

  // video change
  const changeVideoBtn = document.getElementById('change-video');
  const iframe = document.getElementById('video-iframe');
  changeVideoBtn.addEventListener('click',()=>{
    const url = prompt('Tempelkan URL YouTube (mis. https://www.youtube.com/watch?v=VIDEO_ID):');
    if(!url) return;
    const idMatch = url.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/);
    const vid = idMatch ? idMatch[1] : null;
    if(vid) iframe.src = `https://www.youtube.com/embed/${vid}`;
    else alert('URL tidak dikenali. Gunakan URL YouTube yang valid.');
  })

  // whatsapp button
  const waBtn = document.getElementById('whatsapp-btn');
  waBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const phone = waBtn.dataset.phone || '+628xxxxxxxxxx';
    const text = encodeURIComponent('Halo, saya ingin mendapat informasi pembagian Eco Enzim gratis.');
    const link = `https://wa.me/${phone.replace(/[^0-9+]/g,'')}?text=${text}`;
    window.open(link,'_blank');
  })
})
