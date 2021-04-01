function dotaBuff(){
    const name = 'thiguis' //tipo de variável String
    const idade = 30 //tipo de variável número int
    const isMale = true // tipo de variável boolean
    const hero = {
        name: 'sven',
        moveSpeed: 350,
        imagem:'https://i.pinimg.com/originals/90/50/51/905051a703112293ec910b62aacd58ca.jpg',
        skills: [
            {name:'soco voador',description: 'voa e estuna o maluco',damage:500},
            {name:'dano em area',description:'dano passivo em area',damage:30},
            {name:'corrida forte',description:'corre e ganha armadura',damage:0},
            {name:'fibradão',description:'fica forte e vermeião',damage:'cabuloso'}
        ]//um tipo de variável array
    }//tipo de variável objeto

   return (
     <div className='App App-header'>
         <img src={hero.imagem} className='heroImage'></img>
         <div>
             nome: {hero.name}
         </div>
         <div>
             move speed: {hero.moveSpeed}
         </div>
         {
             hero.skills.map(item => 
             <div className = 'heroItem'>
                 <div>
                     name: {item.name}
                 </div>
                 <div>
                     description: {item.description}
                 </div>
                 <div>
                     damage: {item.damage}
                 </div>
                 
             </div>
             )
         }
     </div>
  )
}
export default dotaBuff