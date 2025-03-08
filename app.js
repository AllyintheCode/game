//İlk öncə func yaradılır
function Game(İstifadəçininSeçdiyi) {
  // Seçimlər dəyişəni yaradırığ və 3 seçim əlavə edirik
  let Seçimlər = ["daş", "kağız", "qayçı"];
  //Math.random() hazır funksiyasi vasitəsilə  0 ilə 1 arasında təsadüfi rəqəm seçilir
  //Math.random()*3 3-ə vurulmağının səbəbi seçimi 1-dən 3-ə qaldırmağdır 0 ilə 3 arasında təsadüfi rəqəm seçilir
  //Math.floor(Math.random() * 3) math.floor hazır funksiyası ədədin ən yaxın aşağı tam həddinə çevirir 
  //Seçimlər[] ifadəsi vasitəsilə hazır funksiyadan çıxan rəqəm ilə seçimlərdən biri seçilir
  //Çıxan nəticə komputerin seçəcəyi dəyişənə mənimsədilir
  let KompSeçəcəyi = Seçimlər[Math.floor(Math.random() * 3)];


  //Konsola Sənin seçimin: yazısı və seçimin çıxır
  console.log("Sənin seçimin: " + İstifadəçininSeçdiyi);
  //Konsola Kampüterin seçimi: yazısı və Kampüterin seçimi çıxır
  console.log("Kompüterin seçimi: " + KompSeçəcəyi);

  //Şərt qoyulur əgər sənin seçimin :İstifadəçininSeçdiyi bərabərdirsə Kompüterin seçdiyinə :KompSeçəcəyi 
  // O zaman Oyun Bərabərə bitti! yazısı ekrana çıxır
  if (İstifadəçininSeçdiyi === KompSeçəcəyi) {
    console.log("Oyun Bərabərə bitti!");
    //Digər halda İstifadəçininSeçdiyi === daşa və KompSeçəcəyi === qayçıya
    //İstifadəçininSeçdiyi === kağıza və KompSeçəcəyi === daşa 
    //İstifadəçininSeçdiyi === qayçıa və KompSeçəcəyi === kağıza bərabərdirsə
  } else if (
    (İstifadəçininSeçdiyi === "daş" && KompSeçəcəyi === "qayçı") ||
    (İstifadəçininSeçdiyi === "kağız" && KompSeçəcəyi === "daş") ||
    (İstifadəçininSeçdiyi === "qayçı" && KompSeçəcəyi === "kağız")
  ) {
    //Yuxaridaki hallar doğru olduğda ekrana Təbriklər sən qalib gəldin! yazısı çıxır
    console.log("Təbriklər sən qalib gəldin!");
    //Qalan bütün hallarda kompüyüter qazanacı üçün ekrana Çox təəssüflər olsun ,Kompüter qalib gəldi! yazısı çıxır
  } else {
    console.log("Çox təəssüflər olsun ,Kompüter qalib gəldi!");
  }
}

//Burada isə funksiyani çağırarağ nə oynamağ istədiyinizi daxil edirsiniz
Game("daş"); // Burada "daş", "kağız" və ya "qayçı" seçim edirsiniz
