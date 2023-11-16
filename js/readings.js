// Use getMonth to get the month index from 0 to 11
// Use getDate to get the day of month from 1 to 31
var ___readings =
[
   [  // January (DONE)
      [{ "portion": ["Ge1", "Ge2"], "desc": "Genesis 1-2" }, { "portion": ["Psa1", "Psa2"], "desc": "Psalms 1-2" }, { "portion": ["Mat1", "Mat2"], "desc": "Matthew 1-2" }], // 1
      [{ "portion": ["Ge3", "Ge4"], "desc": "Genesis 3-4" }, { "portion": ["Psa3", "Psa4", "Psa5"], "desc": "Psalms 3-5" }, { "portion": ["Mat3", "Mat4"], "desc": "Matthew 3-4" }], // 2
      [{ "portion": ["Ge5", "Ge6"], "desc": "Genesis 5-6" }, { "portion": ["Psa6", "Psa7", "Psa8"], "desc": "Psalms 6-8" }, { "portion": ["Mat5"], "desc": "Matthew 5" }], // 3
      [{ "portion": ["Ge7", "Ge8"], "desc": "Genesis 7-8" }, { "portion": ["Psa9", "Psa10"], "desc": "Psalms 9-10" }, { "portion": ["Mat6"], "desc": "Matthew 6" }], // 4
      [{ "portion": ["Ge9", "Ge10"], "desc": "Genesis 9-10" }, { "portion": ["Psa11", "Psa12", "Psa13"], "desc": "Psalms 11-13" }, { "portion": ["Mat7"], "desc": "Matthew 7" }], // 5
      [{ "portion": ["Ge11", "Ge12"], "desc": "Genesis 11-12" }, { "portion": ["Psa14", "Psa15", "Psa16"], "desc": "Psalms 14-16" }, { "portion": ["Mat8"], "desc": "Matthew 8" }], // 6
      [{ "portion": ["Ge13", "Ge14"], "desc": "Genesis 13-14" }, { "portion": ["Psa17"], "desc": "Psalms 17" }, { "portion": ["Mat9"], "desc": "Matthew 9" }], // 7
      [{ "portion": ["Ge15", "Ge16"], "desc": "Genesis 15-16" }, { "portion": ["Psa18"], "desc": "Psalms 18" }, { "portion": ["Mat10"], "desc": "Matthew 10" }], // 8
      [{ "portion": ["Ge17", "Ge18"], "desc": "Genesis 17-18" }, { "portion": ["Psa19", "Psa20", "Psa21"], "desc": "Psalms 19-21" }, { "portion": ["Mat11"], "desc": "Matthew 11" }], // 9
      [{ "portion": ["Ge19"], "desc": "Genesis 19" }, { "portion": ["Psa22"], "desc": "Psalms 22" }, { "portion": ["Mat12"], "desc": "Matthew 12" }], // 10
      [{ "portion": ["Ge20", "Ge21"], "desc": "Genesis 20-21" }, { "portion": ["Psa23", "Psa24", "Psa25"], "desc": "Psalms 23-25" }, { "portion": ["Mat13"], "desc": "Matthew 13" }], // 11
      [{ "portion": ["Ge22", "Ge23"], "desc": "Genesis 22-23" }, { "portion": ["Psa26", "Psa27", "Psa28"], "desc": "Psalms 26-28" }, { "portion": ["Mat14"], "desc": "Matthew 14" }], // 12
      [{ "portion": ["Ge24"], "desc": "Genesis 24" }, { "portion": ["Psa29", "Psa30"], "desc": "Psalms 29-30" }, { "portion": ["Mat15"], "desc": "Matthew 15" }], // 13
      [{ "portion": ["Ge25", "Ge26"], "desc": "Genesis 25-26" }, { "portion": ["Psa31"], "desc": "Psalms 31" }, { "portion": ["Mat16"], "desc": "Matthew 16" }], // 14
      [{ "portion": ["Ge27"], "desc": "Genesis 27" }, { "portion": ["Psa32"], "desc": "Psalms 32" }, { "portion": ["Mat17"], "desc": "Matthew 17" }], // 15
      [{ "portion": ["Ge28", "Ge29"], "desc": "Genesis 28-29" }, { "portion": ["Psa33"], "desc": "Psalms 33" }, { "portion": ["Mat18"], "desc": "Matthew 18" }], // 16
      [{ "portion": ["Ge30"], "desc": "Genesis 30" }, { "portion": ["Psa34"], "desc": "Psalms 34" }, { "portion": ["Mat19"], "desc": "Matthew 19" }], // 17
      [{ "portion": ["Ge31"], "desc": "Genesis 31" }, { "portion": ["Psa35"], "desc": "Psalms 35" }, { "portion": ["Mat20"], "desc": "Matthew 20" }], // 18
      [{ "portion": ["Ge32", "Ge33"], "desc": "Genesis 32-33" }, { "portion": ["Psa36"], "desc": "Psalms 36" }, { "portion": ["Mat21"], "desc": "Matthew 21" }], // 19
      [{ "portion": ["Ge34", "Ge35"], "desc": "Genesis 34-35" }, { "portion": ["Psa37"], "desc": "Psalms 37" }, { "portion": ["Mat22"], "desc": "Matthew 22" }], // 20
      [{ "portion": ["Ge36"], "desc": "Genesis 36" }, { "portion": ["Psa38"], "desc": "Psalms 38" }, { "portion": ["Mat23"], "desc": "Matthew 23" }], // 21
      [{ "portion": ["Ge37"], "desc": "Genesis 37" }, { "portion": ["Psa39", "Psa40"], "desc": "Psalms 39-40" }, { "portion": ["Mat24"], "desc": "Matthew 24" }], // 22
      [{ "portion": ["Ge38"], "desc": "Genesis 38" }, { "portion": ["Psa41", "Psa42", "Psa43"], "desc": "Psalms 41-43" }, { "portion": ["Mat25"], "desc": "Matthew 25" }], // 23
      [{ "portion": ["Ge39", "Ge40"], "desc": "Genesis 39-40" }, { "portion": ["Psa44"], "desc": "Psalms 44" }, { "portion": ["Mat26"], "desc": "Matthew 26" }], // 24
      [{ "portion": ["Ge41"], "desc": "Genesis 41" }, { "portion": ["Psa45"], "desc": "Psalms 45" }, { "portion": ["Mat27"], "desc": "Matthew 27" }], // 25
      [{ "portion": ["Ge42", "Ge43"], "desc": "Genesis 42-43" }, { "portion": ["Psa46", "Psa47", "Psa48"], "desc": "Psalms 46-48" }, { "portion": ["Mat28"], "desc": "Matthew 28" }], // 26
      [{ "portion": ["Ge44", "Ge45"], "desc": "Genesis 44-45" }, { "portion": ["Psa49"], "desc": "Psalms 49" }, { "portion": ["Rom1", "Rom2"], "desc": "Romans 1-2" }], // 27
      [{ "portion": ["Ge46", "Ge47"], "desc": "Genesis 46-47" }, { "portion": ["Psa50"], "desc": "Psalms 50" }, { "portion": ["Rom3", "Rom4"], "desc": "Romans 3-4" }], // 28
      [{ "portion": ["Ge48", "Ge49", "Ge50"], "desc": "Genesis 48-50" }, { "portion": ["Psa51", "Psa52"], "desc": "Psalms 51-52" }, { "portion": ["Rom5", "Rom6"], "desc": "Romans 5-6" }], // 29
      [{ "portion": ["Exo1", "Exo2"], "desc": "Exodus 1-2" }, { "portion": ["Psa53", "Psa54", "Psa55"], "desc": "Psalms 53-55" }, { "portion": ["Rom7", "Rom8"], "desc": "Romans 7-8" }], // 30
      [{ "portion": ["Exo3", "Exo4"], "desc": "Exodus 3-4" }, { "portion": ["Psa56", "Psa57"], "desc": "Psalms 56-57" }, { "portion": ["Rom9"], "desc": "Romans 9" }]  // 31
   ],
   [  // February (DONE)
      [{ "portion": ["Exo5", "Exo6"], "desc": "Exodus 5-6" }, { "portion": ["Psa58", "Psa59"], "desc": "Psalms 58-59" }, { "portion": ["Rom10", "Rom11"], "desc": "Romans 10-11" }], // 1
      [{ "portion": ["Exo7", "Exo8"], "desc": "Exodus 7-8" }, { "portion": ["Psa60", "Psa61"], "desc": "Psalms 60-61" }, { "portion": ["Rom12"], "desc": "Romans 12" }], // 2
      [{ "portion": ["Exo9"], "desc": "Exodus 9" }, { "portion": ["Psa62", "Psa63"], "desc": "Psalms 62-63" }, { "portion": ["Rom13", "Rom14"], "desc": "Romans 13-14" }], // 3
      [{ "portion": ["Exo10"], "desc": "Exodus 10" }, { "portion": ["Psa64", "Psa65"], "desc": "Psalms 64-65" }, { "portion": ["Rom15", "Rom16"], "desc": "Romans 15-16" }], // 4
      [{ "portion": ["Exo11", "Exo12"], "desc": "Exodus 11-12" }, { "portion": ["Psa66", "Psa67"], "desc": "Psalms 66-67" }, { "portion": ["Mark1"], "desc": "Mark 1" }], // 5
      [{ "portion": ["Exo13", "Exo14"], "desc": "Exodus 13-14" }, { "portion": ["Psa68"], "desc": "Psalms 68" }, { "portion": ["Mark2"], "desc": "Mark 2" }], // 6
      [{ "portion": ["Exo15"], "desc": "Exodus 15" }, { "portion": ["Psa69"], "desc": "Psalms 69" }, { "portion": ["Mark3"], "desc": "Mark 3" }], // 7
      [{ "portion": ["Exo16"], "desc": "Exodus 16" }, { "portion": ["Psa70", "Psa71"], "desc": "Psalms 70-71" }, { "portion": ["Mark4"], "desc": "Mark 4" }], // 8
      [{ "portion": ["Exo17", "Exo18"], "desc": "Exodus 17-18" }, { "portion": ["Psa72"], "desc": "Psalms 72" }, { "portion": ["Mark5"], "desc": "Mark 5" }], // 9
      [{ "portion": ["Exo19", "Exo20"], "desc": "Exodus 19-20" }, { "portion": ["Psa73"], "desc": "Psalms 73" }, { "portion": ["Mark6"], "desc": "Mark 6" }], // 10
      [{ "portion": ["Exo21"], "desc": "Exodus 21" }, { "portion": ["Psa74"], "desc": "Psalms 74" }, { "portion": ["Mark7"], "desc": "Mark 7" }], // 11
      [{ "portion": ["Exo22"], "desc": "Exodus 22" }, { "portion": ["Psa75", "Psa76"], "desc": "Psalms 75-76" }, { "portion": ["Mark8"], "desc": "Mark 8" }], // 12
      [{ "portion": ["Exo23"], "desc": "Exodus 23" }, { "portion": ["Psa77"], "desc": "Psalms 77" }, { "portion": ["Mark9"], "desc": "Mark 9" }], // 13
      [{ "portion": ["Exo24", "Exo25"], "desc": "Exodus 24-25" }, { "portion": ["Psa78"], "desc": "Psalms 78" }, { "portion": ["Mark10"], "desc": "Mark 10" }], // 14
      [{ "portion": ["Exo26"], "desc": "Exodus 26" }, { "portion": ["Psa79", "Psa80"], "desc": "Psalms 79-80" }, { "portion": ["Mark11"], "desc": "Mark 11" }], // 15
      [{ "portion": ["Exo27"], "desc": "Exodus 27" }, { "portion": ["Psa81", "Psa82"], "desc": "Psalms 81-82" }, { "portion": ["Mark12"], "desc": "Mark 12" }], // 16
      [{ "portion": ["Exo28"], "desc": "Exodus 28" }, { "portion": ["Psa83", "Psa84"], "desc": "Psalms 83-84" }, { "portion": ["Mark13"], "desc": "Mark 13" }], // 17
      [{ "portion": ["Exo29"], "desc": "Exodus 29" }, { "portion": ["Psa85", "Psa86"], "desc": "Psalms 85-86" }, { "portion": ["Mark14"], "desc": "Mark 14" }], // 18
      [{ "portion": ["Exo30"], "desc": "Exodus 30" }, { "portion": ["Psa87", "Psa88"], "desc": "Psalms 87-88" }, { "portion": ["Mark15", "Mark16"], "desc": "Mark 15-16" }], // 19
      [{ "portion": ["Exo31", "Exo32"], "desc": "Exodus 31-32" }, { "portion": ["Psa89"], "desc": "Psalms 89" }, { "portion": ["1Cor1", "1Cor2"], "desc": "1 Corinthians 1-2" }], // 20
      [{ "portion": ["Exo33", "Exo34"], "desc": "Exodus 33-34" }, { "portion": ["Psa90", "Psa91"], "desc": "Psalms 90-91" }, { "portion": ["1Cor3"], "desc": "1 Corinthians 3" }], // 21
      [{ "portion": ["Exo35"], "desc": "Exodus 35" }, { "portion": ["Psa92", "Psa93"], "desc": "Psalms 92-93" }, { "portion": ["1Cor4", "1Cor5"], "desc": "1 Corinthians 4-5" }], // 22
      [{ "portion": ["Exo36"], "desc": "Exodus 36" }, { "portion": ["Psa94", "Psa95"], "desc": "Psalms 94-95" }, { "portion": ["1Cor6"], "desc": "1 Corinthians 6" }], // 23
      [{ "portion": ["Exo37"], "desc": "Exodus 37" }, { "portion": ["Psa96", "Psa97", "Psa98", "Psa99"], "desc": "Psalms 96-99" }, { "portion": ["1Cor7"], "desc": "1 Corinthians 7" }], // 24
      [{ "portion": ["Exo38"], "desc": "Exodus 38" }, { "portion": ["Psa100", "Psa101"], "desc": "Psalms 100-101" }, { "portion": ["1Cor8", "1Cor9"], "desc": "1 Corinthians 8-9" }], // 25
      [{ "portion": ["Exo39", "Exo40"], "desc": "Exodus 39-40" }, { "portion": ["Psa102"], "desc": "Psalms 102" }, { "portion": ["1Cor10"], "desc": "1 Corinthians 10" }], // 26
      [{ "portion": ["Lev1", "Lev2"], "desc": "Leviticus 1-2" }, { "portion": ["Psa103"], "desc": "Psalms 103" }, { "portion": ["1Cor11"], "desc": "1 Corinthians 11" }], // 27
      [{ "portion": ["Lev3", "Lev4"], "desc": "Leviticus 3-4" }, { "portion": ["Psa104"], "desc": "Psalms 104" }, { "portion": ["1Cor12", "1Cor13"], "desc": "1 Corinthians 12-13" }], // 28
      [{ "portion": ["Lev3", "Lev4"], "desc": "Leviticus 3-4" }, { "portion": ["Psa104"], "desc": "Psalms 104" }, { "portion": ["1Cor12", "1Cor13"], "desc": "1 Corinthians 12-13" }]  // 29
   ],
   [  // March (DONE)
      [{ "portion": ["Lev5", "Lev6"], "desc": "Leviticus 5-6" }, { "portion": ["Psa105"], "desc": "Psalms 105" }, { "portion": ["1Cor14"], "desc": "1 Corinthians 14" }], // 1
      [{ "portion": ["Lev7"], "desc": "Leviticus 7" }, { "portion": ["Psa106"], "desc": "Psalms 106" }, { "portion": ["1Cor15"], "desc": "1 Corinthians 15" }], // 2
      [{ "portion": ["Lev8"], "desc": "Leviticus 8" }, { "portion": ["Psa107"], "desc": "Psalms 107" }, { "portion": ["1Cor16"], "desc": "1 Corinthians 16" }], // 3
      [{ "portion": ["Lev9", "Lev10"], "desc": "Leviticus 9-10" }, { "portion": ["Psa108", "Psa109"], "desc": "Psalms 108-109" }, { "portion": ["2Cor1", "2Cor2"], "desc": "2 Corinthians 1-2" }], // 4
      [{ "portion": ["Lev11"], "desc": "Leviticus 11" }, { "portion": ["Psa110", "Psa111", "Psa112"], "desc": "Psalms 110-112" }, { "portion": ["2Cor3", "2Cor4"], "desc": "2 Corinthians 3-4" }], // 5
      [{ "portion": ["Lev12", "Lev13"], "desc": "Leviticus 12-13" }, { "portion": ["Psa113", "Psa114"], "desc": "Psalms 113-114" }, { "portion": ["2Cor5", "2Cor6", "2Cor7"], "desc": "2 Corinthians 5-7" }], // 6
      [{ "portion": ["Lev14"], "desc": "Leviticus 14" }, { "portion": ["Psa115", "Psa116"], "desc": "Psalms 115-116" }, { "portion": ["2Cor8", "2Cor9"], "desc": "2 Corinthians 8-9" }], // 7
      [{ "portion": ["Lev15"], "desc": "Leviticus 15" }, { "portion": ["Psa117", "Psa118"], "desc": "Psalms 117-118" }, { "portion": ["2Cor10", "2Cor11"], "desc": "2 Corinthians 10-11" }], // 8
      [{ "portion": ["Lev16"], "desc": "Leviticus 16" }, { "portion": ["Psa119"], "desc": "Psalms 119:1-40" }, { "portion": ["2Cor12", "2Cor13"], "desc": "2 Corinthians 12-13" }], // 9
      [{ "portion": ["Lev17", "Lev18"], "desc": "Leviticus 17-18" }, { "portion": ["Psa119:41"], "desc": "Psalms 119:41-80" }, { "portion": ["Luke1"], "desc": "Luke 1" }], // 10
      [{ "portion": ["Lev19"], "desc": "Leviticus 19" }, { "portion": ["Psa119:81"], "desc": "Psalms 119:81-128" }, { "portion": ["Luke2"], "desc": "Luke 2" }], // 11
      [{ "portion": ["Lev20"], "desc": "Leviticus 20" }, { "portion": ["Psa119:129"], "desc": "Psalms 119:129-176" }, { "portion": ["Luke3"], "desc": "Luke 3" }], // 12
      [{ "portion": ["Lev21"], "desc": "Leviticus 21" }, { "portion": ["Psa120", "Psa121", "Psa122", "Psa123", "Psa124"], "desc": "Psalms 120-124" }, { "portion": ["Luke4"], "desc": "Luke 4" }], // 13
      [{ "portion": ["Lev22"], "desc": "Leviticus 22" }, { "portion": ["Psa125", "Psa126", "Psa127"], "desc": "Psalms 125-127" }, { "portion": ["Luke5"], "desc": "Luke 5" }], // 14
      [{ "portion": ["Lev23"], "desc": "Leviticus 23" }, { "portion": ["Psa128", "Psa129", "Psa130"], "desc": "Psalms 128-130" }, { "portion": ["Luke6"], "desc": "Luke 6" }], // 15
      [{ "portion": ["Lev24"], "desc": "Leviticus 24" }, { "portion": ["Psa131", "Psa132", "Psa133", "Psa134"], "desc": "Psalms 131-134" }, { "portion": ["Luke7"], "desc": "Luke 7" }], // 16
      [{ "portion": ["Lev25"], "desc": "Leviticus 25" }, { "portion": ["Psa135", "Psa136"], "desc": "Psalms 135-136" }, { "portion": ["Luke8"], "desc": "Luke 8" }], // 17
      [{ "portion": ["Lev26"], "desc": "Leviticus 26" }, { "portion": ["Psa137", "Psa138", "Psa139"], "desc": "Psalms 137-139" }, { "portion": ["Luke9"], "desc": "Luke 9" }], // 18
      [{ "portion": ["Lev27"], "desc": "Leviticus 27" }, { "portion": ["Psa140", "Psa141", "Psa142"], "desc": "Psalms 140-142" }, { "portion": ["Luke10"], "desc": "Luke 10" }], // 19
      [{ "portion": ["Num1"], "desc": "Numbers 1" }, { "portion": ["Psa143", "Psa144"], "desc": "Psalms 143-144" }, { "portion": ["Luke11"], "desc": "Luke 11" }], // 20
      [{ "portion": ["Num2"], "desc": "Numbers 2" }, { "portion": ["Psa145", "Psa146", "Psa147"], "desc": "Psalms 145-147" }, { "portion": ["Luke12"], "desc": "Luke 12" }], // 21
      [{ "portion": ["Num3"], "desc": "Numbers 3" }, { "portion": ["Psa148", "Psa149", "Psa150"], "desc": "Psalms 148-150" }, { "portion": ["Luke13", "Luke14"], "desc": "Luke 13-14" }], // 22
      [{ "portion": ["Num4"], "desc": "Numbers 4" }, { "portion": ["Prv1"], "desc": "Proverbs 1" }, { "portion": ["Luke15"], "desc": "Luke 15" }], // 23
      [{ "portion": ["Num5"], "desc": "Numbers 5" }, { "portion": ["Prv2"], "desc": "Proverbs 2" }, { "portion": ["Luke16"], "desc": "Luke 16" }], // 24
      [{ "portion": ["Num6"], "desc": "Numbers 6" }, { "portion": ["Prv3"], "desc": "Proverbs 3" }, { "portion": ["Luke17"], "desc": "Luke 17" }], // 25
      [{ "portion": ["Num7"], "desc": "Numbers 7" }, { "portion": ["Prv4"], "desc": "Proverbs 4" }, { "portion": ["Luke18"], "desc": "Luke 18" }], // 26
      [{ "portion": ["Num8", "Num9"], "desc": "Numbers 8-9" }, { "portion": ["Prv5"], "desc": "Proverbs 5" }, { "portion": ["Luke19"], "desc": "Luke 19" }], // 27
      [{ "portion": ["Num10"], "desc": "Numbers 10" }, { "portion": ["Prv6"], "desc": "Proverbs 6" }, { "portion": ["Luke20"], "desc": "Luke 20" }], // 28
      [{ "portion": ["Num11"], "desc": "Numbers 11" }, { "portion": ["Prv7"], "desc": "Proverbs 7" }, { "portion": ["Luke21"], "desc": "Luke 21" }], // 29
      [{ "portion": ["Num12", "Num13"], "desc": "Numbers 12-13" }, { "portion": ["Prv8", "Prv9"], "desc": "Proverbs 8-9" }, { "portion": ["Luke22"], "desc": "Luke 22" }], // 30
      [{ "portion": ["Num14"], "desc": "Numbers 14" }, { "portion": ["Prv10"], "desc": "Proverbs 10" }, { "portion": ["Luke23"], "desc": "Luke 23" }]  // 31
   ],
   [  // April (DONE)
      [{ "portion": ["Num15"], "desc": "Numbers 15" }, { "portion": ["Prv11"], "desc": "Proverbs 11" }, { "portion": ["Luke24"], "desc": "Luke 24" }], // 1
      [{ "portion": ["Num16"], "desc": "Numbers 16" }, { "portion": ["Prv12"], "desc": "Proverbs 12" }, { "portion": ["Gal1", "Gal2"], "desc": "Galatians 1-2" }], // 2
      [{ "portion": ["Num17", "Num18"], "desc": "Numbers 17-18" }, { "portion": ["Prv13"], "desc": "Proverbs 13" }, { "portion": ["Gal3", "Gal4"], "desc": "Galatians 3-4" }], // 3
      [{ "portion": ["Num19"], "desc": "Numbers 19" }, { "portion": ["Prv14"], "desc": "Proverbs 14" }, { "portion": ["Gal5", "Gal6"], "desc": "Galatians 5-6" }], // 4
      [{ "portion": ["Num20", "Num21"], "desc": "Numbers 20-21" }, { "portion": ["Prv15"], "desc": "Proverbs 15" }, { "portion": ["Eph1", "Eph2"], "desc": "Ephesians 1-2" }], // 5
      [{ "portion": ["Num22", "Num23"], "desc": "Numbers 22-23" }, { "portion": ["Prv16"], "desc": "Proverbs 16" }, { "portion": ["Eph3", "Eph4"], "desc": "Ephesians 3-4" }], // 6
      [{ "portion": ["Num24", "Num25"], "desc": "Numbers 24-25" }, { "portion": ["Prv17"], "desc": "Proverbs 17" }, { "portion": ["Eph5", "Eph6"], "desc": "Ephesians 5-6" }], // 7
      [{ "portion": ["Num26"], "desc": "Numbers 26" }, { "portion": ["Prv18"], "desc": "Proverbs 18" }, { "portion": ["Phi1", "Phi2"], "desc": "Philippians 1-2" }], // 8
      [{ "portion": ["Num27"], "desc": "Numbers 27" }, { "portion": ["Prv19"], "desc": "Proverbs 19" }, { "portion": ["Phi3", "Phi4"], "desc": "Philippians 3-4" }], // 9
      [{ "portion": ["Num28"], "desc": "Numbers 28" }, { "portion": ["Prv20"], "desc": "Proverbs 20" }, { "portion": ["John1"], "desc": "John 1" }], // 10
      [{ "portion": ["Num29", "Num30"], "desc": "Numbers 29-30" }, { "portion": ["Prv21"], "desc": "Proverbs 21" }, { "portion": ["John2", "John3"], "desc": "John 2-3" }], // 11
      [{ "portion": ["Num31"], "desc": "Numbers 31" }, { "portion": ["Prv22"], "desc": "Proverbs 22" }, { "portion": ["John4"], "desc": "John 4" }], // 12
      [{ "portion": ["Num32"], "desc": "Numbers 32" }, { "portion": ["Prv23"], "desc": "Proverbs 23" }, { "portion": ["John5"], "desc": "John 5" }], // 13
      [{ "portion": ["Num33"], "desc": "Numbers 33" }, { "portion": ["Prv24"], "desc": "Proverbs 24" }, { "portion": ["John6"], "desc": "John 6" }], // 14
      [{ "portion": ["Num34"], "desc": "Numbers 34" }, { "portion": ["Prv25"], "desc": "Proverbs 25" }, { "portion": ["John7"], "desc": "John 7" }], // 15
      [{ "portion": ["Num35"], "desc": "Numbers 35" }, { "portion": ["Prv26"], "desc": "Proverbs 26" }, { "portion": ["John8"], "desc": "John 8" }], // 16
      [{ "portion": ["Num36"], "desc": "Numbers 36" }, { "portion": ["Prv27"], "desc": "Proverbs 27" }, { "portion": ["John9", "John10"], "desc": "John 9-10" }], // 17
      [{ "portion": ["Deu1"], "desc": "Deuteronomy 1" }, { "portion": ["Prv28"], "desc": "Proverbs 28" }, { "portion": ["John11"], "desc": "John 11" }], // 18
      [{ "portion": ["Deu2"], "desc": "Deuteronomy 2" }, { "portion": ["Prv29"], "desc": "Proverbs 29" }, { "portion": ["John12"], "desc": "John 12" }], // 19
      [{ "portion": ["Deu3"], "desc": "Deuteronomy 3" }, { "portion": ["Prv30"], "desc": "Proverbs 30" }, { "portion": ["John13", "John14"], "desc": "John 13-14" }], // 20
      [{ "portion": ["Deu4"], "desc": "Deuteronomy 4" }, { "portion": ["Prv31"], "desc": "Proverbs 31" }, { "portion": ["John15", "John16"], "desc": "John 15-16" }], // 21
      [{ "portion": ["Deu5"], "desc": "Deuteronomy 5" }, { "portion": ["Eccl1"], "desc": "Ecclesiastes 1" }, { "portion": ["John17", "John18"], "desc": "John 17-18" }], // 22
      [{ "portion": ["Deu6", "Deu7"], "desc": "Deuteronomy 6-7" }, { "portion": ["Eccl2"], "desc": "Ecclesiastes 2" }, { "portion": ["John19"], "desc": "John 19" }], // 23
      [{ "portion": ["Deu8", "Deu9"], "desc": "Deuteronomy 8-9" }, { "portion": ["Eccl3"], "desc": "Ecclesiastes 3" }, { "portion": ["John20", "John21"], "desc": "John 20-21" }], // 24
      [{ "portion": ["Deu10", "Deu11"], "desc": "Deuteronomy 10-11" }, { "portion": ["Eccl4"], "desc": "Ecclesiastes 4" }, { "portion": ["Acts1"], "desc": "Acts 1" }], // 25
      [{ "portion": ["Deu12"], "desc": "Deuteronomy 12" }, { "portion": ["Eccl5"], "desc": "Ecclesiastes 5" }, { "portion": ["Acts2"], "desc": "Acts 2" }], // 26
      [{ "portion": ["Deu13", "Deu14"], "desc": "Deuteronomy 13-14" }, { "portion": ["Eccl6"], "desc": "Ecclesiastes 6" }, { "portion": ["Acts3", "Acts4"], "desc": "Acts 3-4" }], // 27
      [{ "portion": ["Deu15"], "desc": "Deuteronomy 15" }, { "portion": ["Eccl7"], "desc": "Ecclesiastes 7" }, { "portion": ["Acts5", "Acts6"], "desc": "Acts 5-6" }], // 28
      [{ "portion": ["Deu16"], "desc": "Deuteronomy 16" }, { "portion": ["Eccl8"], "desc": "Ecclesiastes 8" }, { "portion": ["Acts7"], "desc": "Acts 7" }], // 29
      [{ "portion": ["Deu17"], "desc": "Deuteronomy 17" }, { "portion": ["Eccl9"], "desc": "Ecclesiastes 9" }, { "portion": ["Acts8"], "desc": "Acts 8" }]  // 30
   ],
   [  // May (DONE)
      [{ "portion": ["Deu18"], "desc": "Deuteronomy 18" }, { "portion": ["Eccl10"], "desc": "Ecclesiastes 10" }, { "portion": ["Acts9"], "desc": "Acts 9" }], // 1
      [{ "portion": ["Deu19"], "desc": "Deuteronomy 19" }, { "portion": ["Eccl11"], "desc": "Ecclesiastes 11" }, { "portion": ["Acts10"], "desc": "Acts 10" }], // 2
      [{ "portion": ["Deu20"], "desc": "Deuteronomy 20" }, { "portion": ["Eccl12"], "desc": "Ecclesiastes 12" }, { "portion": ["Acts11", "Acts12"], "desc": "Acts 11-12" }], // 3
      [{ "portion": ["Deu21"], "desc": "Deuteronomy 21" }, { "portion": ["SSol1"], "desc": "Song of Solomon 1" }, { "portion": ["Acts13"], "desc": "Acts 13" }], // 4
      [{ "portion": ["Deu22"], "desc": "Deuteronomy 22" }, { "portion": ["SSol2"], "desc": "Song of Solomon 2" }, { "portion": ["Acts14", "Acts15"], "desc": "Acts 14-15" }], // 5
      [{ "portion": ["Deu23"], "desc": "Deuteronomy 23" }, { "portion": ["SSol3"], "desc": "Song of Solomon 3" }, { "portion": ["Acts16", "Acts17"], "desc": "Acts 16-17" }], // 6
      [{ "portion": ["Deu24"], "desc": "Deuteronomy 24" }, { "portion": ["SSol4"], "desc": "Song of Solomon 4" }, { "portion": ["Acts18", "Acts19"], "desc": "Acts 18-19" }], // 7
      [{ "portion": ["Deu25"], "desc": "Deuteronomy 25" }, { "portion": ["SSol5"], "desc": "Song of Solomon 5" }, { "portion": ["Acts20"], "desc": "Acts 20" }], // 8
      [{ "portion": ["Deu26"], "desc": "Deuteronomy 26" }, { "portion": ["SSol6"], "desc": "Song of Solomon 6" }, { "portion": ["Acts21", "Acts22"], "desc": "Acts 21-22" }], // 9
      [{ "portion": ["Deu27"], "desc": "Deuteronomy 27" }, { "portion": ["SSol7"], "desc": "Song of Solomon 7" }, { "portion": ["Acts23", "Acts24"], "desc": "Acts 23-24" }], // 10
      [{ "portion": ["Deu28"], "desc": "Deuteronomy 28" }, { "portion": ["SSol8"], "desc": "Song of Solomon 8" }, { "portion": ["Acts25", "Acts26"], "desc": "Acts 25-26" }], // 11
      [{ "portion": ["Deu29"], "desc": "Deuteronomy 29" }, { "portion": ["Isa1"], "desc": "Isaiah 1" }, { "portion": ["Acts27"], "desc": "Acts 27" }], // 12
      [{ "portion": ["Deu30"], "desc": "Deuteronomy 30" }, { "portion": ["Isa2"], "desc": "Isaiah 2" }, { "portion": ["Acts28"], "desc": "Acts 28" }], // 13
      [{ "portion": ["Deu31"], "desc": "Deuteronomy 31" }, { "portion": ["Isa3", "Isa4"], "desc": "Isaiah 3-4" }, { "portion": ["Col1"], "desc": "Colossians 1" }], // 14
      [{ "portion": ["Deu32"], "desc": "Deuteronomy 32" }, { "portion": ["Isa5"], "desc": "Isaiah 5" }, { "portion": ["Col2"], "desc": "Colossians 2" }], // 15
      [{ "portion": ["Deu33", "Deu34"], "desc": "Deuteronomy 33-34" }, { "portion": ["Isa6"], "desc": "Isaiah 6" }, { "portion": ["Col3", "Col4"], "desc": "Colossians 3-4" }], // 16
      [{ "portion": ["Josh1"], "desc": "Joshua 1" }, { "portion": ["Isa7"], "desc": "Isaiah 7" }, { "portion": ["1Th1", "1Th2"], "desc": "1 Thessalonians 1-2" }], // 17
      [{ "portion": ["Josh2"], "desc": "Joshua 2" }, { "portion": ["Isa8"], "desc": "Isaiah 8" }, { "portion": ["1Th3", "1Th4"], "desc": "1 Thessalonians 3-4" }], // 18
      [{ "portion": ["Josh3", "Josh4"], "desc": "Joshua 3-4" }, { "portion": ["Isa9"], "desc": "Isaiah 9" }, { "portion": ["1Th5"], "desc": "1 Thessalonians 5" }], // 19
      [{ "portion": ["Josh5", "Josh6"], "desc": "Joshua 5-6" }, { "portion": ["Isa10"], "desc": "Isaiah 10" }, { "portion": ["2Th1", "2Th2"], "desc": "2 Thessalonians 1-2" }], // 20
      [{ "portion": ["Josh7"], "desc": "Joshua 7" }, { "portion": ["Isa11"], "desc": "Isaiah 11" }, { "portion": ["2Th3"], "desc": "2 Thessalonians 3" }], // 21
      [{ "portion": ["Josh8"], "desc": "Joshua 8" }, { "portion": ["Isa12"], "desc": "Isaiah 12" }, { "portion": ["1Tim1", "1Tim2", "1Tim3"], "desc": "1 Timothy 1-3" }], // 22
      [{ "portion": ["Josh9"], "desc": "Joshua 9" }, { "portion": ["Isa13"], "desc": "Isaiah 13" }, { "portion": ["1Tim4", "1Tim5"], "desc": "1 Timothy 4-5" }], // 23
      [{ "portion": ["Josh10"], "desc": "Joshua 10" }, { "portion": ["Isa14"], "desc": "Isaiah 14" }, { "portion": ["1Tim6"], "desc": "1 Timothy 6" }], // 24
      [{ "portion": ["Josh11"], "desc": "Joshua 11" }, { "portion": ["Isa15"], "desc": "Isaiah 15" }, { "portion": ["2Tim1"], "desc": "2 Timothy 1" }], // 25
      [{ "portion": ["Josh12"], "desc": "Joshua 12" }, { "portion": ["Isa16"], "desc": "Isaiah 16" }, { "portion": ["2Tim2"], "desc": "2 Timothy 2" }], // 26
      [{ "portion": ["Josh13"], "desc": "Joshua 13" }, { "portion": ["Isa17", "Isa18"], "desc": "Isaiah 17-18" }, { "portion": ["2Tim3", "2Tim4"], "desc": "2 Timothy 3-4" }], // 27
      [{ "portion": ["Josh14"], "desc": "Joshua 14" }, { "portion": ["Isa19"], "desc": "Isaiah 19" }, { "portion": ["Titus1", "Titus2", "Titus3"], "desc": "Titus 1-3" }], // 28
      [{ "portion": ["Josh15"], "desc": "Joshua 15" }, { "portion": ["Isa20", "Isa21"], "desc": "Isaiah 20-21" }, { "portion": ["Phmn1"], "desc": "Philemon" }], // 29
      [{ "portion": ["Josh16"], "desc": "Joshua 16" }, { "portion": ["Isa22"], "desc": "Isaiah 22" }, { "portion": ["Heb1", "Heb2"], "desc": "Hebrews 1-2" }], // 30
      [{ "portion": ["Josh17"], "desc": "Joshua 17" }, { "portion": ["Isa23"], "desc": "Isaiah 23" }, { "portion": ["Heb3", "Heb4", "Heb5"], "desc": "Hebrews 3-5" }]  // 31
   ],
   [  // June (DONE)
      [{ "portion": ["Josh18"], "desc": "Joshua 18" }, { "portion": ["Isa24"], "desc": "Isaiah 24" }, { "portion": ["Heb6", "Heb7"], "desc": "Hebrews 6-7" }], // 1
      [{ "portion": ["Josh19"], "desc": "Joshua 19" }, { "portion": ["Isa25"], "desc": "Isaiah 25" }, { "portion": ["Heb8", "Heb9"], "desc": "Hebrews 8-9" }], // 2
      [{ "portion": ["Josh20", "Josh21"], "desc": "Joshua 20-21" }, { "portion": ["Isa26", "Isa27"], "desc": "Isaiah 26-27" }, { "portion": ["Heb10"], "desc": "Hebrews 10" }], // 3
      [{ "portion": ["Josh22"], "desc": "Joshua 22" }, { "portion": ["Isa28"], "desc": "Isaiah 28" }, { "portion": ["Heb11"], "desc": "Hebrews 11" }], // 4
      [{ "portion": ["Josh23", "Josh24"], "desc": "Joshua 23-24" }, { "portion": ["Isa29"], "desc": "Isaiah 29" }, { "portion": ["Heb12"], "desc": "Hebrews 12" }], // 5
      [{ "portion": ["Jdgs1"], "desc": "Judges 1" }, { "portion": ["Isa30"], "desc": "Isaiah 30" }, { "portion": ["Heb13"], "desc": "Hebrews 13" }], // 6
      [{ "portion": ["Jdgs2", "Jdgs3"], "desc": "Judges 2-3" }, { "portion": ["Isa31"], "desc": "Isaiah 31" }, { "portion": ["Jas1"], "desc": "James 1" }], // 7
      [{ "portion": ["Jdgs4", "Jdgs5"], "desc": "Judges 4-5" }, { "portion": ["Isa32"], "desc": "Isaiah 32" }, { "portion": ["Jas2"], "desc": "James 2" }], // 8
      [{ "portion": ["Jdgs6"], "desc": "Judges 6" }, { "portion": ["Isa33"], "desc": "Isaiah 33" }, { "portion": ["Jas3", "Jas4"], "desc": "James 3-4" }], // 9
      [{ "portion": ["Jdgs7", "Jdgs8"], "desc": "Judges 7-8" }, { "portion": ["Isa34"], "desc": "Isaiah 34" }, { "portion": ["Jas5"], "desc": "James 5" }], // 10
      [{ "portion": ["Jdgs9"], "desc": "Judges 9" }, { "portion": ["Isa35"], "desc": "Isaiah 35" }, { "portion": ["1Pet1"], "desc": "1 Peter 1" }], // 11
      [{ "portion": ["Jdgs10", "Jdgs11"], "desc": "Judges 10-11" }, { "portion": ["Isa36"], "desc": "Isaiah 36" }, { "portion": ["1Pet2"], "desc": "1 Peter 2" }], // 12
      [{ "portion": ["Jdgs12", "Jdgs13"], "desc": "Judges 12-13" }, { "portion": ["Isa37"], "desc": "Isaiah 37" }, { "portion": ["1Pet3", "1Pet4", "1Pet5"], "desc": "1 Peter 3-5" }], // 13
      [{ "portion": ["Jdgs14", "Jdgs15"], "desc": "Judges 14-15" }, { "portion": ["Isa38"], "desc": "Isaiah 38" }, { "portion": ["2Pet1", "2Pet2"], "desc": "2 Peter 1-2" }], // 14
      [{ "portion": ["Jdgs16"], "desc": "Judges 16" }, { "portion": ["Isa39"], "desc": "Isaiah 39" }, { "portion": ["2Pet3"], "desc": "2 Peter 3" }], // 15
      [{ "portion": ["Jdgs17", "Jdgs18"], "desc": "Judges 17-18" }, { "portion": ["Isa40"], "desc": "Isaiah 40" }, { "portion": ["1Jn1", "1Jn2"], "desc": "1 John 1-2" }], // 16
      [{ "portion": ["Jdgs19"], "desc": "Judges 19" }, { "portion": ["Isa41"], "desc": "Isaiah 41" }, { "portion": ["1Jn3", "1Jn4"], "desc": "1 John 3-4" }], // 17
      [{ "portion": ["Jdgs20"], "desc": "Judges 20" }, { "portion": ["Isa42"], "desc": "Isaiah 42" }, { "portion": ["1Jn5"], "desc": "1 John 5" }], // 18
      [{ "portion": ["Jdgs21"], "desc": "Judges 21" }, { "portion": ["Isa43"], "desc": "Isaiah 43" }, { "portion": ["2Jn1", "3Jn1"], "desc": "2-3 John" }], // 19
      [{ "portion": ["Ruth1", "Ruth2"], "desc": "Ruth 1-2" }, { "portion": ["Isa44"], "desc": "Isaiah 44" }, { "portion": ["Jude1"], "desc": "Jude" }], // 20
      [{ "portion": ["Ruth3", "Ruth4"], "desc": "Ruth 3-4" }, { "portion": ["Isa45"], "desc": "Isaiah 45" }, { "portion": ["Rev1", "Rev2"], "desc": "Revelation 1-2" }], // 21
      [{ "portion": ["1Sm1"], "desc": "1 Samuel 1" }, { "portion": ["Isa46", "Isa47"], "desc": "Isaiah 46-47" }, { "portion": ["Rev3", "Rev4"], "desc": "Revelation 3-4" }], // 22
      [{ "portion": ["1Sm2"], "desc": "1 Samuel 2" }, { "portion": ["Isa48"], "desc": "Isaiah 48" }, { "portion": ["Rev5", "Rev6"], "desc": "Revelation 5-6" }], // 23
      [{ "portion": ["1Sm3"], "desc": "1 Samuel 3" }, { "portion": ["Isa49"], "desc": "Isaiah 49" }, { "portion": ["Rev7", "Rev8", "Rev9"], "desc": "Revelation 7-9" }], // 24
      [{ "portion": ["1Sm4"], "desc": "1 Samuel 4" }, { "portion": ["Isa50"], "desc": "Isaiah 50" }, { "portion": ["Rev10", "Rev11"], "desc": "Revelation 10-11" }], // 25
      [{ "portion": ["1Sm5", "1Sm6"], "desc": "1 Samuel 5-6" }, { "portion": ["Isa51"], "desc": "Isaiah 51" }, { "portion": ["Rev12", "Rev13"], "desc": "Revelation 12-13" }], // 26
      [{ "portion": ["1Sm7", "1Sm8"], "desc": "1 Samuel 7-8" }, { "portion": ["Isa52"], "desc": "Isaiah 52" }, { "portion": ["Rev14"], "desc": "Revelation 14" }], // 27
      [{ "portion": ["1Sm9"], "desc": "1 Samuel 9" }, { "portion": ["Isa53"], "desc": "Isaiah 53" }, { "portion": ["Rev15", "Rev16"], "desc": "Revelation 15-16" }], // 28
      [{ "portion": ["1Sm10"], "desc": "1 Samuel 10" }, { "portion": ["Isa54"], "desc": "Isaiah 54" }, { "portion": ["Rev17", "Rev18"], "desc": "Revelation 17-18" }], // 29
      [{ "portion": ["1Sm11", "1Sm12"], "desc": "1 Samuel 11-12" }, { "portion": ["Isa55"], "desc": "Isaiah 55" }, { "portion": ["Rev19", "Rev20"], "desc": "Revelation 19-20" }]  // 30
   ],
   [  // July (DONE)
      [{ "portion": ["1Sm13"], "desc": "1 Samuel 13" }, { "portion": ["Isa56", "Isa57"], "desc": "Isaiah 56-57" }, { "portion": ["Rev21", "Rev22"], "desc": "Revelation 21-22" }], // 1
      [{ "portion": ["1Sm14"], "desc": "1 Samuel 14" }, { "portion": ["Isa58"], "desc": "Isaiah 58" }, { "portion": ["Mat1", "Mat2"], "desc": "Matthew 1-2" }], // 2
      [{ "portion": ["1Sm15"], "desc": "1 Samuel 15" }, { "portion": ["Isa59"], "desc": "Isaiah 59" }, { "portion": ["Mat3", "Mat4"], "desc": "Matthew 3-4" }], // 3
      [{ "portion": ["1Sm16"], "desc": "1 Samuel 16" }, { "portion": ["Isa60"], "desc": "Isaiah 60" }, { "portion": ["Mat5"], "desc": "Matthew 5" }], // 4
      [{ "portion": ["1Sm17"], "desc": "1 Samuel 17" }, { "portion": ["Isa61"], "desc": "Isaiah 61" }, { "portion": ["Mat6"], "desc": "Matthew 6" }], // 5
      [{ "portion": ["1Sm18"], "desc": "1 Samuel 18" }, { "portion": ["Isa62"], "desc": "Isaiah 62" }, { "portion": ["Mat7"], "desc": "Matthew 7" }], // 6
      [{ "portion": ["1Sm19"], "desc": "1 Samuel 19" }, { "portion": ["Isa63"], "desc": "Isaiah 63" }, { "portion": ["Mat8"], "desc": "Matthew 8" }], // 7
      [{ "portion": ["1Sm20"], "desc": "1 Samuel 20" }, { "portion": ["Isa64"], "desc": "Isaiah 64" }, { "portion": ["Mat9"], "desc": "Matthew 9" }], // 8
      [{ "portion": ["1Sm21", "1Sm22"], "desc": "1 Samuel 21-22" }, { "portion": ["Isa65"], "desc": "Isaiah 65" }, { "portion": ["Mat10"], "desc": "Matthew 10" }], // 9
      [{ "portion": ["1Sm23"], "desc": "1 Samuel 23" }, { "portion": ["Isa66"], "desc": "Isaiah 66" }, { "portion": ["Mat11"], "desc": "Matthew 11" }], // 10
      [{ "portion": ["1Sm24"], "desc": "1 Samuel 24" }, { "portion": ["Jer1"], "desc": "Jeremiah 1" }, { "portion": ["Mat12"], "desc": "Matthew 12" }], // 11
      [{ "portion": ["1Sm25"], "desc": "1 Samuel 25" }, { "portion": ["Jer2"], "desc": "Jeremiah 2" }, { "portion": ["Mat13"], "desc": "Matthew 13" }], // 12
      [{ "portion": ["1Sm26", "1Sm27"], "desc": "1 Samuel 26-27" }, { "portion": ["Jer3"], "desc": "Jeremiah 3" }, { "portion": ["Mat14"], "desc": "Matthew 14" }], // 13
      [{ "portion": ["1Sm28"], "desc": "1 Samuel 28" }, { "portion": ["Jer4"], "desc": "Jeremiah 4" }, { "portion": ["Mat15"], "desc": "Matthew 15" }], // 14
      [{ "portion": ["1Sm29", "1Sm30"], "desc": "1 Samuel 29-30" }, { "portion": ["Jer5"], "desc": "Jeremiah 5" }, { "portion": ["Mat16"], "desc": "Matthew 16" }], // 15
      [{ "portion": ["1Sm31"], "desc": "1 Samuel 31" }, { "portion": ["Jer6"], "desc": "Jeremiah 6" }, { "portion": ["Mat17"], "desc": "Matthew 17" }], // 16
      [{ "portion": ["2Sm1"], "desc": "2 Samuel 1" }, { "portion": ["Jer7"], "desc": "Jeremiah 7" }, { "portion": ["Mat18"], "desc": "Matthew 18" }], // 17
      [{ "portion": ["2Sm2"], "desc": "2 Samuel 2" }, { "portion": ["Jer8"], "desc": "Jeremiah 8" }, { "portion": ["Mat19"], "desc": "Matthew 19" }], // 18
      [{ "portion": ["2Sm3"], "desc": "2 Samuel 3" }, { "portion": ["Jer9"], "desc": "Jeremiah 9" }, { "portion": ["Mat20"], "desc": "Matthew 20" }], // 19
      [{ "portion": ["2Sm4", "2Sm5"], "desc": "2 Samuel 4-5" }, { "portion": ["Jer10"], "desc": "Jeremiah 10" }, { "portion": ["Mat21"], "desc": "Matthew 21" }], // 20
      [{ "portion": ["2Sm6"], "desc": "2 Samuel 6" }, { "portion": ["Jer11"], "desc": "Jeremiah 11" }, { "portion": ["Mat22"], "desc": "Matthew 22" }], // 21
      [{ "portion": ["2Sm7"], "desc": "2 Samuel 7" }, { "portion": ["Jer12"], "desc": "Jeremiah 12" }, { "portion": ["Mat23"], "desc": "Matthew 23" }], // 22
      [{ "portion": ["2Sm8", "2Sm9"], "desc": "2 Samuel 8-9" }, { "portion": ["Jer13"], "desc": "Jeremiah 13" }, { "portion": ["Mat24"], "desc": "Matthew 24" }], // 23
      [{ "portion": ["2Sm10"], "desc": "2 Samuel 10" }, { "portion": ["Jer14"], "desc": "Jeremiah 14" }, { "portion": ["Mat25"], "desc": "Matthew 25" }], // 24
      [{ "portion": ["2Sm11"], "desc": "2 Samuel 11" }, { "portion": ["Jer15"], "desc": "Jeremiah 15" }, { "portion": ["Mat26"], "desc": "Matthew 26" }], // 25
      [{ "portion": ["2Sm12"], "desc": "2 Samuel 12" }, { "portion": ["Jer16"], "desc": "Jeremiah 16" }, { "portion": ["Mat27"], "desc": "Matthew 27" }], // 26
      [{ "portion": ["2Sm13"], "desc": "2 Samuel 13" }, { "portion": ["Jer17"], "desc": "Jeremiah 17" }, { "portion": ["Mat28"], "desc": "Matthew 28" }], // 27
      [{ "portion": ["2Sm14"], "desc": "2 Samuel 14" }, { "portion": ["Jer18"], "desc": "Jeremiah 18" }, { "portion": ["Rom1", "Rom2"], "desc": "Romans 1-2" }], // 28
      [{ "portion": ["2Sm15"], "desc": "2 Samuel 15" }, { "portion": ["Jer19"], "desc": "Jeremiah 19" }, { "portion": ["Rom3", "Rom4"], "desc": "Romans 3-4" }], // 29
      [{ "portion": ["2Sm16"], "desc": "2 Samuel 16" }, { "portion": ["Jer20"], "desc": "Jeremiah 20" }, { "portion": ["Rom5", "Rom6"], "desc": "Romans 5-6" }], // 30
      [{ "portion": ["2Sm17"], "desc": "2 Samuel 17" }, { "portion": ["Jer21"], "desc": "Jeremiah 21" }, { "portion": ["Rom7", "Rom8"], "desc": "Romans 7-8" }]  // 31
   ],
   [  // August (DONE)
      [{ "portion": ["2Sm18"], "desc": "2 Samuel 18" }, { "portion": ["Jer22"], "desc": "Jeremiah 22" }, { "portion": ["Rom9"], "desc": "Romans 9" }], // 1
      [{ "portion": ["2Sm19"], "desc": "2 Samuel 19" }, { "portion": ["Jer23"], "desc": "Jeremiah 23" }, { "portion": ["Rom10", "Rom11"], "desc": "Romans 10-11" }], // 2
      [{ "portion": ["2Sm20", "2Sm21"], "desc": "2 Samuel 20-21" }, { "portion": ["Jer24"], "desc": "Jeremiah 24" }, { "portion": ["Rom12"], "desc": "Romans 12" }], // 3
      [{ "portion": ["2Sm22"], "desc": "2 Samuel 22" }, { "portion": ["Jer25"], "desc": "Jeremiah 25" }, { "portion": ["Rom13", "Rom14"], "desc": "Romans 13-14" }], // 4
      [{ "portion": ["2Sm23"], "desc": "2 Samuel 23" }, { "portion": ["Jer26"], "desc": "Jeremiah 26" }, { "portion": ["Rom15", "Rom16"], "desc": "Romans 15-16" }], // 5
      [{ "portion": ["2Sm24"], "desc": "2 Samuel 24" }, { "portion": ["Jer27"], "desc": "Jeremiah 27" }, { "portion": ["Mark1"], "desc": "Mark 1" }], // 6
      [{ "portion": ["1Ki1"], "desc": "1 Kings 1" }, { "portion": ["Jer28"], "desc": "Jeremiah 28" }, { "portion": ["Mark2"], "desc": "Mark 2" }], // 7
      [{ "portion": ["1Ki2"], "desc": "1 Kings 2" }, { "portion": ["Jer29"], "desc": "Jeremiah 29" }, { "portion": ["Mark3"], "desc": "Mark 3" }], // 8
      [{ "portion": ["1Ki3"], "desc": "1 Kings 3" }, { "portion": ["Jer30"], "desc": "Jeremiah 30" }, { "portion": ["Mark4"], "desc": "Mark 4" }], // 9
      [{ "portion": ["1Ki4", "1Ki5"], "desc": "1 Kings 4-5" }, { "portion": ["Jer31"], "desc": "Jeremiah 31" }, { "portion": ["Mark5"], "desc": "Mark 5" }], // 10
      [{ "portion": ["1Ki6"], "desc": "1 Kings 6" }, { "portion": ["Jer32"], "desc": "Jeremiah 32" }, { "portion": ["Mark6"], "desc": "Mark 6" }], // 11
      [{ "portion": ["1Ki7"], "desc": "1 Kings 7" }, { "portion": ["Jer33"], "desc": "Jeremiah 33" }, { "portion": ["Mark7"], "desc": "Mark 7" }], // 12
      [{ "portion": ["1Ki8"], "desc": "1 Kings 8" }, { "portion": ["Jer34"], "desc": "Jeremiah 34" }, { "portion": ["Mark8"], "desc": "Mark 8" }], // 13
      [{ "portion": ["1Ki9"], "desc": "1 Kings 9" }, { "portion": ["Jer35"], "desc": "Jeremiah 35" }, { "portion": ["Mark9"], "desc": "Mark 9" }], // 14
      [{ "portion": ["1Ki10"], "desc": "1 Kings 10" }, { "portion": ["Jer36"], "desc": "Jeremiah 36" }, { "portion": ["Mark10"], "desc": "Mark 10" }], // 15
      [{ "portion": ["1Ki11"], "desc": "1 Kings 11" }, { "portion": ["Jer37"], "desc": "Jeremiah 37" }, { "portion": ["Mark11"], "desc": "Mark 11" }], // 16
      [{ "portion": ["1Ki12"], "desc": "1 Kings 12" }, { "portion": ["Jer38"], "desc": "Jeremiah 38" }, { "portion": ["Mark12"], "desc": "Mark 12" }], // 17
      [{ "portion": ["1Ki13"], "desc": "1 Kings 13" }, { "portion": ["Jer39"], "desc": "Jeremiah 39" }, { "portion": ["Mark13"], "desc": "Mark 13" }], // 18
      [{ "portion": ["1Ki14"], "desc": "1 Kings 14" }, { "portion": ["Jer40"], "desc": "Jeremiah 40" }, { "portion": ["Mark14"], "desc": "Mark 14" }], // 19
      [{ "portion": ["1Ki15"], "desc": "1 Kings 15" }, { "portion": ["Jer41"], "desc": "Jeremiah 41" }, { "portion": ["Mark15"], "desc": "Mark 15" }], // 20
      [{ "portion": ["1Ki16"], "desc": "1 Kings 16" }, { "portion": ["Jer42"], "desc": "Jeremiah 42" }, { "portion": ["Mark16"], "desc": "Mark 16" }], // 21
      [{ "portion": ["1Ki17"], "desc": "1 Kings 17" }, { "portion": ["Jer43"], "desc": "Jeremiah 43" }, { "portion": ["1Cor1", "1Cor2"], "desc": "1 Corinthians 1-2" }], // 22
      [{ "portion": ["1Ki18"], "desc": "1 Kings 18" }, { "portion": ["Jer44"], "desc": "Jeremiah 44" }, { "portion": ["1Cor3"], "desc": "1 Corinthians 3" }], // 23
      [{ "portion": ["1Ki19"], "desc": "1 Kings 19" }, { "portion": ["Jer45", "Jer46"], "desc": "Jeremiah 45-46" }, { "portion": ["1Cor4", "1Cor5"], "desc": "1 Corinthians 4-5" }], // 24
      [{ "portion": ["1Ki20"], "desc": "1 Kings 20" }, { "portion": ["Jer47"], "desc": "Jeremiah 47" }, { "portion": ["1Cor6"], "desc": "1 Corinthians 6" }], // 25
      [{ "portion": ["1Ki21"], "desc": "1 Kings 21" }, { "portion": ["Jer48"], "desc": "Jeremiah 48" }, { "portion": ["1Cor7"], "desc": "1 Corinthians 7" }], // 26
      [{ "portion": ["1Ki22"], "desc": "1 Kings 22" }, { "portion": ["Jer49"], "desc": "Jeremiah 49" }, { "portion": ["1Cor8", "1Cor9"], "desc": "1 Corinthians 8-9" }], // 27
      [{ "portion": ["2Ki1", "2Ki2"], "desc": "2 Kings 1-2" }, { "portion": ["Jer50"], "desc": "Jeremiah 50" }, { "portion": ["1Cor10"], "desc": "1 Corinthians 10" }], // 28
      [{ "portion": ["2Ki3"], "desc": "2 Kings 3" }, { "portion": ["Jer51"], "desc": "Jeremiah 51" }, { "portion": ["1Cor11"], "desc": "1 Corinthians 11" }], // 29
      [{ "portion": ["2Ki4"], "desc": "2 Kings 4" }, { "portion": ["Jer52"], "desc": "Jeremiah 52" }, { "portion": ["1Cor12", "1Cor13"], "desc": "1 Corinthians 12-13" }], // 30
      [{ "portion": ["2Ki5"], "desc": "2 Kings 5" }, { "portion": ["Lam1"], "desc": "Lamentations 1" }, { "portion": ["1Cor14"], "desc": "1 Corinthians 14" }]  // 31
   ],
   [  // September (DONE)
      [{ "portion": ["2Ki6"], "desc": "2 Kings 6" }, { "portion": ["Lam2"], "desc": "Lamentations 2" }, { "portion": ["1Cor15"], "desc": "1 Corinthians 15" }], // 1
      [{ "portion": ["2Ki7"], "desc": "2 Kings 7" }, { "portion": ["Lam3"], "desc": "Lamentations 3" }, { "portion": ["1Cor16"], "desc": "1 Corinthians 16" }], // 2
      [{ "portion": ["2Ki8"], "desc": "2 Kings 8" }, { "portion": ["Lam4"], "desc": "Lamentations 4" }, { "portion": ["2Cor1", "2Cor2"], "desc": "2 Corinthians 1-2" }], // 3
      [{ "portion": ["2Ki9"], "desc": "2 Kings 9" }, { "portion": ["Lam5"], "desc": "Lamentations 5" }, { "portion": ["2Cor3", "2Cor4"], "desc": "2 Corinthians 3-4" }], // 4
      [{ "portion": ["2Ki10"], "desc": "2 Kings 10" }, { "portion": ["Eze1"], "desc": "Ezekiel 1" }, { "portion": ["2Cor5", "2Cor6", "2Cor7"], "desc": "2 Corinthians 5-7" }], // 5
      [{ "portion": ["2Ki11", "2Ki12"], "desc": "2 Kings 11-12" }, { "portion": ["Eze2"], "desc": "Ezekiel 2" }, { "portion": ["2Cor8", "2Cor9"], "desc": "2 Corinthians 8-9" }], // 6
      [{ "portion": ["2Ki13"], "desc": "2 Kings 13" }, { "portion": ["Eze3"], "desc": "Ezekiel 3" }, { "portion": ["2Cor10", "2Cor11"], "desc": "2 Corinthians 10-11" }], // 7
      [{ "portion": ["2Ki14"], "desc": "2 Kings 14" }, { "portion": ["Eze4"], "desc": "Ezekiel 4" }, { "portion": ["2Cor12", "2Cor13"], "desc": "2 Corinthians 12-13" }], // 8
      [{ "portion": ["2Ki15"], "desc": "2 Kings 15" }, { "portion": ["Eze5"], "desc": "Ezekiel 5" }, { "portion": ["Luke1"], "desc": "Luke 1" }], // 9
      [{ "portion": ["2Ki16"], "desc": "2 Kings 16" }, { "portion": ["Eze6"], "desc": "Ezekiel 6" }, { "portion": ["Luke2"], "desc": "Luke 2" }], // 10
      [{ "portion": ["2Ki17"], "desc": "2 Kings 17" }, { "portion": ["Eze7"], "desc": "Ezekiel 7" }, { "portion": ["Luke3"], "desc": "Luke 3" }], // 11
      [{ "portion": ["2Ki18"], "desc": "2 Kings 18" }, { "portion": ["Eze8"], "desc": "Ezekiel 8" }, { "portion": ["Luke4"], "desc": "Luke 4" }], // 12
      [{ "portion": ["2Ki19"], "desc": "2 Kings 19" }, { "portion": ["Eze9"], "desc": "Ezekiel 9" }, { "portion": ["Luke5"], "desc": "Luke 5" }], // 13
      [{ "portion": ["2Ki20"], "desc": "2 Kings 20" }, { "portion": ["Eze10"], "desc": "Ezekiel 10" }, { "portion": ["Luke6"], "desc": "Luke 6" }], // 14
      [{ "portion": ["2Ki21"], "desc": "2 Kings 21" }, { "portion": ["Eze11"], "desc": "Ezekiel 11" }, { "portion": ["Luke7"], "desc": "Luke 7" }], // 15
      [{ "portion": ["2Ki22", "2Ki23"], "desc": "2 Kings 22-23" }, { "portion": ["Eze12"], "desc": "Ezekiel 12" }, { "portion": ["Luke8"], "desc": "Luke 8" }], // 16
      [{ "portion": ["2Ki24", "2Ki25"], "desc": "2 Kings 24-25" }, { "portion": ["Eze13"], "desc": "Ezekiel 13" }, { "portion": ["Luke9"], "desc": "Luke 9" }], // 17
      [{ "portion": ["1Chr1"], "desc": "1 Chronicles 1" }, { "portion": ["Eze14"], "desc": "Ezekiel 14" }, { "portion": ["Luke10"], "desc": "Luke 10" }], // 18
      [{ "portion": ["1Chr2"], "desc": "1 Chronicles 2" }, { "portion": ["Eze15"], "desc": "Ezekiel 15" }, { "portion": ["Luke11"], "desc": "Luke 11" }], // 19
      [{ "portion": ["1Chr3"], "desc": "1 Chronicles 3" }, { "portion": ["Eze16"], "desc": "Ezekiel 16" }, { "portion": ["Luke12"], "desc": "Luke 12" }], // 20
      [{ "portion": ["1Chr4"], "desc": "1 Chronicles 4" }, { "portion": ["Eze17"], "desc": "Ezekiel 17" }, { "portion": ["Luke13", "Luke14"], "desc": "Luke 13-14" }], // 21
      [{ "portion": ["1Chr5"], "desc": "1 Chronicles 5" }, { "portion": ["Eze18"], "desc": "Ezekiel 18" }, { "portion": ["Luke15"], "desc": "Luke 15" }], // 22
      [{ "portion": ["1Chr6"], "desc": "1 Chronicles 6" }, { "portion": ["Eze19"], "desc": "Ezekiel 19" }, { "portion": ["Luke16"], "desc": "Luke 16" }], // 23
      [{ "portion": ["1Chr7"], "desc": "1 Chronicles 7" }, { "portion": ["Eze20"], "desc": "Ezekiel 20" }, { "portion": ["Luke17"], "desc": "Luke 17" }], // 24
      [{ "portion": ["1Chr8"], "desc": "1 Chronicles 8" }, { "portion": ["Eze21"], "desc": "Ezekiel 21" }, { "portion": ["Luke18"], "desc": "Luke 18" }], // 25
      [{ "portion": ["1Chr9"], "desc": "1 Chronicles 9" }, { "portion": ["Eze22"], "desc": "Ezekiel 22" }, { "portion": ["Luke19"], "desc": "Luke 19" }], // 26
      [{ "portion": ["1Chr10"], "desc": "1 Chronicles 10" }, { "portion": ["Eze23"], "desc": "Ezekiel 23" }, { "portion": ["Luke20"], "desc": "Luke 20" }], // 27
      [{ "portion": ["1Chr11"], "desc": "1 Chronicles 11" }, { "portion": ["Eze24"], "desc": "Ezekiel 24" }, { "portion": ["Luke21"], "desc": "Luke 21" }], // 28
      [{ "portion": ["1Chr12"], "desc": "1 Chronicles 12" }, { "portion": ["Eze25"], "desc": "Ezekiel 25" }, { "portion": ["Luke22"], "desc": "Luke 22" }], // 29
      [{ "portion": ["1Chr13", "1Chr14"], "desc": "1 Chronicles 13-14" }, { "portion": ["Eze26"], "desc": "Ezekiel 26" }, { "portion": ["Luke23"], "desc": "Luke 23" }]  // 30
   ],
   [  // October (DONE)
      [{ "portion": ["1Chr15"], "desc": "1 Chronicles 15" }, { "portion": ["Eze27"], "desc": "Ezekiel 27" }, { "portion": ["Luke24"], "desc": "Luke 24" }], // 1
      [{ "portion": ["1Chr16"], "desc": "1 Chronicles 16" }, { "portion": ["Eze28"], "desc": "Ezekiel 28" }, { "portion": ["Gal1", "Gal2"], "desc": "Galatians 1-2" }], // 2
      [{ "portion": ["1Chr17"], "desc": "1 Chronicles 17" }, { "portion": ["Eze29"], "desc": "Ezekiel 29" }, { "portion": ["Gal3", "Gal4"], "desc": "Galatians 3-4" }], // 3
      [{ "portion": ["1Chr18", "1Chr19"], "desc": "1 Chronicles 18-19" }, { "portion": ["Eze30"], "desc": "Ezekiel 30" }, { "portion": ["Gal5", "Gal6"], "desc": "Galatians 5-6" }], // 4
      [{ "portion": ["1Chr20", "1Chr21"], "desc": "1 Chronicles 20-21" }, { "portion": ["Eze31"], "desc": "Ezekiel 31" }, { "portion": ["Eph1", "Eph2"], "desc": "Ephesians 1-2" }], // 5
      [{ "portion": ["1Chr22"], "desc": "1 Chronicles 22" }, { "portion": ["Eze32"], "desc": "Ezekiel 32" }, { "portion": ["Eph3", "Eph4"], "desc": "Ephesians 3-4" }], // 6
      [{ "portion": ["1Chr23"], "desc": "1 Chronicles 23" }, { "portion": ["Eze33"], "desc": "Ezekiel 33" }, { "portion": ["Eph5", "Eph6"], "desc": "Ephesians 5-6" }], // 7
      [{ "portion": ["1Chr24", "1Chr25"], "desc": "1 Chronicles 24-25" }, { "portion": ["Eze34"], "desc": "Ezekiel 34" }, { "portion": ["Phi1", "Phi2"], "desc": "Philippians 1-2" }], // 8
      [{ "portion": ["1Chr26"], "desc": "1 Chronicles 26" }, { "portion": ["Eze35"], "desc": "Ezekiel 35" }, { "portion": ["Phi3", "Phi4"], "desc": "Philippians 3-4" }], // 9
      [{ "portion": ["1Chr27"], "desc": "1 Chronicles 27" }, { "portion": ["Eze36"], "desc": "Ezekiel 36" }, { "portion": ["John1"], "desc": "John 1" }], // 10
      [{ "portion": ["1Chr28"], "desc": "1 Chronicles 28" }, { "portion": ["Eze37"], "desc": "Ezekiel 37" }, { "portion": ["John2", "John3"], "desc": "John 2-3" }], // 11
      [{ "portion": ["1Chr29"], "desc": "1 Chronicles 29" }, { "portion": ["Eze38"], "desc": "Ezekiel 38" }, { "portion": ["John4"], "desc": "John 4" }], // 12
      [{ "portion": ["2Chr1", "2Chr2"], "desc": "2 Chronicles 1-2" }, { "portion": ["Eze39"], "desc": "Ezekiel 39" }, { "portion": ["John5"], "desc": "John 5" }], // 13
      [{ "portion": ["2Chr3", "2Chr4"], "desc": "2 Chronicles 3-4" }, { "portion": ["Eze40"], "desc": "Ezekiel 40" }, { "portion": ["John6"], "desc": "John 6" }], // 14
      [{ "portion": ["2Chr5", "2Chr6"], "desc": "2 Chronicles 5-6" }, { "portion": ["Eze41"], "desc": "Ezekiel 41" }, { "portion": ["John7"], "desc": "John 7" }], // 15
      [{ "portion": ["2Chr7"], "desc": "2 Chronicles 7" }, { "portion": ["Eze42"], "desc": "Ezekiel 42" }, { "portion": ["John8"], "desc": "John 8" }], // 16
      [{ "portion": ["2Chr8"], "desc": "2 Chronicles 8" }, { "portion": ["Eze43"], "desc": "Ezekiel 43" }, { "portion": ["John9", "John10"], "desc": "John 9-10" }], // 17
      [{ "portion": ["2Chr9"], "desc": "2 Chronicles 9" }, { "portion": ["Eze44"], "desc": "Ezekiel 44" }, { "portion": ["John11"], "desc": "John 11" }], // 18
      [{ "portion": ["2Chr10", "2Chr11"], "desc": "2 Chronicles 10-11" }, { "portion": ["Eze45"], "desc": "Ezekiel 45" }, { "portion": ["John12"], "desc": "John 12" }], // 19
      [{ "portion": ["2Chr12", "2Chr13"], "desc": "2 Chronicles 12-13" }, { "portion": ["Eze46"], "desc": "Ezekiel 46" }, { "portion": ["John13", "John14"], "desc": "John 13-14" }], // 20
      [{ "portion": ["2Chr14", "2Chr15"], "desc": "2 Chronicles 14-15" }, { "portion": ["Eze47"], "desc": "Ezekiel 47" }, { "portion": ["John15", "John16"], "desc": "John 15-16" }], // 21
      [{ "portion": ["2Chr16", "2Chr17"], "desc": "2 Chronicles 16-17" }, { "portion": ["Eze48"], "desc": "Ezekiel 48" }, { "portion": ["John17", "John18"], "desc": "John 17-18" }], // 22
      [{ "portion": ["2Chr18", "2Chr19"], "desc": "2 Chronicles 18-19" }, { "portion": ["Dan1"], "desc": "Daniel 1" }, { "portion": ["John19"], "desc": "John 19" }], // 23
      [{ "portion": ["2Chr20"], "desc": "2 Chronicles 20" }, { "portion": ["Dan2"], "desc": "Daniel 2" }, { "portion": ["John20", "John21"], "desc": "John 20-21" }], // 24
      [{ "portion": ["2Chr21", "2Chr22"], "desc": "2 Chronicles 21-22" }, { "portion": ["Dan3"], "desc": "Daniel 3" }, { "portion": ["Acts1"], "desc": "Acts 1" }], // 25
      [{ "portion": ["2Chr23"], "desc": "2 Chronicles 23" }, { "portion": ["Dan4"], "desc": "Daniel 4" }, { "portion": ["Acts2"], "desc": "Acts 2" }], // 26
      [{ "portion": ["2Chr24"], "desc": "2 Chronicles 24" }, { "portion": ["Dan5"], "desc": "Daniel 5" }, { "portion": ["Acts3", "Acts4"], "desc": "Acts 3-4" }], // 27
      [{ "portion": ["2Chr25"], "desc": "2 Chronicles 25" }, { "portion": ["Dan6"], "desc": "Daniel 6" }, { "portion": ["Acts5", "Acts6"], "desc": "Acts 5-6" }], // 28
      [{ "portion": ["2Chr26", "2Chr27"], "desc": "2 Chronicles 26-27" }, { "portion": ["Dan7"], "desc": "Daniel 7" }, { "portion": ["Acts7"], "desc": "Acts 7" }], // 29
      [{ "portion": ["2Chr28"], "desc": "2 Chronicles 28" }, { "portion": ["Dan8"], "desc": "Daniel 8" }, { "portion": ["Acts8"], "desc": "Acts 8" }], // 30
      [{ "portion": ["2Chr29"], "desc": "2 Chronicles 29" }, { "portion": ["Dan9"], "desc": "Daniel 9" }, { "portion": ["Acts9"], "desc": "Acts 9" }]  // 31
   ],
   [  // November (DONE)
      [{ "portion": ["2Chr30"], "desc": "2 Chronicles 30" }, { "portion": ["Dan10"], "desc": "Daniel 10" }, { "portion": ["Acts10"], "desc": "Acts 10" }], // 1
      [{ "portion": ["2Chr31"], "desc": "2 Chronicles 31" }, { "portion": ["Dan11"], "desc": "Daniel 11" }, { "portion": ["Acts11", "Acts12"], "desc": "Acts 11-12" }], // 2
      [{ "portion": ["2Chr32"], "desc": "2 Chronicles 32" }, { "portion": ["Dan12"], "desc": "Daniel 12" }, { "portion": ["Acts13"], "desc": "Acts 13" }], // 3
      [{ "portion": ["2Chr33"], "desc": "2 Chronicles 33" }, { "portion": ["Hos1"], "desc": "Hosea 1" }, { "portion": ["Acts14", "Acts15"], "desc": "Acts 14-15" }], // 4
      [{ "portion": ["2Chr34"], "desc": "2 Chronicles 34" }, { "portion": ["Hos2"], "desc": "Hosea 2" }, { "portion": ["Acts16", "Acts17"], "desc": "Acts 16-17" }], // 5
      [{ "portion": ["2Chr35"], "desc": "2 Chronicles 35" }, { "portion": ["Hos3"], "desc": "Hosea 3" }, { "portion": ["Acts18", "Acts19"], "desc": "Acts 18-19" }], // 6
      [{ "portion": ["2Chr36"], "desc": "2 Chronicles 36" }, { "portion": ["Hos4"], "desc": "Hosea 4" }, { "portion": ["Acts20"], "desc": "Acts 20" }], // 7
      [{ "portion": ["Ezra1", "Ezra2"], "desc": "Ezra 1-2" }, { "portion": ["Hos5"], "desc": "Hosea 5" }, { "portion": ["Acts21", "Acts22"], "desc": "Acts 21-22" }], // 8
      [{ "portion": ["Ezra3", "Ezra4"], "desc": "Ezra 3-4" }, { "portion": ["Hos6"], "desc": "Hosea 6" }, { "portion": ["Acts23", "Acts24"], "desc": "Acts 23-24" }], // 9
      [{ "portion": ["Ezra5", "Ezra6"], "desc": "Ezra 5-6" }, { "portion": ["Hos7"], "desc": "Hosea 7" }, { "portion": ["Acts25", "Acts26"], "desc": "Acts 25-26" }], // 10
      [{ "portion": ["Ezra7"], "desc": "Ezra 7" }, { "portion": ["Hos8"], "desc": "Hosea 8" }, { "portion": ["Acts27"], "desc": "Acts 27" }], // 11
      [{ "portion": ["Ezra8"], "desc": "Ezra 8" }, { "portion": ["Hos9"], "desc": "Hosea 9" }, { "portion": ["Acts28"], "desc": "Acts 28" }], // 12
      [{ "portion": ["Ezra9"], "desc": "Ezra 9" }, { "portion": ["Hos10"], "desc": "Hosea 10" }, { "portion": ["Col1"], "desc": "Colossians 1" }], // 13
      [{ "portion": ["Ezra10"], "desc": "Ezra 10" }, { "portion": ["Hos11"], "desc": "Hosea 11" }, { "portion": ["Col2"], "desc": "Colossians 2" }], // 14
      [{ "portion": ["Neh1", "Neh2"], "desc": "Nehemiah 1-2" }, { "portion": ["Hos12"], "desc": "Hosea 12" }, { "portion": ["Col3", "Col4"], "desc": "Colossians 3-4" }], // 15
      [{ "portion": ["Neh3"], "desc": "Nehemiah 3" }, { "portion": ["Hos13"], "desc": "Hosea 13" }, { "portion": ["1Th1", "1Th2"], "desc": "1 Thessalonians 1-2" }], // 16
      [{ "portion": ["Neh4"], "desc": "Nehemiah 4" }, { "portion": ["Hos14"], "desc": "Hosea 14" }, { "portion": ["1Th3", "1Th4"], "desc": "1 Thessalonians 3-4" }], // 17
      [{ "portion": ["Neh5", "Neh6"], "desc": "Nehemiah 5-6" }, { "portion": ["Joel1"], "desc": "Joel 1" }, { "portion": ["1Th5"], "desc": "1 Thessalonians 5" }], // 18
      [{ "portion": ["Neh7"], "desc": "Nehemiah 7" }, { "portion": ["Joel2"], "desc": "Joel 2" }, { "portion": ["2Th1", "2Th2"], "desc": "2 Thessalonians 1-2" }], // 19
      [{ "portion": ["Neh8"], "desc": "Nehemiah 8" }, { "portion": ["Joel3"], "desc": "Joel 3" }, { "portion": ["2Th3"], "desc": "2 Thessalonians 3" }], // 20
      [{ "portion": ["Neh9"], "desc": "Nehemiah 9" }, { "portion": ["Amos1"], "desc": "Amos 1" }, { "portion": ["1Tim1", "1Tim2", "1Tim3"], "desc": "1 Timothy 1-3" }], // 21
      [{ "portion": ["Neh10"], "desc": "Nehemiah 10" }, { "portion": ["Amos2"], "desc": "Amos 2" }, { "portion": ["1Tim4", "1Tim5"], "desc": "1 Timothy 4-5" }], // 22
      [{ "portion": ["Neh11"], "desc": "Nehemiah 11" }, { "portion": ["Amos3"], "desc": "Amos 3" }, { "portion": ["1Tim6"], "desc": "1 Timothy 6" }], // 23
      [{ "portion": ["Neh12"], "desc": "Nehemiah 12" }, { "portion": ["Amos4"], "desc": "Amos 4" }, { "portion": ["2Tim1"], "desc": "2 Timothy 1" }], // 24
      [{ "portion": ["Neh13"], "desc": "Nehemiah 13" }, { "portion": ["Amos5"], "desc": "Amos 5" }, { "portion": ["2Tim2"], "desc": "2 Timothy 2" }], // 25
      [{ "portion": ["Est1"], "desc": "Esther 1" }, { "portion": ["Amos6"], "desc": "Amos 6" }, { "portion": ["2Tim3", "2Tim4"], "desc": "2 Timothy 3-4" }], // 26
      [{ "portion": ["Est2"], "desc": "Esther 2" }, { "portion": ["Amos7"], "desc": "Amos 7" }, { "portion": ["Titus1", "Titus2", "Titus3"], "desc": "Titus 1-3" }], // 27
      [{ "portion": ["Est3", "Est4"], "desc": "Esther 3-4" }, { "portion": ["Amos8"], "desc": "Amos 8" }, { "portion": ["Phmn1"], "desc": "Philemon" }], // 28
      [{ "portion": ["Est5", "Est6"], "desc": "Esther 5-6" }, { "portion": ["Amos9"], "desc": "Amos 9" }, { "portion": ["Heb1", "Heb2"], "desc": "Hebrews 1-2" }], // 29
      [{ "portion": ["Est7", "Est8"], "desc": "Esther 7-8" }, { "portion": ["Obad1"], "desc": "Obadiah" }, { "portion": ["Heb3", "Heb4", "Heb5"], "desc": "Hebrews 3-5" }]  // 30
   ],
   [  // December (DONE)
      [{ "portion": ["Est9", "Est10"], "desc": "Esther 9-10" }, { "portion": ["Jonah1"], "desc": "Jonah 1" }, { "portion": ["Heb6", "Heb7"], "desc": "Hebrews 6-7" }], // 1
      [{ "portion": ["Job1", "Job2"], "desc": "Job 1-2" }, { "portion": ["Jonah2", "Jonah3"], "desc": "Jonah 2-3" }, { "portion": ["Heb8", "Heb9"], "desc": "Hebrews 8-9" }], // 2
      [{ "portion": ["Job3", "Job4"], "desc": "Job 3-4" }, { "portion": ["Jonah4"], "desc": "Jonah 4" }, { "portion": ["Heb10"], "desc": "Hebrews 10" }], // 3
      [{ "portion": ["Job5"], "desc": "Job 5" }, { "portion": ["Mic1"], "desc": "Micah 1" }, { "portion": ["Heb11"], "desc": "Hebrews 11" }], // 4
      [{ "portion": ["Job6", "Job7"], "desc": "Job 6-7" }, { "portion": ["Mic2"], "desc": "Micah 2" }, { "portion": ["Heb12"], "desc": "Hebrews 12" }], // 5
      [{ "portion": ["Job8"], "desc": "Job 8" }, { "portion": ["Mic3", "Mic4"], "desc": "Micah 3-4" }, { "portion": ["Heb13"], "desc": "Hebrews 13" }], // 6
      [{ "portion": ["Job9"], "desc": "Job 9" }, { "portion": ["Mic5"], "desc": "Micah 5" }, { "portion": ["Jas1"], "desc": "James 1" }], // 7
      [{ "portion": ["Job10"], "desc": "Job 10" }, { "portion": ["Mic6"], "desc": "Micah 6" }, { "portion": ["Jas2"], "desc": "James 2" }], // 8
      [{ "portion": ["Job11"], "desc": "Job 11" }, { "portion": ["Mic7"], "desc": "Micah 7" }, { "portion": ["Jas3", "Jas4"], "desc": "James 3-4" }], // 9
      [{ "portion": ["Job12"], "desc": "Job 12" }, { "portion": ["Nahum1", "Nahum2"], "desc": "Nahum 1-2" }, { "portion": ["Jas5"], "desc": "James 5" }], // 10
      [{ "portion": ["Job13"], "desc": "Job 13" }, { "portion": ["Nahum3"], "desc": "Nahum 3" }, { "portion": ["1Pet1"], "desc": "1 Peter 1" }], // 11
      [{ "portion": ["Job14"], "desc": "Job 14" }, { "portion": ["Hab1"], "desc": "Habakkuk 1" }, { "portion": ["1Pet2"], "desc": "1 Peter 2" }], // 12
      [{ "portion": ["Job15"], "desc": "Job 15" }, { "portion": ["Hab2"], "desc": "Habakkuk 2" }, { "portion": ["1Pet3", "1Pet4", "1Pet5"], "desc": "1 Peter 3-5" }], // 13
      [{ "portion": ["Job16", "Job17"], "desc": "Job 16-17" }, { "portion": ["Hab3"], "desc": "Habakkuk 3" }, { "portion": ["2Pet1", "2Pet2"], "desc": "2 Peter 1-2" }], // 14
      [{ "portion": ["Job18", "Job19"], "desc": "Job 18-19" }, { "portion": ["Zep1"], "desc": "Zephaniah 1" }, { "portion": ["2Pet3"], "desc": "2 Peter 3" }], // 15
      [{ "portion": ["Job20"], "desc": "Job 20" }, { "portion": ["Zep2"], "desc": "Zephaniah 2" }, { "portion": ["1Jn1", "1Jn2"], "desc": "1 John 1-2" }], // 16
      [{ "portion": ["Job21"], "desc": "Job 21" }, { "portion": ["Zep3"], "desc": "Zephaniah 3" }, { "portion": ["1Jn3", "1Jn4"], "desc": "1 John 3-4" }], // 17
      [{ "portion": ["Job22"], "desc": "Job 22" }, { "portion": ["Hag1", "Hag2"], "desc": "Haggai 1-2" }, { "portion": ["1Jn5"], "desc": "1 John 5" }], // 18
      [{ "portion": ["Job23", "Job24"], "desc": "Job 23-24" }, { "portion": ["Zec1"], "desc": "Zechariah 1" }, { "portion": ["2Jn1", "3Jn1"], "desc": "2-3 John" }], // 19
      [{ "portion": ["Job25", "Job26", "Job27"], "desc": "Job 25-27" }, { "portion": ["Zec2", "Zec3"], "desc": "Zechariah 2-3" }, { "portion": ["Jude1"], "desc": "Jude" }], // 20
      [{ "portion": ["Job28"], "desc": "Job 28" }, { "portion": ["Zec4", "Zec5"], "desc": "Zechariah 4-5" }, { "portion": ["Rev1", "Rev2"], "desc": "Revelation 1-2" }], // 21
      [{ "portion": ["Job29", "Job30"], "desc": "Job 29-30" }, { "portion": ["Zec6", "Zec7"], "desc": "Zechariah 6-7" }, { "portion": ["Rev3", "Rev4"], "desc": "Revelation 3-4" }], // 22
      [{ "portion": ["Job31", "Job32"], "desc": "Job 31-32" }, { "portion": ["Zec8"], "desc": "Zechariah 8" }, { "portion": ["Rev5", "Rev6"], "desc": "Revelation 5-6" }], // 23
      [{ "portion": ["Job33"], "desc": "Job 33" }, { "portion": ["Zec9"], "desc": "Zechariah 9" }, { "portion": ["Rev7", "Rev8", "Rev9"], "desc": "Revelation 7-9" }], // 24
      [{ "portion": ["Job34"], "desc": "Job 34" }, { "portion": ["Zec10"], "desc": "Zechariah 10" }, { "portion": ["Rev10", "Rev11"], "desc": "Revelation 10-11" }], // 25
      [{ "portion": ["Job35", "Job36"], "desc": "Job 35-36" }, { "portion": ["Zec11"], "desc": "Zechariah 11" }, { "portion": ["Rev12", "Rev13"], "desc": "Revelation 12-13" }], // 26
      [{ "portion": ["Job37"], "desc": "Job 37" }, { "portion": ["Zec12"], "desc": "Zechariah 12" }, { "portion": ["Rev14"], "desc": "Revelation 14" }], // 27
      [{ "portion": ["Job38"], "desc": "Job 38" }, { "portion": ["Zec13", "Zec14"], "desc": "Zechariah 13-14" }, { "portion": ["Rev15", "Rev16"], "desc": "Revelation 15-16" }], // 28
      [{ "portion": ["Job39"], "desc": "Job 39" }, { "portion": ["Mal1"], "desc": "Malachi 1" }, { "portion": ["Rev17", "Rev18"], "desc": "Revelation 17-18" }], // 29
      [{ "portion": ["Job40"], "desc": "Job 40" }, { "portion": ["Mal2"], "desc": "Malachi 2" }, { "portion": ["Rev19", "Rev20"], "desc": "Revelation 19-20" }], // 30
      [{ "portion": ["Job41", "Job42"], "desc": "Job 41-42" }, { "portion": ["Mal3", "Mal4"], "desc": "Malachi 3-4" }, { "portion": ["Rev21", "Rev22"], "desc": "Revelation 21-22" }]  // 31
   ]
];