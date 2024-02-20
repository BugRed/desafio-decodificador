
const criptografar = () => {

    const textoEntrada = document.querySelector('.conteudo__input').value;

    if (textoEntrada) {
        outNotFoud()
        const listChar = textoEntrada.split('');
        const textoEncript = [];

        for (const char of listChar) {
            switch (char) {
                case 'e':
                    textoEncript.push('enter');
                    break;
                case 'i':
                    textoEncript.push('imes');
                    break;
                case 'a':
                    textoEncript.push('ai');
                    break;
                case 'o':
                    textoEncript.push('ober');
                    break;
                case 'u':
                    textoEncript.push('ufat');
                    break;
                default:
                    textoEncript.push(char);
            }
        }
        document.querySelector('.conteudo__div__resp__result').innerHTML = textoEncript.join('');
        copy();

        document.querySelector('.conteudo__input').value = '';

    } else {
        showCopy()
    }

}


const descriptografar = () => {
    const textoEntrada = document.querySelector('.conteudo__input').value;

    if (textoEntrada) {
        outNotFoud()
        const textoDescript = textoEntrada
            .replaceAll('ai', 'a')
            .replaceAll('enter', 'e')
            .replaceAll('imes', 'i')
            .replaceAll('ober', 'o')
            .replaceAll('ufat', 'u');

        document.querySelector('.conteudo__div__resp__result').innerHTML = textoDescript;

        document.querySelector('.conteudo__input').value = '';

        copy();
    } else {
        showCopy()
    }

}

const toggle = () => {

    if (ocument.querySelector('.conteudo__div__resp__copy')) {
        document.querySelector('.conteudo__div__resp__copy').remove();
    }

}


const copy = () => {

    document.querySelector('.conteudo__div__resp__copy').onclick = () => {
        document.querySelector('.conteudo__div__resp__copy').innerHTML = 'Copiado!';
        setTimeout(() => {
            document.querySelector('.conteudo__div__resp__copy').innerHTML = 'Copiar';
        }, 1000);
    }

    const value = document.querySelector('.conteudo__div__resp__result').innerHTML;
    navigator.clipboard.writeText(value);
}


const outNotFoud = () => {
    document.getElementById('copy').style.display = 'inline';
    document.getElementById('result').style.display = 'inline';
    document.getElementById('imagem').style.display = 'none';
    document.getElementById('notFound__text').style.display = 'none';
}

const showCopy = () => {
    document.getElementById('imagem').style.display = 'flex';
    document.getElementById('notFound__text').style.display = 'flex';
    document.getElementById('copy').style.display = 'none';
    document.getElementById('result').style.display = 'none';
}


//troca de imagem conforme click
// let cont = 0;

// const behavior = function() {
//   btn.addEventListener("click", function(){
//   count++;
//   (count % 2 === 0) ? showImage() : hideImage();
// }
// behavior();
