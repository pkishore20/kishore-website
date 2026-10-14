document.getElementById('yr').textContent=new Date().getFullYear();
const menu=document.getElementById('menu');
document.getElementById('toggle').onclick=()=>menu.classList.toggle('open');
menu.querySelectorAll('a').forEach(a=>a.onclick=()=>menu.classList.remove('open'));
const roles=['Laravel','PHP','REST APIs','PostgreSQL','MySQL'];let i=0;
setInterval(()=>{i=(i+1)%roles.length;document.getElementById('role').textContent=roles[i]},2000);
const els=document.querySelectorAll('.card,.item,.title');els.forEach(e=>e.classList.add('reveal'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.1});
els.forEach(e=>io.observe(e));
document.getElementById('form').onsubmit=e=>{e.preventDefault();const f=e.target;
location.href='mailto:kishorekumarpp20@gmail.com?subject='+encodeURIComponent('Portfolio message from '+f.name.value)+'&body='+encodeURIComponent(f.msg.value+'

'+f.name.value+'
'+f.email.value+'
'+f.phone.value)};