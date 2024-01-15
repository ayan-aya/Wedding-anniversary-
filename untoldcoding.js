var i = 0;
var txt1 =
  "Hi Love.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < you get closer to me....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...!                     << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...!                                                     > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....   ab ham apni lines likhi hui hai wo bataate hai 👀💕 dhyaan se dekhna          Meri pyaari patni ko, humare pehle mahine ki saalgirah mubarak ho. Is khoobsurat din par, dil se dua hai ki humara pyaar hamesha barkarar rahe. Saalgirah ki is khushi mein, tumhari muskurahat hi sab kuch hai. Yeh pehla mahina hai, lekin humara pyaar abhi se itna gehra hai ki lagta hai, humein hamesha se pata tha ek doosre ke bina jeena mushkil hai. Tumhare saath bitaye iss mahine ne humein aur bhi karib laakar humare rishte ko aur bhi mazboot bana diya hai. Saalgirah mubarak ho, meri zindagi ka sabse pyaara tohfa tum ho. Tumhare bina yeh mahina adhoora hota, tum mere liye sab kuch ho. Is pyaare din par, humein yaad aaya ki har pal tumhare saath bitana kitna khaas hai. Pyaar bhare is safar mein, har kadam par tumhare saath chalna humare liye anmol hai. Saalgirah ki is mauke par, main bas itna kehna chahta hoon ki tum meri zindagi ka sabse bada khazana ho. Tumhari muskurahat se har din roshan hota hai, aur yeh pyaar bhara mahina hai humare liye                                             Saalgirah mubarak ho, meri jaan. Tumse milke har pal meetha lagta hai. Yeh pehla mahina hai, lekin lagta hai hum sath mein hamesha ke liye hain. Tumhare saath guzre har pal ne humein sikha diya ki sachha pyaar kya hota hai. Tum mere liye nahi, humare liye banayi gayi ho. Saalgirah ki is khushi mein, dil se mubarak ho. Is mahine mein humne ek doosre ko aur bhi gehra samajhna shuru kiya hai. Saalgirah mubarak ho, meri pyaari patni. Tum meri zindagi ka sabse bada support ho. Yeh pehla mahina hai, lekin humein lagta hai jaise hum saath mein hamesha ke liye hain. Tumhare bina yeh mahina adhoora hota, tum meri khushi ka raaz ho. Is pyaare din par, main sirf itna kehna chahta hoon ki tum meri zindagi mein roshni lekar aayi ho. Saalgirah ki is khushi mein, congratulations sneha 💕💫👀                                                       >I Love U <Sneha (#suarni)😂💝👀.....!                  <<<< ab dekho vada kiya hai to life time nibhayenge saath jaroor denge  ...!   by ayan";
var speed = 80;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
