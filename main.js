//objeto
const linksSocialMedia = {
  github: 'jordanferreiraa',
  youtube: 'jordanferreira',
  instagram: 'jordanferreirae',
  facebook: 'jordanferreirae',
  twitter: 'jordanferreirae'
}
//função para mudar os links
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    //o li é referente a cada filho que existe dentro da tag ul
    const social = li.getAttribute('class') //está armazenando na 'social' o atributo da class do li
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}` //está pegando o href do primeiro filho(0) do li. ${} para ele ententer q no meio do texto, tem uma variável
  }
}
//chamando função
changeSocialMediaLinks()

function getGitHubProfileInfors(){
  //poderia ser assim, mas ja criamos o objeto linksocialmedia
  //const url = "https://api.github.com/users/jordanferreiraa"

  //template string
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  //fetch vai bater na url da api, vai pegar o arquivo (json) que a api responde e vai trazer para dentro
  //then é uma promise(promessa) para pegar respostas de alguma coisa
  //arrow fuctions é uma forma contraida da função,
  //a linha 31 ta pegando a resposta do fetch e tranformando em json (o arquivo que eu vou pegar ja vai ser um json, mas o fatch nao sabe, por isso que eu especifico)
  fetch(url)
  .then(response => response.json())
  //um then pega a resposta do outro. como eu ja transfomei, a variavel data vai ser um json
  .then(data => {
    //estou acessando a api do git para pegar informações do meu perfil para colocar no crachá
    userName.textContent = data.name
    userBio.textContent = data.bio
    userProfile.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })

}

getGitHubProfileInfors()