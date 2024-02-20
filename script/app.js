
const criptografar = () => {
    const textoEntrada = document.querySelector('.conteudo__input').value;

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
    if (!textoEntrada) {
        const area = document.querySelector('.conteudo__div__resp');
        let text = document.createElement('h1');
        text.className = 'notFound__text';
        text.innerHTML = "Não há nenhuma mensagem para criptografar";
        area.appendChild(text)
        toggle();

    }

    document.querySelector('.conteudo__input').value = '';
    copy();

}


const descriptografar = () => {
    const textoEntrada = document.querySelector('.conteudo__input').value;

    const textoDescript = textoEntrada
        .replaceAll('ai', 'a')
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');

    document.querySelector('.conteudo__div__resp__result').innerHTML = textoDescript;
    
    if (!textoEntrada) {
        const area = document.querySelector('.conteudo__div__resp');
        let text = document.createElement('h1');
        text.className = 'notFound__text';
        text.innerHTML = "Não há nenhuma mensagem para criptografar";
        area.appendChild(text)
        toggle();
    }

    if(document.querySelector('.conteudo__div__resp__copy')){
        document.querySelector('.conteudo__div__resp__copy').remove();
    }

    document.querySelector('.conteudo__input').value = '';
    copy();


}

const toggle = () => {
    const resp = document.querySelector('.conteudo__div__resp')

    let img = document.createElement('img');
    img.src = "./assets/notFound.svg";
    img.className = "img";
    resp.appendChild(img);

}


const copy = () => {

        let btn = document.createElement('button');
        btn.className = 'conteudo__div__resp__copy';
        btn.innerHTML = 'Copiar'
        document.querySelector('.conteudo__div__resp').appendChild(btn);

        btn.onclick = () => {
            document.querySelector('.conteudo__div__resp__copy').innerHTML = 'Copiado!';
            setTimeout(() => {
                document.querySelector('.conteudo__div__resp__copy').innerHTML = 'Copiar';
            }, 1000);
        }

    const value = document.querySelector('.conteudo__div__resp__result').innerHTML;
    console.log(value)
    navigator.clipboard.writeText(value);
}


const removeImage = () => {
    let outputImage = document.getElementById('img-output');
    let outputText = document.getElementById('output-text');
    outputImage.style.display = 'none';
    outputText.style.display = 'none';
}


