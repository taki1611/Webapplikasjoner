//import './styles.css';  //Måtte kommentere ut denne da jeg fikk en feilmelding i console

const text =
  'Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.';

const longestWord = () => {

  var array = text.split(",");  //Bruker text.split

  for (var i = 0; i < array.length; i++) {    //Velger her å iterere gjennom array som er laget og deretter splitte første ord.
    var forsteOrd = array[i].split(" ");
    console.log(forsteOrd[0]);
  }

// TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre
var longestWord = 0;
    for(var i = 0; i < array.length; i++) {   //Her prøvde jeg å løse oppgaven ved å lage enda en for loop og en if-statement, men får undefined som output. Selv om jeg prøvde denne metoden får jeg 356 som output.
      if(array[i].length > longestWord) {
        longestWord = array[i].length;
      }
    }
    return longestWord;
}

console.log(longestWord());
