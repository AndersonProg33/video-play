let listaDeVideo = document.querySelectorAll('.listasVideos .vid');

let meuVideo = document.querySelector('.meuVideo video');

let titulo = document.querySelector('.meuVideo .titulo');
let comerc = document.querySelector('.trailers');
listaDeVideo.forEach(video =>{
    video.onclick= () =>{
        listaDeVideo.forEach(vid => vid.classList.remove('ativado'));
        video.classList.add('ativado');
        if(video.classList.contains('ativado')){
            let src = video.children[0].getAttribute('src');
            meuVideo.src = src;
            let text = video.children[1].innerHTML;
            titulo.innerHTML=text;
        };

    };
});
function pausa(){
    if(comerc==play){
        listaDeVideo=pauser;

    }
}