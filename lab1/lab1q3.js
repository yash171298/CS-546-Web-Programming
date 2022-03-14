const questionThree = function questionThree(text)
{
  let vowels = 'aeiouAEIOU';
  let vcount = 0;
  let consonants = 0;
  let space = 0;
  let numbers = 0;
  let punctuations = 0;
  let specialcharacters = 0;
  
  for(let x = 0; x < text.length ; x++)
  {
    if (vowels.indexOf(text[x]) !== -1)
    {
      vcount += 1;
    }
    if(text[x] == ' ')
    {
        space += 1;
    }
    if( text[x] == 'b'|| text[x] == 'c'|| text[x] == 'd'|| text[x] == 'f'|| text[x] == 'g'|| text[x] == 'h'|| text[x] == 'j'|| text[x] == 'k'|| text[x] == 'l'|| text[x] == 'm'|| text[x] == 'n'|| text[x] == 'p'|| text[x] == 'q'|| text[x] == 'r'|| text[x] == 's'|| text[x] == 't'|| text[x] == 'v'|| text[x] == 'w'|| text[x] == 'x'|| text[x] == 'y'|| text[x] == 'z'
    || text[x] == 'B'|| text[x] == 'C'|| text[x] == 'D'|| text[x] == 'F'|| text[x] == 'G'|| text[x] == 'H'|| text[x] == 'J'|| text[x] == 'K'|| text[x] == 'L'|| text[x] == 'M'|| text[x] == 'N'|| text[x] == 'P'|| text[x] == 'Q'|| text[x] == 'R'|| text[x] == 'S'|| text[x] == 'T'|| text[x] == 'V'|| text[x] == 'W'|| text[x] == 'X'|| text[x] == 'Y'|| text[x] == 'Z') 
    {consonants += 1}
    if(text[x] =='1'|| text[x] == '2' || text[x]== '3'||text[x]== '4'||text[x]== '5'||text[x]== '6'||text[x]== '7'||text[x]== '8'||text[x]== '8'||text[x]== '9'||text[x]== '0')
     {
      numbers += 1;
     }
    if(text[x] == ';'||text[x] == '"'||text[x] == '?'||text[x] == '.'||text[x] == ')'||text[x] == '('||text[x] == '!'||text[x] == '_'||text[x] == '-'||text[x] == ','||text[x] == ':'||text[x] == ']'||text[x] == '['||text[x] == ',')
    {
        punctuations += 1;
    }
    if(text[x] == '`'||text[x] == '*'||text[x] == '&'||text[x] == '^'||text[x] == '%'||text[x] == '$'||text[x] == '#'||text[x] == '@')
    {
        specialcharacters += 1;
    }

  }
  return {vcount , consonants , space , numbers , punctuations , specialcharacters};

}
console.log(questionThree("The quick brown fox jumps over the lazy dog.$%"));

console.log(questionThree("The quick brown fox jumps over the lazy dog."));


